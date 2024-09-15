import React from 'react';
import { useNavigate } from 'react-router-dom';

function PatientsListComponent({ patients, filters }) {
  const navigate = useNavigate()
  
  const sortedPatients = patients.sort((a, b) => new Date(b.date) - new Date(a.date));

  
  const filteredPatients = sortedPatients.filter((patient) => {
    const matchDate = filters.date ? patient.date === filters.date : true;
    const matchTimeSlot = filters.timeSlot ? patient.timeSlot === filters.timeSlot : true;
    return matchDate && matchTimeSlot;
  });

  return (
    <div className='p-4 flex flex-col gap-4'>
      {filteredPatients.length > 0 ? (
        filteredPatients.map((patient) => (
          <div key={patient._id} className='flex justify-between items-center bg-[#F0F4F8] p-4 rounded-lg shadow-md'>
            {/* Patient Details */}
            <div>
              <h3 className='font-semibold text-lg'>{patient.user.name}</h3>
              <p>Date: {patient.date}</p>
              <p>Doctor: {patient.doctor.name}</p>
              <p>Time: {patient.timeSlot}</p>
            </div>
            {/* Action Buttons */}
            <div className='flex gap-2'>

              <button className='bg-green-500 text-white px-3 py-1 rounded-md'>Done</button>
              <button className='bg-blue-500 text-white px-3 py-1 rounded-md' onClick={()=>navigate(`/doctor/patient/${patient.user._id}`)}>Prescription</button>
            </div>
          </div>
        ))
      ) : (
        <p>No patients available for the selected filters.</p>
      )}
    </div>
  );
}

export default PatientsListComponent;
