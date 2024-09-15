import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([]);


    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/doctors/all-doctors');
            setDoctors(response.data);
        } catch (error) {
            console.error('Failed to fetch doctors', error);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    const addDoctor = async (doctorData) => {
        try {
            await axios.post('http://localhost:5000/api/doctors/add-doctor', doctorData);
            fetchDoctors(); 
        } catch (error) {
            console.error('Failed to add doctor', error);
        }
    };

    const doctorRemove = async (doctorId) => {
        try {
          await axios.delete(`http://localhost:5000/api/doctors/delete/${doctorId}`);
          fetchDoctors(); 
        } catch (error) {
          console.error('Failed to remove doctor', error);
        }
      };

    return (
        <DoctorContext.Provider value={{ doctors, addDoctor, doctorRemove }}>
            {children}
        </DoctorContext.Provider>
    );
};
