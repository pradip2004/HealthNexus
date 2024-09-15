import React from 'react';

function StaffOverview() {
  const doctorsCount = 25; // Dummy value for the number of doctors
  const staffCount = 10; // Dummy value for the number of other staff

  return (
    <div className='bg-white rounded-lg p-4 shadow-md flex items-center justify-center gap-5'>
      <div className='w-44 h-44 bg-blue-300/30 rounded-full flex flex-col items-center justify-center '>
        <h1 className='text-5xl font-kameron font-bold text-blue-400'>{doctorsCount}</h1>
        <p className='text-sm text-sky-700'>Doctors</p>
      </div>
      <div className='w-44 h-44 bg-rose-300/30 rounded-full flex flex-col items-center justify-center '>
        <h1 className='text-5xl font-kameron font-bold text-rose-400'>{staffCount}</h1>
        <p className='text-sm text-red-700'>Medical Staff</p>
      </div>
      
    </div>
  );
}

export default StaffOverview;
