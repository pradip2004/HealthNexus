import React from 'react'
import Btn from './smallComponents/Btn'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const handleRegisterClick = ()=>{
    navigate('/auth/signup')
  }

  const handleAdminLoginClick = () => {
    navigate('/admin/login'); // Navigate to admin login page
};
  return (
    <div className='py-5 flex items-center justify-between'>
      <img className='w-36' src="/logo.svg" alt="" />
      <div className='flex items-center gap-4'>
            <Btn clickHandler={handleAdminLoginClick} text={'Admin'}/>
            <Btn clickHandler={handleRegisterClick} text={'register'}/>
      </div>
    </div>
  )
}

export default Navbar