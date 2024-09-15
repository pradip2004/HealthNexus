import MedicalTestCards from '@/components/customs/MedicalTestCards'
import MedicalTestReportCards from '@/components/customs/MedicalTestReportCards'
import { useMedicalTests } from '@/context/MedicalTestContext';
import React from 'react'

function MedicalTestPage() {
  const { tests } = useMedicalTests();
  return (
    <div className='w-full  px-3 h-full'>
      <div className='w-full flex flex-col items-center py-5 '>
        <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Your Health, Our Tests</h1>
        <p className='font-kameron text-sm w-[50%] text-center'>Explore a wide range of medical tests available at our clinic. View and download your test reports securely from anywhere, anytime, and stay informed about your health.</p>
      </div>
      <div className='w-full h-[30rem] flex justify-between'>
        <div className='w-[69%] bg-white rounded-md h-full overflow-y-scroll'>
          <MedicalTestCards tests={tests}/>
        </div>
        <div className='w-[29%] bg-white rounded-md h-full overflow-y-scroll'>
          <MedicalTestReportCards />
        </div>
      </div>
    </div>
  )
}

export default MedicalTestPage