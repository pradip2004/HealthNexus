import React from 'react';

// const tests = [
//   {
//     id: 1,
//     testName: 'Complete Blood Count (CBC)',
//     price: '$50',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     testName: 'Liver Function Test (LFT)',
//     price: '$80',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     testName: 'Kidney Function Test (KFT)',
//     price: '$75',
//     image: 'https://via.placeholder.com/150',
//   },
// ];

function MedicalTestCards({tests}) {
  return (
    <div className='p-4 flex flex-col gap-4'>
      {tests.map((test) => (
        <div key={test._id} className="flex items-center justify-between bg-[#F0F4F8] p-4 rounded-lg shadow-lg">
          {/* Cover Image */}
          <div className="w-24 h-24">
            <img src='https://via.placeholder.com/150' alt={test.name} className="w-full h-full rounded-md object-cover" />
          </div>
          {/* Test Details */}
          <div className="flex-1 ml-4">
            <h2 className="font-kameron text-lg font-bold text-[#1B4965]">{test.name}</h2>
            <p className="text-sm text-gray-600">Price: {test.price}</p>
          </div>
          {/* Book Test Button */}
          <div>
            <button className="bg-[#1B4965] text-white px-4 py-2 rounded-md hover:bg-[#3F88C5]">
              Book Test
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedicalTestCards;
