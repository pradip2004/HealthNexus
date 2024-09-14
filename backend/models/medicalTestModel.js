
import mongoose from 'mongoose';

const medicalTestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const MedicalTest = mongoose.model('MedicalTest', medicalTestSchema);

export default MedicalTest;
