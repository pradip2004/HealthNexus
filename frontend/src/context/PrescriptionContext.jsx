import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
const PrescriptionContext = createContext();

// Provider component
export const PrescriptionProvider = ({ children }) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const [formValues, setFormValues] = useState({
    patientDetails: { name: '', age: '', vitals: { pressure: '', temperature: '', oxygenLevel: '' } },
    diseaseName: '',
    symptoms: '',
    treatment: '',
    medicine: [{ name: '', dosage: '' }], // Initial empty object
    test: [],
  });

  // Fetch previous prescriptions of the patient
  const fetchPrescriptions = async (userId, doctorId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/prescriptions/${userId}/${doctorId}`);
      setPrescriptions(response.data);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  // Submit new prescription
  const submitPrescription = async (prescriptionData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/prescriptions', prescriptionData);
      console.log('Prescription saved:', response.data);
      // Optionally: Fetch updated prescriptions after submission
    } catch (error) {
      console.error('Error saving prescription:', error);
    }
  };

  const handleSelectPrescription = (prescription) => {
    setSelectedPrescription(prescription);
    // Update formValues only if a prescription is selected
    if (prescription) {
      setFormValues({
        ...formValues,
        patientDetails: {
          name: prescription.patientDetails.name,
          age: prescription.patientDetails.age,
          vitals: {
            pressure: prescription.patientDetails.vitals.pressure,
            temperature: prescription.patientDetails.vitals.temperature,
            oxygenLevel: prescription.patientDetails.vitals.oxygenLevel,
          },
        },
        diseaseName: prescription.diseaseName,
        symptoms: prescription.symptoms,
        treatment: prescription.treatment,
        medicine: prescription.medicine || [], // Use existing medicine if present
        test: prescription.test || [],
      });
    }
  };

  return (
    <PrescriptionContext.Provider value={{ prescriptions, selectedPrescription, handleSelectPrescription, fetchPrescriptions, formValues, setFormValues, submitPrescription,  }}>
      {children}
    </PrescriptionContext.Provider>
  );
};

// Hook to use context
export const usePrescriptionContext = () => useContext(PrescriptionContext);