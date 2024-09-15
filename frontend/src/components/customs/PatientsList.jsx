import React from 'react';

function PatientsList({ filters, patients }) {
  // Sort patients by date (most recent first)
  const sortedPatients = patients.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Apply filters if selected
  const filteredPatients = sortedPatients.filter((patient) => {
    const matchDate = filters.date ? patient.date === filters.date : true;
    const matchDoctor = filters.doctor ? patient.doctor === filters.doctor : true;
    const matchTimeSlot = filters.timeSlot ? patient.time === filters.timeSlot : true;
    return matchDate && matchDoctor && matchTimeSlot;
  });

  return (
    <div className='p-4 flex flex-col gap-4'>
      {filteredPatients.length > 0 ? (
        filteredPatients.map((patient) => (
          <div key={patient.id} className='flex justify-between items-center bg-[#F0F4F8] p-4 rounded-lg shadow-md'>
            {/* Patient Details */}
            <div>
              <h3 className='font-semibold text-lg'>{patient.name}</h3>
              <p>Date: {patient.date}</p>
              <p>Doctor: {patient.doctor}</p>
              <p>Time: {patient.time}</p>
            </div>
            {/* Payment Options */}
            <div className='flex gap-2'>
              <button className='bg-green-500 text-white px-3 py-1 rounded-md'>Cash Payment</button>
              <button className='bg-blue-500 text-white px-3 py-1 rounded-md'>Online Payment</button>
            </div>
          </div>
        ))
      ) : (
        <p>No patients available for the selected filters.</p>
      )}
    </div>
  );
}

export default PatientsList;
