import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return userInfo ? children : <Navigate to="/auth/signup" />;
};

export default ProtectedRoute;
