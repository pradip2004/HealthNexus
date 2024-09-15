import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar } from "@/components/ui/calendar";
import Btn from '@/components/customs/smallComponents/Btn';

const Dashboard = () => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [upiId, setUpiId] = useState('');
  const [date, setDate] = useState([]);
  const [userData, setUserData] = useState(null);
  const patientId = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo'))._id : null;

  useEffect(() => {
    const fetchUserData = async () => {
      if (patientId) {
        try {
          const response = await axios.get(`http://localhost:5000/api/patients/${patientId}`);
          const data = response.data;

          setUserData(data.patient);

          const appointmentDates = data.patient.appointments.map((appointment) => {
            const dateString = appointment.date;
            const [year, month, day] = dateString.split('-').map(Number);
            const dateObj = new Date(year, month - 1, day);

            return dateObj;
          });

          setDate(appointmentDates);

        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [patientId]);

  const transactionHistory = [
    { id: 1, date: '2024-09-01', amount: '$150', type: 'Consultation' },
    { id: 2, date: '2024-08-24', amount: '$100', type: 'Lab Test' },
    { id: 3, date: '2024-08-20', amount: '$50', type: 'Medicine' },
  ];

  const handlePayment = () => {
    alert(`Paid ${paymentAmount} via UPI: ${upiId}`);
    setPaymentAmount('');
    setUpiId('');
  };

  return (
    <div className="dashboard flex gap-6 w-full p-6 bg-gray-100">
      
      <div className='flex flex-col gap-4 w-[27%]'>
        {/* Section 1: Calendar for Appointments */}
        <div className="calendar-section bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointments</h2>
          <Calendar
            mode="multiple"
            selected={date}
            className="rounded-md border"
            readOnly
          />
        </div>
        
          <div className="calendar-section bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cancel Appointments</h2>
            <Btn text={"Cancel"} />
          </div>
        
      </div>
      {/* Bottom Row: Transaction History */}
      <div className="transaction-history bg-white shadow-lg rounded-lg p-6 w-[30%]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Transaction History</h2>
        <ul className="divide-y divide-gray-300">
          {transactionHistory.map((transaction) => (
            <li key={transaction.id} className="py-4">
              <p className="text-gray-700"><strong>Date:</strong> {transaction.date}</p>
              <p className="text-gray-700"><strong>Amount:</strong> {transaction.amount}</p>
              <p className="text-gray-700"><strong>Type:</strong> {transaction.type}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Payment Section */}
      <div className="payment-section bg-white shadow-lg rounded-lg p-6 w-[43%]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Make a Payment</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="upi-id">
            UPI ID
          </label>
          <input
            id="upi-id"
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Enter UPI ID"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            id="amount"
            type="text"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-[#1b4965] text-white py-3 rounded-lg text-lg hover:bg-[#123a51] transition-all"
        >
          Make Payment
        </button>

        <div className="mt-6">
          <p className="text-gray-600 text-center font-medium mb-4">Other Payment Options</p>
          <div className="flex justify-center space-x-6">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="PayPal" className="h-12 w-auto" />
            <img src="/card.png" className="h-12 w-auto" />
            <img src="https://cdn0.iconfinder.com/data/icons/flat-design-business-set-3/24/payment-method-visa-512.png" alt="Net Banking" className="h-12 w-auto" />
          </div>
        </div>
      </div>



    </div>
  );
};

export default Dashboard;
