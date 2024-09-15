import React from 'react';


function PrescriptionsCards({prescriptions}) {
  
  return (
    <div className="p-4 flex flex-col gap-4">
      {prescriptions.map((prescription) => (
        <div key={prescription._id} className="flex items-center justify-between bg-[#F0F4F8] shadow-lg p-4 rounded-lg ">
          {/* Cover Image */}
          <div className="w-24 h-24">
            <img src={prescription.doctor.image} alt="Prescription" className="w-full h-full rounded-md object-cover" />
          </div>
          {/* Prescription Details */}
          <div className="flex-1 ml-4">
            <h2 className="font-kameron text-lg font-bold text-[#1B4965]">{prescription.doctor.name}</h2>
            <p className="text-sm text-gray-600">Date: {new Date(prescription.date).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600">Disease: {prescription.diseaseName}</p>
            <p className="text-sm text-gray-600">Symptoms: {prescription.symptoms}</p>
          </div>
          {/* Download Button */}
          <div>
            <button className="bg-[#1B4965] text-white px-4 py-2 rounded-md hover:bg-[#3F88C5]">
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PrescriptionsCards;
