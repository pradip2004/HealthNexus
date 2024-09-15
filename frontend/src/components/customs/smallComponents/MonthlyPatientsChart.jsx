import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; 

function MonthlyPatientsChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Patients Count',
        data: [30, 40, 35, 50, 60, 70, 90, 80, 85, 95, 100, 120],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        fill: true,
      },
    ],
  };

  useEffect(() => {
    return () => {
      
      const chart = Chart.getChart('monthlyPatientsChart'); 
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className='bg-white rounded-lg p-4 shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Monthly Patients Count</h2>
      <Line data={data} id="monthlyPatientsChart" />
    </div>
  );
}

export default MonthlyPatientsChart;
