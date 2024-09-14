// routes/admin.js
import express from 'express';
const router = express.Router();
import {adminLogin, allPatients} from '../controllers/adminController.js'
import { addMedicalTest, deleteMedicalTest, getAllMedicalTests } from '../controllers/medicalTestController.js';
import { addPrescription, getAllPrescriptions, getPrescriptionsByUserAndDoctor, getPrescriptionsByUserId } from '../controllers/prescriptionController.js';

// Route to handle admin login
router.post('/login', adminLogin);
router.get('/allpatients', allPatients);
router.post('/addtest', addMedicalTest);
router.get('/alltest', getAllMedicalTests);
router.delete('/deletetest/:testId', deleteMedicalTest);
router.post('/prescriptions', addPrescription);
router.get('/prescriptions', getAllPrescriptions);
router.get('/prescriptions/:userId/:doctorId', getPrescriptionsByUserAndDoctor);
router.get('/prescriptions/:userId', getPrescriptionsByUserId);
export default router;
