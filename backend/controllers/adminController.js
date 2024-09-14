import jwt from 'jsonwebtoken'
import Appointment from '../models/appointmentModel.js';


export const adminLogin = (req, res) => {
    const { email, password } = req.body;

    const adminEmail = 'pradip@gmail.com';
    const adminPassword = '123';

    if (email === adminEmail && password === adminPassword) {
        // Create a JWT token with a secret key and admin email
        const token = jwt.sign({ email: adminEmail }, 'your_jwt_secret_key', {
            expiresIn: '1h', // Set token expiration time
        });

        // Set the token as a cookie
        res.cookie('adminToken', token, {
            httpOnly: true, 
            maxAge: 60 * 60 * 1000, 
        });

        return res.status(200).json({ message: 'Admin login successful' });
    }

    return res.status(401).json({ message: 'Invalid admin credentials' });
};


export const allPatients = async (req, res) => {
    try {
      const appointments = await Appointment.find()
        .populate('user')  
        .populate('doctor'); 
      
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };