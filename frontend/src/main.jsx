import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppointmentPage from './pages/AppointmentPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import PrescriptionPage from './pages/PrescriptionPage.jsx'
import MedicalTestPage from './pages/MedicalTestPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AppointmentDetails from './pages/AppointmentDetails.jsx'
import Admin from './Admin.jsx'
import AddDoctors from './pages/admin/AddDoctors.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import PatientsPage from './pages/admin/PatientsPage.jsx'
import AddMedicalTest from './pages/admin/AddMedicalTest.jsx'
import Doctor from './Doctor.jsx'
import PatientsPageDoctor from './pages/admin/PatientsPageDoctor.jsx'
import ProtectedRoute from './components/customs/smallComponents/ProtectedRoute.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import PrescriptionMakePage from './pages/admin/PrescriptionPgae.jsx'

const router = createBrowserRouter([
  {
    element: <ProtectedRoute><App /></ProtectedRoute>,
    children: [
      {
        path: '/home',
        element: <AppointmentPage />
      },
      {
        path: '/appointment/:id',
        element: <AppointmentDetails />

      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/prescriptions',
        element: <PrescriptionPage />
      },
      {
        path: '/medical-tests',
        element: <MedicalTestPage />
      },
    ]
  },
  {
    element: <Admin />,
    children: [
      {
        path: '/admin/add-doctor',
        element: <AddDoctors />
      },
      {
        path: '/admin/dashboard',
        element: <AdminDashboard />
      },
      {
        path: '/admin/patients',
        element: <PatientsPage />
      },
      {
        path: '/admin/add-test',
        element: <AddMedicalTest />
      }
      
    ]
  },
  {
    element: <Doctor />,
    children: [
      {
        path: '/doctor/patients',
        element: <PatientsPageDoctor />
      },
      {
        path: '/doctor/patient/:id',
        element: <PrescriptionMakePage />
      }
      
      
    ]
  },
  {
    path: '/auth/signin',
    element: <SignInPage />,
  },
  {
    path: '/auth/signup',
    element: <SignUpPage />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />, 
},
  {
    path: '/',
    element: <LandingPage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
