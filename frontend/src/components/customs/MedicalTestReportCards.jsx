import React from 'react';

const reports = [
  {
    id: 1,
    testName: 'Complete Blood Count (CBC)',
    date: '2024-08-10',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    testName: 'Liver Function Test (LFT)',
    date: '2024-08-12',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    testName: 'Kidney Function Test (KFT)',
    date: '2024-08-14',
    image: 'https://via.placeholder.com/100',
  },
];

function MedicalTestReportCards() {
  return (
    <div className='p-4 flex flex-col gap-4'>
      {reports.map((report) => (
        <div key={report.id} className="flex items-center justify-between bg-[#F0F4F8] p-3 rounded-md shadow-md">
          {/* Cover Image */}
          <div className="w-16 h-16">
            <img src={report.image} alt={report.testName} className="w-full h-full rounded-md object-cover" />
          </div>
          {/* Report Details */}
          <div className="flex-1 ml-3">
            <h2 className="font-kameron text-md font-semibold text-[#1B4965]">{report.testName}</h2>
            <p className="text-sm text-gray-600">Date: {report.date}</p>
          </div>
          {/* Download Button */}
          <div>
            <button className="bg-[#1B4965] text-white px-3 py-1 rounded-md hover:bg-[#3F88C5] text-sm">
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MedicalTestReportCards;
