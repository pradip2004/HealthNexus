import { BellIcon, Menu, User2 } from 'lucide-react'
import React from 'react'
import Btn from './smallComponents/Btn'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header() {
      const navigate = useNavigate();

      const handleLogout = async () => {
            localStorage.removeItem('token')
            try {
                  await axios.post('http://localhost:5000/api/patients/logout');
                  navigate('/');
            } catch (error) {
                  console.error('Error logging out', error);
            }
      }

      return (
            <div className='px-10 py-5 bg-white w-full flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                        <Menu />
                        <img src="/logo.svg" alt="" className='w-28' />
                  </div>
                  <div className='flex items-center gap-3'>
                        <div className='bg-[#CAF0F8] w-fit p-1 rounded-full text-[#1B4965] '>
                              <BellIcon />
                        </div>
                        <div className='bg-[#CAF0F8] w-fit p-1 rounded-full text-[#1B4965] '>
                              <User2 />
                        </div>
                        
                        <Btn clickHandler={handleLogout} text={'log out'} />
                  </div>

            </div>
      )
}

export default Header