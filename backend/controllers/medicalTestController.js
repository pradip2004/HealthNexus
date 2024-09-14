import MedicalTest from '../models/medicalTestModel.js';

export const addMedicalTest = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    if (!name || !description || !price) {
      return res.status(400).json({ message: 'Please provide all required fields: name, description, and price' });
    }

    const medicalTest = new MedicalTest({
      name,
      description,
      price,
    });

    await medicalTest.save();

    res.status(201).json({ message: 'Medical test added successfully', medicalTest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllMedicalTests = async (req, res) => {
  try {
    const medicalTests = await MedicalTest.find();
    res.status(200).json(medicalTests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMedicalTest = async (req, res) => {
      const { testId } = req.params;
    
      try {
        const deletedTest = await MedicalTest.findByIdAndDelete(testId);
    
        if (!deletedTest) {
          return res.status(404).json({ message: 'Medical test not found' });
        }
    
        res.status(200).json({ message: 'Medical test deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
