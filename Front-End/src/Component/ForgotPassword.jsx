import React from 'react'

import forgotPasswordimg from "../Assets/forgotPassword.png"
import { Link } from 'react-router-dom'
export default function ForgotPassword() {
  return (
    <div>
    <div>
     <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
   
    <div className="d-flex justify-content-center align-items-center vh-100">   
    <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "60px" }}>
      <div className="text-center mb-3">
        <img src={forgotPasswordimg} alt="Shree Clinic Logo" className="img-fluid" />
      </div>
      <h2 className="text-center text-primary mb-4">Forgot Password</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>
        
        <button type="submit" className="btn btn-primary w-100">Submit</button>
        <div className="text-center mt-2">
          <span>Have an account? </span>
          <Link to="/login" className="text-decoration-none text-primary">Sign In</Link>
        </div>
       
      </form>
    </div>
  </div>
  </div>
      
    </div>
  )
}
