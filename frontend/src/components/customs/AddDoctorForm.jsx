import { DoctorContext } from '@/context/DoctorContext';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';  // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import toastify CSS

function AddDoctorForm({ onAdd }) {
  const { addDoctor } = useContext(DoctorContext);
  const [doctor, setDoctor] = useState({
    image: '',
    name: '',
    email: '',
    speciality: '',
    description: '',
    experience: '',
    fees: '',
    dates: [],
    timeSlots: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({ ...prevDoctor, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoctor(doctor);
      setDoctor({ name: '', email: '', speciality: '', description: '', experience: '', fees: '', dates: [], timeSlots: [] });
      toast.success('Doctor added successfully!');  
    } catch (error) {
      toast.error('Failed to add doctor');  
      console.error(error);
    }
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />  {/* Add ToastContainer for the toast notifications */}
      <h2 className="text-2xl font-semibold text-[#1b4965] font-kameron mb-4">Add New Doctor</h2>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          name="image"
          value={doctor.image}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Image URL"
        />
      </div>

      {/* Doctor Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
        <input
          type="text"
          name="name"
          value={doctor.name}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Doctor Name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Doctor Email</label>
        <input
          type="email"
          name="email"
          value={doctor.email}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Doctor Email"
        />
      </div>

      {/* Speciality */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Speciality</label>
        <input
          type="text"
          name="speciality"
          value={doctor.speciality}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Speciality"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={doctor.description}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Description"
        />
      </div>

      {/* Experience */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Experience (Years)</label>
        <input
          type="number"
          name="experience"
          value={doctor.experience}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Experience in Years"
        />
      </div>

      {/* Consultancy Fees */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Consultancy Fees</label>
        <input
          type="number"
          name="fees"
          value={doctor.fees}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Consultancy Fees"
        />
      </div>

      {/* Available Dates */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Available Dates</label>
        <select
          name="dates"
          multiple
          value={doctor.dates}
          onChange={(e) => setDoctor({ ...doctor, dates: [...e.target.selectedOptions].map(o => o.value) })}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Available Time Slots</label>
        <select
          name="timeSlots"
          multiple
          value={doctor.timeSlots}
          onChange={(e) => setDoctor({ ...doctor, timeSlots: [...e.target.selectedOptions].map(o => o.value) })}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
          <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
          <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Doctor
      </button>
    </div>
  );
}

export default AddDoctorForm;
