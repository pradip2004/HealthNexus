import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MedicalTestContext = createContext();

export const useMedicalTests = () => {
  return useContext(MedicalTestContext);
};

export const MedicalTestProvider = ({ children }) => {
  const [tests, setTests] = useState([]);

  
  const fetchTests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/alltest');
      console.log(response.data)
      setTests(response.data);
    } catch (error) {
      console.error('Error fetching medical tests:', error);
    }
  };

  const addTest = async (newTest) => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/addtest', newTest);
     
      setTests((prevTests) => [...prevTests, response.data]);
      fetchTests();
    } catch (error) {
      console.error('Error adding new test:', error);
    }
  };

  
  const removeTest = async (testId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/deletetest/${testId}`);
      setTests((prevTests) => prevTests.filter((test) => test._id !== testId));
    } catch (error) {
      console.error('Error deleting test:', error);
    }
  };

  useEffect(() => {
    fetchTests(); 
  }, []);

  return (
    <MedicalTestContext.Provider value={{ tests, addTest, removeTest }}>
      {children}
    </MedicalTestContext.Provider>
  );
};
