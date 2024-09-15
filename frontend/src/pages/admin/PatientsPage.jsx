import PatientFilters from '@/components/customs/PatientFilters';
import PatientsList from '@/components/customs/PatientsList';
import React, { useState, useEffect } from 'react';

function PatientsPage() {
  const [filters, setFilters] = useState({ date: new Date().toISOString().split('T')[0], doctor: '', timeSlot: '' });
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/allpatients');
        const data = await response.json();

        // Transform the data to fit the expected structure
        const formattedPatients = data.map((appointment) => ({
          id: appointment._id,
          name: appointment.user ? appointment.user.name : 'Unknown User', // Check if user exists
          date: appointment.date,
          doctor: appointment.doctor ? appointment.doctor.name : 'Unknown Doctor', // Check if doctor exists
          time: appointment.timeSlot,
        }));

        setPatients(formattedPatients);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className='w-full px-3 h-full'>
      <div className='w-full flex flex-col items-center py-5'>
        <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Patients List</h1>
      </div>
      <div className='w-full flex justify-between h-[30rem]'>
        <div className='w-[74%] h-full rounded-lg overflow-y-scroll bg-white'>
          <PatientsList filters={filters} patients={patients} />
        </div>
        <div className='w-[24%] h-full rounded-lg overflow-y-scroll bg-white'>
          <PatientFilters setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
}

export default PatientsPage;
