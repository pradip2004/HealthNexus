import DoctorCards from '@/components/customs/DoctorCards'
import React from 'react'

function AppointmentPage() {
  
  return (
    <div className='w-full  px-3 h-full'>
      <div className='w-full flex flex-col items-center py-5 '>
        <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Book Your Appointment</h1>
        <p className='font-kameron text-sm w-[40%] text-center'>Schedule your visit with ease, at a time that works best for you. Quick, convenient, and tailored to your needs.</p>
      </div>
      <div className='w-full rounded-lg  bg-white h-[30rem] overflow-y-scroll'>
        <DoctorCards />
      </div>
    </div>
  )
}

export default AppointmentPage