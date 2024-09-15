import MonthlyPatientsChart from '@/components/customs/smallComponents/MonthlyPatientsChart';
import MonthlyRevenueChart from '@/components/customs/smallComponents/MonthlyRevenueChart';
import StaffOverview from '@/components/customs/smallComponents/StaffOverview';
import UserFeedback from '@/components/customs/smallComponents/UserFeedback';
import React from 'react';


function AdminDashboard() {
  return (
    <div className='w-full px-4 '>

      <div className='flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div className='w-full md:w-[48%] lg:w-[48%] p-2'>
            <MonthlyPatientsChart />
          </div>
          <div className='w-full md:w-[48%] lg:w-[48%] p-2'>
            <MonthlyRevenueChart />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-full md:w-[48%] lg:w-[48%] p-2'>
            <UserFeedback />
          </div>
          <div className='w-full md:w-[48%] lg:w-[48%] p-2'>
            <StaffOverview />
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
