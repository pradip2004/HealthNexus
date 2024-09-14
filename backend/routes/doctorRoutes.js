import express from 'express';
import Doctor from '../models/doctorModel.js';
import { deleteDoctor, doctorLogin, getDoctor } from '../controllers/doctorController.js';

// import { isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add-doctor',  async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save();
        res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
    } catch (error) {
        res.status(400).json({ message: 'Failed to add doctor', error });
    }
});

// Route to get all doctors
router.get('/all-doctors', async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch doctors', error });
    }
});

router.delete('/delete/:id',  deleteDoctor);

router.get('/:id', getDoctor);
router.post('/login', doctorLogin);

export default router;
