import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState(''); // For doctor login
  const [error, setError] = useState('');
  const [isDoctorLogin, setIsDoctorLogin] = useState(false); // To toggle between admin and doctor login
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      if (response.status === 200) {
        navigate('/admin/patients');
      }
    } catch (err) {
      setError('Invalid admin credentials');
    }
  };

  const handleDoctorLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/doctors/login', { email, code });
      if (response.status === 200) {
        localStorage.setItem('doctorData', JSON.stringify(response.data)); 
        navigate('/doctor/patients');
      }
    } catch (err) {
      setError('Invalid doctor credentials');
    }
  };

  const toggleLoginType = () => {
    setIsDoctorLogin(!isDoctorLogin);
    setEmail('');
    setPassword('');
    setCode('');
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen " style={{
      background: `linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)`}}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isDoctorLogin ? 'Doctor Login' : 'Admin Login'}
        </h1>

        <form onSubmit={isDoctorLogin ? handleDoctorLogin : handleAdminLogin} className="space-y-6">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1b4965] focus:border-[#1b4965] sm:text-sm"
              required
            />
          </div>

          {!isDoctorLogin && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1b4965] focus:border-[#1b4965] sm:text-sm"
                required
              />
            </div>
          )}

          {isDoctorLogin && (
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Doctor Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1b4965] focus:border-[#1b4965] sm:text-sm"
                required
              />
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 text-white bg-[#1b4965] hover:bg-opacity-90 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1b4965] text-sm font-medium"
            >
              {isDoctorLogin ? 'Login as Doctor' : 'Login as Admin'}
            </button>
          </div>
        </form>

        <button
          onClick={toggleLoginType}
          className="mt-4 text-[#1b4965] hover:text-opacity-90 text-sm text-center w-full"
        >
          {isDoctorLogin ? 'Login as Admin' : 'Login as Doctor'}
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
