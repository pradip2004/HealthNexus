import React from 'react'
import DoctorCard from '../smallComponents/DoctorCard'

function DoctorsSection() {
      return (
            <div className='w-full flex h-screen'>
                  <div className='w-1/2 flex flex-col items-start justify-center'>
                        <h1 className='text-9xl font-kameron capitalize font-medium text-[#1B4965] leading-none tracking-tight'>Meet Our Expert Doctors</h1>
                        <p className='text-lg font-kameron w-3/4 mb-4 leading-tight'>Effortlessly manage your clinic's appointments, prescriptions, medical records, billing, and patient information with a streamlined, user-friendly application.</p>
                  </div>
                  <div className=' w-1/2 flex items-center justify-center gap-3'>
                        <div className='flex flex-col gap-3'>
                              <DoctorCard />
                              <DoctorCard />
                        </div>
                        <div className='flex flex-col gap-3'>
                              <DoctorCard />
                              <DoctorCard />
                              <DoctorCard />
                        </div>
                        <div className='flex flex-col gap-3'>
                              <DoctorCard />
                              <DoctorCard />
                        </div>
                  </div>
            </div>
      )
}

export default DoctorsSection