import React from 'react';
import { usePrescriptionContext } from '@/context/PrescriptionContext';
import { useNavigate } from 'react-router-dom';

const PrescriptionForm = ({ userId, doctorId }) => {
  const navigate = useNavigate()
  const { formValues, setFormValues, submitPrescription } = usePrescriptionContext();

  // Handle form input change, including deeply nested fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldName = name.split('.'); // Handling nested fields like "patientDetails.vitals.pressure"

    // Check if it's a nested field with more than one level (e.g., vitals.pressure)
    if (fieldName.length === 3) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [fieldName[0]]: {
          ...prevValues[fieldName[0]],
          [fieldName[1]]: {
            ...prevValues[fieldName[0]][fieldName[1]],
            [fieldName[2]]: value,
          },
        },
      }));
    } else if (fieldName.length === 2) {
      setFormValues((prevValues) => ({
        ...prevValues,
        [fieldName[0]]: {
          ...prevValues[fieldName[0]],
          [fieldName[1]]: value,
        },
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  // Handle medicine input change
  const handleMedicineChange = (index, e) => {
    const { name, value } = e.target;
    const newMedicine = [...formValues.medicine];
    newMedicine[index][name] = value;
    setFormValues((prevValues) => ({
      ...prevValues,
      medicine: newMedicine,
    }));
  };

  // Add new medicine field
  const addMedicineField = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      medicine: [...prevValues.medicine, { name: '', dosage: '' }],
    }));
  };

  // Remove medicine field
  const removeMedicineField = (index) => {
    const newMedicine = formValues.medicine.filter((_, i) => i !== index);
    setFormValues((prevValues) => ({
      ...prevValues,
      medicine: newMedicine,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullPrescriptionData = {
      userObjectId: userId,
      doctorObjectId: doctorId,
      ...formValues,
    };

    submitPrescription(fullPrescriptionData);
  };

  return (
    <div className="w-full md:w-[38%] bg-white shadow-lg rounded-lg p-6 overflow-y-scroll">
      <h3 className="font-bold text-lg mb-6 text-center">Create Prescription</h3>
      <form onSubmit={handleSubmit}>
        {/* Patient Information */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Patient Name</label>
          <input
            type="text"
            name="patientDetails.name"
            value={formValues.patientDetails.name}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter patient's name"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Patient Age</label>
          <input
            type="number"
            name="patientDetails.age"
            value={formValues.patientDetails.age}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter patient's age"
          />
        </div>

        {/* Vitals Information */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Blood Pressure</label>
          <input
            type="text"
            name="patientDetails.vitals.pressure"
            value={formValues.patientDetails.vitals.pressure}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blood pressure"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Temperature</label>
          <input
            type="number"
            name="patientDetails.vitals.temperature"
            value={formValues.patientDetails.vitals.temperature}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter temperature"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Oxygen Level</label>
          <input
            type="number"
            name="patientDetails.vitals.oxygenLevel"
            value={formValues.patientDetails.vitals.oxygenLevel}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter oxygen level"
          />
        </div>

        {/* Disease and Symptoms */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Disease Name</label>
          <input
            type="text"
            name="diseaseName"
            value={formValues.diseaseName}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter disease name"
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Symptoms</label>
          <textarea
            name="symptoms"
            value={formValues.symptoms}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter symptoms"
          />
        </div>

        {/* Treatment */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Treatment</label>
           <textarea
            name="treatment"
            value={formValues.treatment}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter treatment" 
          /> 
          {/*  */}
        </div>

        {/* Medicine */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Medicines</label>
          {formValues.medicine.map((med, index) => (
            <div key={index} className="mb-2 flex items-center space-x-4">
              <input
                type="text"
                name="name"
                value={med.name}
                placeholder="Medicine Name"
                onChange={(e) => handleMedicineChange(index, e)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="dosage"
                value={med.dosage}
                placeholder="Dosage"
                onChange={(e) => handleMedicineChange(index, e)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeMedicineField(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={addMedicineField}
          >
            Add Medicine
          </button>
        </div>

        {/* Tests */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Tests</label>
          <textarea
            name="test"
            value={formValues.test.join(', ')}
            onChange={(e) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                test: e.target.value.split(',').map((test) => test.trim()),
              }))
            }
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Comma separated values"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition"
            onClick={()=>{navigate(-1)}}
          >
            Save Prescription
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrescriptionForm;
