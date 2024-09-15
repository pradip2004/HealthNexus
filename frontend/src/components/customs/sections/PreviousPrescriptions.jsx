import { usePrescriptionContext } from '@/context/PrescriptionContext';
import React, { useEffect } from 'react';


const PreviousPrescriptions = ({ userId, doctorId }) => {
  const { prescriptions, fetchPrescriptions, handleSelectPrescription } = usePrescriptionContext();

  useEffect(() => {
    fetchPrescriptions(userId, doctorId);
  }, [userId, doctorId]);

  return (
    <div className='w-[15%] bg-white h-full rounded-lg p-4'>
      <h3 className='font-bold mb-4'>Previous Prescriptions</h3>
      {prescriptions.length > 0 ? (
        prescriptions.map((prescription, index) => (
          <div key={index} className='mb-4 p-2 bg-gray-100 rounded'>
            <p>{new Date(prescription.date).toLocaleDateString()}</p>
            <button onClick={() => handleSelectPrescription(prescription)} className='text-blue-500'>
              View
            </button>
          </div>
        ))
      ) : (
        <p>No previous prescriptions available</p>
      )}
    </div>
  );
};

export default PreviousPrescriptions;
