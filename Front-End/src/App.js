import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import ReactDOM from "react-dom/client";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from './Component/NoPage';
import NotFound from './Component/NotFound';
import ForgotPassword from './Component/ForgotPassword';
import OtpValidate from './Component/OtpValidate';
import PatientDashboard from './Component/PatientDashboard';
import StudyMaterial from './Component/StudyMaterial';
import DoctorDashboard from './Component/DoctorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otpValidate" element={<OtpValidate />} />
        <Route path="/PatientDashBoard" element={<PatientDashboard />} />
        <Route path="/StudyMaterial" element={<StudyMaterial />} />
        <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
