import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Patient from '../models/patientModel.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Register patient
export const registerPatient = async (req, res) => {
  const { name, email, password, address, phone, dateOfBirth } = req.body;

  const patientExists = await Patient.findOne({ email });

  if (patientExists) {
    return res.status(400).json({ message: 'Patient already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const patient = await Patient.create({
    name,
    email,
    password: hashedPassword,
    address,
    phone,
    dateOfBirth,
  });

  if (patient) {
    res.status(201).json({
      _id: patient._id,
      name: patient.name,
      email: patient.email,
      token: generateToken(patient._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid patient data' });
  }
};

// Login patient
export const loginPatient = async (req, res) => {
  const { email, password } = req.body;

  const patient = await Patient.findOne({ email });

  if (patient && (await bcrypt.compare(password, patient.password))) {
    res.json({
      _id: patient._id,
      name: patient.name,
      email: patient.email,
      token: generateToken(patient._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

export const logoutPatient = (req, res) => {
      try {
          // Clear the JWT cookie
      //     res.clearCookie('token', { httpOnly: true, sameSite: 'strict' });
          res.status(200).json({ message: 'Logout successful' });
      } catch (error) {
          res.status(500).json({ message: 'Logout failed', error });
      }
  };


  export const patientDetails = async (req, res) => {
    const { patientId } = req.params; 
  
    try {
      
      const patient = await Patient.findById(patientId).populate('appointments'); 
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      
      res.status(200).json({ patient });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  