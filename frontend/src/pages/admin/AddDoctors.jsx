import AddDoctorForm from '@/components/customs/AddDoctorForm';
import DoctorsList from '@/components/customs/DoctorsList';
import { DoctorContext } from '@/context/DoctorContext';
import React, { useContext, useState } from 'react';


function AddDoctors() {
  // Initial dummy doctors data
  // const [doctors, setDoctors] = useState([
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Dr. John Smith',
  //     speciality: 'Cardiologist',
  //     description: 'Expert in heart diseases and treatments',
  //     experience: 10,
  //     fees: 500,
  //     dates: ['Monday', 'Wednesday', 'Friday'],
  //     timeSlots: ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM']
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Dr. Jane Doe',
  //     speciality: 'Dermatologist',
  //     description: 'Specialist in skin conditions and treatments',
  //     experience: 8,
  //     fees: 400,
  //     dates: ['Tuesday', 'Thursday'],
  //     timeSlots: ['10:00 AM - 12:00 PM', '1:00 PM - 3:00 PM']
  //   },
  //   {
  //     image: 'https://via.placeholder.com/150',
  //     name: 'Dr. Emily Brown',
  //     speciality: 'Pediatrician',
  //     description: 'Provides medical care for children',
  //     experience: 12,
  //     fees: 450,
  //     dates: ['Monday', 'Wednesday', 'Saturday'],
  //     timeSlots: ['9:00 AM - 11:00 AM', '3:00 PM - 5:00 PM']
  //   }
  // ]);
  const { doctors } = useContext(DoctorContext);
  {console.log(doctors)}

  

  return (
    <div className='w-full px-3 h-full'>
      <div className='w-full flex flex-col items-center py-5'>
        <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Doctors List</h1>
      </div>
      <div className='w-full flex justify-between h-[30rem]'>
        {/* Doctors List */}
        <div className='w-[59%] h-full rounded-lg overflow-y-scroll bg-white'>
          <DoctorsList doctors={doctors}  />
        </div>

        {/* Add Doctor Form */}
        <div className='w-[39%] h-full rounded-lg overflow-y-scroll bg-white'>
          <AddDoctorForm  />
        </div>
      </div>
    </div>
  );
}

export default AddDoctors;
