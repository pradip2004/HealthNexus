import { DoctorContext } from '@/context/DoctorContext';
import axios from 'axios';
import React, { useContext, useState } from 'react';

function DoctorsList({ doctors }) {
  const { doctorRemove } = useContext(DoctorContext);

  
  return (
    <div className='p-4 flex flex-col gap-4'>
      {doctors && doctors.map((doctor, index) => (
        <div key={index} className='flex justify-between items-center bg-[#F0F4F8] p-4 rounded-lg shadow-md'>
          <div>
            <img src={doctor.image} alt="Doctor" className='w-16 h-16 rounded-full mb-2' />
            <h3 className='font-semibold text-lg'>{doctor.name}</h3>
            <p>Speciality: {doctor.speciality}</p>
            <p>Description: {doctor.description}</p>
            <p>Experience: {doctor.experience} years</p>
            <p>Consultancy Fees: {doctor.fees}</p>
            <p>Available Date: {doctor.dates.join(', ')}</p>
            <p>Time Slots: {doctor.timeSlots.join(', ')}</p>
          </div>
          <div className='flex gap-2'>
            <button onClick={()=>{}} className='bg-yellow-500 text-white px-3 py-1 rounded-md'>Modify</button>
            <button onClick={() => doctorRemove(doctor._id)} className='bg-red-500 text-white px-3 py-1 rounded-md'>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorsList;
