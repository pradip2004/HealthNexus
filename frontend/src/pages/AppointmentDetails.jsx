import Btn from '@/components/customs/smallComponents/Btn';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentDetails = () => {
    const { id: doctorId } = useParams(); // Doctor's ID from URL params
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const availableTimes = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

    useEffect(() => {
        // Fetch user info from localStorage
        const userData = JSON.parse(localStorage.getItem('userInfo'));
        if (userData) {
            setUserInfo(userData);
        }

        // Fetch doctor details by ID
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/doctors/${doctorId}`);
                setDoctor(response.data);
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };
        fetchDoctorDetails();
    }, [doctorId]);

    const handleConfirmBooking = async () => {
        if (!selectedDate || !selectedTime) {
            toast.error('Please select a date and time.');
            return;
        }

        if (!userInfo) {
            toast.error('User not logged in.');
            return;
        }

        const appointmentData = {
            doctorObjectId: doctor._id,
            userObjectId: userInfo._id,  // User's ID from localStorage
            date: selectedDate,
            timeSlot: selectedTime,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/patients/addappointment', appointmentData);
            // if (response.status === 200) {
                toast.success(`Appointment confirmed for ${doctor?.name} on ${selectedDate} at ${selectedTime}`);
                navigate(-1); 
            // } else {
            //     toast.error('Failed to confirm the appointment.');
            // }
        } catch (error) {
            console.error('Error booking appointment:', error);
            toast.error('An error occurred while booking the appointment.');
        }
    };

    return (
        <div className='w-full flex flex-col gap-5 relative'>
            <div className='w-full flex flex-col items-center py-5'>
                <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Book Your Appointment</h1>
                <p className='font-kameron text-sm w-[40%] text-center'>
                    Schedule your visit with ease, at a time that works best for you. Quick, convenient, and tailored to your needs.
                </p>
            </div>

            <div className="doctor-details p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Doctor Info */}
                <div className="doctor-info p-4 rounded-lg shadow-lg bg-white">
                    {doctor ? (
                        <>
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-center">{doctor.name}</h3>
                            <p className="text-center text-gray-500 mb-4">{doctor.speciality}</p>
                        </>
                    ) : (
                        <p>Loading doctor details...</p>
                    )}
                </div>

                {/* Date Picker */}
                <div className="date-picker p-4 rounded-lg shadow-lg bg-white">
                    <h3 className="text-lg font-semibold mb-2">Select a Date</h3>
                    <input
                        type="date"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

                {/* Time Slots */}
                <div className="time-slots p-4 rounded-lg shadow-lg bg-white">
                    <h3 className="text-lg font-semibold mb-2">Select a Time</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {availableTimes.map((time, index) => (
                            <button
                                key={index}
                                className={`p-2 border rounded-lg ${selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
                        onClick={handleConfirmBooking}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>

            <button
                onClick={() => navigate(-1)}
                className='absolute bottom-5 left-5 px-6 py-2 bg-[#1B4965] text-white uppercase text-sm rounded-xl font-thin font-kameron'
            >
                Go Back
            </button>

            <ToastContainer />
        </div>
    );
};

export default AppointmentDetails;
