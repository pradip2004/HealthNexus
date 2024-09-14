import Appointment from '../models/appointmentModel.js';
import Doctor from '../models/doctorModel.js';
import Patient from '../models/patientModel.js';

export const addAppointment = async (req, res) => {
  const { userObjectId, doctorObjectId, timeSlot, date } = req.body;

  try {
    const doctor = await Doctor.findById(doctorObjectId);
    const user = await Patient.findById(userObjectId);

    if (!doctor || !user) {
      return res.status(404).json({ message: 'Doctor or User not found' });
    }

    
    const appointment = new Appointment({
      user: userObjectId,
      doctor: doctorObjectId,
      timeSlot,
      date,
    });

    const savedAppointment = await appointment.save();

    
    user.appointments.push(savedAppointment._id);
    await user.save();
    
    doctor.appointments.push(savedAppointment._id);
    await doctor.save();

    res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
