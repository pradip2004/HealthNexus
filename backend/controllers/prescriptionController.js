// controllers/prescriptionController.js
import Prescription from '../models/prescriptionModel.js';
import Patient from '../models/patientModel.js';
import Doctor from '../models/doctorModel.js';

export const addPrescription = async (req, res) => {
  const {
    userObjectId,
    doctorObjectId,
    patientDetails, 
    diseaseName,
    symptoms,
    treatment,
    medicine, // Array of medicine with name and dosage
    test, // Array of test names
  } = req.body;

  try {
    // Check if the doctor and user (patient) exist
    const doctor = await Doctor.findById(doctorObjectId);
    const patient = await Patient.findById(userObjectId);

    if (!doctor || !patient) {
      return res.status(404).json({ message: 'Doctor or Patient not found' });
    }

    // Create the new prescription
    const prescription = new Prescription({
      user: userObjectId,
      doctor: doctorObjectId,
      patientDetails, // Name, age, vitals of the patient
      diseaseName,
      symptoms,
      treatment,
      medicine, // Array of medicines
      test, // Array of tests
    });

    // Save the prescription
    await prescription.save();

    // Add prescription to the patient's prescription array
    patient.prescriptions.push(prescription._id);
    await patient.save();

    res.status(201).json({ message: 'Prescription added successfully', prescription });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllPrescriptions = async (req, res) => {
      try {
        const prescriptions = await Prescription.find()
          .populate('user')    // Populate patient details
          .populate('doctor');  // Populate doctor details
    
        res.status(200).json(prescriptions);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };

    export const getPrescriptionsByUserAndDoctor = async (req, res) => {
      const { userId, doctorId } = req.params;
    
      try {
        // Find prescriptions where both the user (patient) and doctor match
        const prescriptions = await Prescription.find({
          user: userId,
          doctor: doctorId
        })
        .populate('user')  // Populate user (patient) data
        .populate('doctor'); // Populate doctor data
    
        if (!prescriptions || prescriptions.length === 0) {
          return res.status(404).json({ message: 'No prescriptions found for this user and doctor' });
        }
    
        res.status(200).json(prescriptions);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };


    export const getPrescriptionsByUserId = async (req, res) => {
      const { userId } = req.params;
    
      try {
        // Find the patient by userId
        const patient = await Patient.findById(userId).populate('prescriptions');
    
        if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
    
        // Populate the prescriptions with doctor details
        const prescriptions = await Promise.all(
          patient.prescriptions.map(async (prescriptionId) => {
            const prescription = await Prescription.findById(prescriptionId).populate('doctor');
            return prescription;
          })
        );
        // const prescriptions = patient.prescriptions;
    
        res.status(200).json(prescriptions);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };