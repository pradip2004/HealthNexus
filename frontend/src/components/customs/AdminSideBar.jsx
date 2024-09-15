import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminSideBar() {
      const [activeSection, setActiveSection] = useState('Patients'); 
      const navigate = useNavigate();
      const paths = [
          '/admin/patients',
          '/admin/dashboard',
          '/admin/add-doctor',
          '/admin/add-test',
          
      ]
      
      const handleClick = (section, index) => {
        setActiveSection(section);
        navigate(`${paths[index]}`);
      };
    
      return (
        <div className='px-3 w-60 bg-white py-3'>
          <h3 className='text-[#1B4965] font-semibold text-lg'>Menu</h3>
          <div>
            <ul className='flex flex-col gap-2 mt-5'>
              {['Patients', 'Dashboard', 'Add Doctor', 'Add Medical Tests'].map((section, index) => (
                <li
                  key={section}
                  className={`p-3 rounded-lg ${
                    activeSection === section ? 'bg-[#CAF0F8]' : 'bg-transparent'
                  }`}
                  onClick={() => handleClick(section, index)}
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

export default AdminSideBar