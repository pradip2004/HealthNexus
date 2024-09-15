import React, { useState } from 'react';

function AddTestForm({ onAdd }) {
  const [test, setTest] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTest((prevTest) => ({ ...prevTest, [name]: value }));
  };

  const handleAddTest = () => {
    onAdd(test);
    setTest({ name: '', price: '', description: '' });
  };

  return (
    <div className='w-full p-6'>
      <h2 className='text-2xl font-semibold text-[#1b4965] font-kameron mb-4'>Add New Test</h2>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Test Name</label>
        <input
          type="text"
          name="name"
          value={test.name}
          onChange={handleInputChange}
          className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
          placeholder='Enter Test Name'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Charges</label>
        <input
          type="number"
          name="price"
          value={test.price}
          onChange={handleInputChange}
          className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
          placeholder='Enter Charges'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700'>Description</label>
        <textarea
          name="description"
          value={test.description}
          onChange={handleInputChange}
          className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
          placeholder='Enter Description'
        />
      </div>
      <button
        onClick={handleAddTest}
        className='w-full py-2 px-4 bg-[#1b4965] text-white font-semibold rounded-md hover:bg-[#3F88C5] focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Add Test
      </button>
    </div>
  );
}

export default AddTestForm;
