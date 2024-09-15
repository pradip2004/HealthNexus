import React from 'react';
import { usePrescriptionContext } from '@/context/PrescriptionContext';

const LivePreview = () => {
  const { formValues } = usePrescriptionContext();

  return (
    <div className="w-full md:w-[45%] bg-white h-full rounded-lg shadow-lg p-6 overflow-y-auto">
      {/* Live Preview Title */}
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Live Prescription Preview</h3>
      {/* Static Clinic Information */}
      <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">HealthCare Clinic</h2>
          <p className="text-blue-800">123 Wellness Ave, Healthy City</p>
          <p className="text-blue-800">Phone: (123) 456-7890</p>
          <p className="text-blue-800">Email: clinic@example.com</p>
        </div>

        <div>
        <h2 className="text-2xl font-bold text-blue-900">Dr. {localStorage.getItem('doctorData')
      ? JSON.parse(localStorage.getItem('doctorData')).name
      : 'Doctor Name Not Found'}</h2>
        <p className="text-blue-600">{localStorage.getItem('doctorData')
      ? JSON.parse(localStorage.getItem('doctorData')).speciality
      : 'Speciality Not Found'}</p>
        </div>


      </div>

      {/* Divider */}
      <div className="border-b-2 border-gray-200 my-6"></div>



      {/* Patient Information */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-1">Patient Information</h4>
        <p className="text-gray-600"><strong>Name:</strong> {formValues.patientDetails.name || 'N/A'}</p>
        <p className="text-gray-600"><strong>Age:</strong> {formValues.patientDetails.age || 'N/A'}</p>
      </div>

      {/* Vitals Information */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-1">Vitals</h4>
        <p className="text-gray-600"><strong>Blood Pressure:</strong> {formValues.patientDetails.vitals.pressure || 'N/A'}</p>
        <p className="text-gray-600"><strong>Temperature:</strong> {formValues.patientDetails.vitals.temperature || 'N/A'}</p>
        <p className="text-gray-600"><strong>Oxygen Level:</strong> {formValues.patientDetails.vitals.oxygenLevel || 'N/A'}</p>
      </div>

      {/* Disease and Symptoms */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-1">Diagnosis</h4>
        <p className="text-gray-600"><strong>Disease Name:</strong> {formValues.diseaseName || 'N/A'}</p>
        <p className="text-gray-600"><strong>Symptoms:</strong> {formValues.symptoms || 'N/A'}</p>
      </div>

      {/* Treatment */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-1">Treatment</h4>
        <p className="text-gray-600">{formValues.treatment || 'N/A'}</p>
      </div>

      {/* Medicine Information */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-1">Medicines</h4>
        {formValues.medicine.length > 0 ? (
          formValues.medicine.map((med, index) => (
            <div key={index} className="mb-2 text-gray-600">
              <p><strong>Medicine {index + 1}:</strong> {med.name || 'N/A'}</p>
              <p><strong>Dosage:</strong> {med.dosage || 'N/A'}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No medicines added.</p>
        )}
      </div>

      {/* Tests Information */}
      <div className="mb-4">
        <h4 className="font-semibold text-lg text-gray-700 mb-1">Recommended Tests</h4>
        {formValues.test.length > 0 ? (
          <ul className="text-gray-600">
            {formValues.test.map((test, index) => (
              <li key={index}>{test}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No tests recommended.</p>
        )}
      </div>
    </div>
  );
};

export default LivePreview;
