import PatientFilters from '@/components/customs/PatientFilters';
import PatientsListComponent from '@/components/customs/smallComponents/PatientListComponent';
import React, { useState, useEffect } from 'react';

function PatientsPageDoctor() {
  const [filters, setFilters] = useState({ date: new Date().toISOString().split('T')[0], timeSlot: '' });
  const [patients, setPatients] = useState([]);

  // Fetch patients based on doctor email
  useEffect(() => {
    const doctorData = JSON.parse(localStorage.getItem('doctorData'));

    // Check if doctorData exists and contains an email
    if (doctorData && doctorData.email) {
      const fetchPatients = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/admin/allpatients');
          const data = await response.json();
          
          // Filter the patients that have appointments with the doctor
          const filteredPatients = data.filter(patient => patient.doctor && patient.doctor.email === doctorData.email);
          setPatients(filteredPatients);
        } catch (error) {
          console.error('Error fetching patients:', error);
        }
      };

      fetchPatients();
    } else {
      console.error('Doctor data is missing or incomplete in localStorage');
    }
  }, []);

  return (
    <div className='w-full px-3 h-full'>
      <div className='w-full flex flex-col items-center py-5 '>
        <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Patients List</h1>
      </div>
      <div className='w-full flex justify-between h-[30rem] '>
        <div className='w-[74%] h-full rounded-lg overflow-y-scroll bg-white'>
          <PatientsListComponent patients={patients} filters={filters} />
        </div>
        <div className='w-[24%] h-full rounded-lg overflow-y-scroll bg-white'>
          <PatientFilters setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
}

export default PatientsPageDoctor;
