import React, { useState } from 'react';

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

function PatientFilters({ setFilters }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleFilterChange = () => {
    setFilters({
      date: selectedDate || new Date().toISOString().split('T')[0],
      timeSlot: selectedTimeSlot,
    });
  };

  return (
    <div className='p-4'>
      {/* Date Filter */}
      <div className='mb-4'>
        <label className='block text-sm font-medium'>Date</label>
        <input
          type='date'
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className='border border-gray-300 rounded-md w-full px-2 py-1'
        />
      </div>
      
      {/* Time Slot Filter */}
      <div className='mb-4'>
        <label className='block text-sm font-medium'>Time Slot</label>
        <select
          value={selectedTimeSlot}
          onChange={(e) => setSelectedTimeSlot(e.target.value)}
          className='border border-gray-300 rounded-md w-full px-2 py-1'
        >
          <option value=''>All Time Slots</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
      
      {/* Apply Filter Button */}
      <button
        onClick={handleFilterChange}
        className='bg-[#1b4965] text-white w-full py-2 rounded-md mt-2'
      >
        Apply Filters
      </button>
    </div>
  );
}

export default PatientFilters;
