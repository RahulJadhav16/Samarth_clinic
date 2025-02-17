import React from 'react'


import signinimg from '../Assets/login2.png'
import { Link,useNavigate } from 'react-router-dom';



export default function Login() {

  const navigate=useNavigate();
  const HandelLogin=()=>{
    navigate('/PatientDashBoard')

  }

  return (
    <div>
     <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
   
    <div className="d-flex justify-content-center align-items-center vh-100">   
    <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "60px" }}>
      <div className="text-center mb-3">
        <img src={signinimg} alt="Shree Clinic Logo" className="img-fluid" />
      </div>
      <h2 className="text-center text-primary mb-4">Shree Clinic</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100" onClick={HandelLogin}>Sign In</button>
        <div className="text-center mt-3">
        
          <Link to="/forgotpassword" className="text-decoration-none">Forgot Password?</Link>
        </div>
        <div className="text-center mt-2">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-decoration-none text-primary">Sign Up</Link>
        </div>
      </form>
    </div>
  </div>
  </div>
  
  )
}
