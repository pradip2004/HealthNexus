import React from 'react'
import Navbar from '../Navbar'
import Btn from '../smallComponents/Btn'
import CountDetails from '../smallComponents/CountDetails'
import { Link } from 'react-router-dom'

function HeroSection() {
      return (
            <div className='relative'>
                  <Navbar />
                  <div className='w-full flex h-[90vh]'>
                        <div className='w-1/2 flex flex-col items-start justify-center'>
                              <h1 className='text-9xl font-kameron uppercase font-medium text-[#1B4965]'>Health
                                    Nexus</h1>
                              <p className='text-lg font-kameron w-3/4 mb-4'>Effortlessly manage your clinic's appointments, prescriptions, medical records, billing, and patient information with a streamlined, user-friendly application.</p>
                              <Link to={'/auth/signin'}><Btn text={'login'} /></Link>
                        </div>
                        <div className='flex items-center justify-center'>
                              <img src="/heroImg.png" alt="" />
                        </div>
                  </div>
                  <CountDetails />
            </div>
      )
}

export default HeroSection