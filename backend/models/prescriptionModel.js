// models/prescriptionModel.js
import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // Reference to the Patient model
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor model
    required: true,
  },
  // Nested object for detailed patient information
  patientDetails: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    vitals: {
      pressure: {
        type: String, // Can be a String (e.g., "120/80 mmHg") or a sub-schema for systolic/diastolic
      },
      temperature: {
        type: Number,
      },
      oxygenLevel: {
        type: Number,
      },
    },
  },
  diseaseName: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String, 
  },
  treatment: {
    type: String,
  },
  medicine: {
    type: Array,
    required: true,
    of: {
     
      name: {
        type: String,
        required: true,
      },
      dosage: {
        type: String, 
      },
    },
  },
  test: {
    type: [String], 
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
export default Prescription;
