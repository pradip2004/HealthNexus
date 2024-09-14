import mongoose from 'mongoose';

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  prescriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prescription'}]
}, {
  timestamps: true,
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
