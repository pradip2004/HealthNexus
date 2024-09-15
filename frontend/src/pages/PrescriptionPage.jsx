import React, { useEffect, useState } from 'react';
import PrescriptionsCards from '@/components/customs/PrescriptionsCards';
import axios from 'axios';

function PrescriptionPage() {
  const [prescriptions, setPrescriptions] = useState([]);
  const userId = JSON.parse(localStorage.getItem('userInfo'))._id;

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/admin/prescriptions/${userId}`);
        setPrescriptions(response.data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    };

    fetchPrescriptions();
  }, [userId]);


  return (
    <div className='w-full px-3 h-full'>
      <div className='w-full flex flex-col items-center py-5'>
        <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Your Digital Prescriptions</h1>
        <p className='font-kameron text-sm w-[40%] text-center'>Access and download your prescriptions anytime, anywhere with our secure and convenient digital storage system.</p>
      </div>
      <div className='w-full rounded-lg bg-white h-[30rem] overflow-y-scroll shadow-lg'>
        <PrescriptionsCards prescriptions={prescriptions} /> {/* Pass prescriptions data as props */}
      </div>
    </div>
  );
}

export default PrescriptionPage;
