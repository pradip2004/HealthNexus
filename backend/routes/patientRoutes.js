import express from 'express';
import { registerPatient, loginPatient, logoutPatient, patientDetails } from '../controllers/patientController.js';
import { addAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/register', registerPatient);
router.post('/login', loginPatient);
router.post('/logout', logoutPatient);
router.post('/addappointment', addAppointment);
router.get('/:patientId', patientDetails);

export default router;
