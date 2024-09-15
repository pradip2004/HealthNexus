import LivePreview from '@/components/customs/sections/LivePreview';
import PrescriptionForm from '@/components/customs/sections/PrescriptionForm';
import PreviousPrescriptions from '@/components/customs/sections/PreviousPrescriptions';
import { PrescriptionProvider } from '@/context/PrescriptionContext';
import React from 'react';
import { useParams } from 'react-router-dom';


const PrescriptionMakePage = () => {
  const userId = useParams().id;
  const doctorData = JSON.parse(localStorage.getItem('doctorData'));
  const doctorId = doctorData.doctorId;


// console.log(doctorId); 
//   console.log(userId);

  return (
    <PrescriptionProvider>
      <div className='w-full px-3 h-full py-5 flex justify-between'>
        <PreviousPrescriptions userId={userId} doctorId={doctorId} />
        <PrescriptionForm userId={userId} doctorId={doctorId}/>
        <LivePreview />
      </div>
    </PrescriptionProvider>
  );
};

export default PrescriptionMakePage;
