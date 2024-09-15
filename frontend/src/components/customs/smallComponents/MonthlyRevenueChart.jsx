import React from 'react';
import { Bar } from 'react-chartjs-2';

function MonthlyRevenueChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Revenue (₹)',
        data: [10000, 12000, 15000, 18000, 20000, 22000, 25000, 27000, 30000, 32000, 35000, 40000],
        backgroundColor: '#1b4965',
        showLine: false
      },
    ],
  };

  return (
    <div className='bg-white rounded-lg p-4 shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Monthly Revenue</h2>
      <Bar data={data} />
    </div>
  );
}

export default MonthlyRevenueChart;
