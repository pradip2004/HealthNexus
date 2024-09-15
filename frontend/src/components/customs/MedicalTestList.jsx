import React from 'react';

function MedicalTestList({ tests, onRemove }) {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-semibold mb-4 text-[#1b4965] font-kameron'>Available Medical Tests</h2>
      {tests && tests.map((test) => (
        <div key={test._id} className='mb-4 p-4  bg-[#F0F4F8] rounded-lg shadow-md'>
          <h3 className='font-bold text-lg'>{test.name}</h3>
          <p className='text-sm text-gray-600'>Charges: ₹{test.price}</p>
          <p className='text-sm text-gray-600'>{test.description}</p>
          <div className='mt-2'>
            <button className='mr-2 bg-yellow-400 text-white py-1 px-3 rounded-md'>Modify</button>
            <button 
              onClick={() => onRemove(test._id)} 
              className='bg-red-500 text-white py-1 px-3 rounded-md'
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedicalTestList;
