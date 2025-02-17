import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Component/NoPage';
import NotFound from './Component/NotFound';
import ForgotPassword from './Component/ForgotPassword';
import OtpValidate from './Component/OtpValidate';
import PatientDashboard from './Component/PatientDashboard';
import StudyMaterial from './Component/StudyMaterial';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/otpValidate' element={<OtpValidate/>}/>
      <Route path='/PatientDashBoard' element={<PatientDashboard/>}/>
      <Route path='/StudyMaterial' element={<StudyMaterial/>}/>
      
      <Route path="*" element={<NotFound/>} />
    </Routes>
    
    </BrowserRouter>
    
 
  );
}

export default App;
