import React from 'react'
import Header from './components/customs/Header'
import SideBar from './components/customs/SideBar'
import { Outlet } from 'react-router-dom'
import { DoctorProvider } from './context/DoctorContext'
import { MedicalTestProvider } from './context/MedicalTestContext'



function App() {
  return (
    <MedicalTestProvider>
    <DoctorProvider>
    <div className='overflow-hidden h-screen bg-white'>
      <Header />
      <div className='flex bg-[#E9F7FF] h-[90vh]'>
        <SideBar />
        <Outlet />
      </div>

    </div>
    </DoctorProvider>
    </MedicalTestProvider>
  )
}

export default App