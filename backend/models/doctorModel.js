import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    email: {type: String, required: true},
    speciality: { type: String, required: true },
    description: { type: String, required: true },
    experience: { type: Number, required: true },
    fees: { type: Number, required: true },
    dates: [{ type: String, required: true }],
    timeSlots: [{ type: String, required: true }],
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
}, {
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
