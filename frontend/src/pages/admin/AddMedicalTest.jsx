import AddTestForm from '@/components/customs/AddTestForm';
import MedicalTestList from '@/components/customs/MedicalTestList';
import React from 'react';
import { useMedicalTests } from '@/context/MedicalTestContext';

function AddMedicalTest() {
  const { tests, addTest, removeTest } = useMedicalTests();

  return (
    <div className='w-full px-3 h-full'>
      <div className='w-full flex flex-col items-center py-5'>
        <h1 className='text-4xl font-kameron font-semibold text-[#1B4965]'>Medical Test List</h1>
      </div>
      <div className='w-full flex justify-between h-[30rem]'>
        <div className='w-[59%] h-full rounded-lg overflow-y-scroll bg-white'>
          <MedicalTestList tests={tests} onRemove={removeTest} />
        </div>
        <div className='w-[39%] h-full rounded-lg overflow-y-scroll bg-white'>
          <AddTestForm onAdd={addTest} />
        </div>
      </div>
    </div>
  );
}

export default AddMedicalTest;
