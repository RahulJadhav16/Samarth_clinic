import React from 'react'
import { Link } from 'react-router-dom'
import otpimg from "../Assets/otp.png"

export default function OtpValidate() {
  return (
    <div>
         <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
   
    <div className="d-flex justify-content-center align-items-center vh-100">   
    <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "60px" }}>
      <div className="text-center mb-3">
        <img src={otpimg} alt="Shree Clinic Logo" className="img-fluid" />
      </div>
      <h2 className="text-center text-primary mb-4">Email Validation</h2>
      <form>
      <label htmlFor="otp" className="form-label">
      You may have received verification code on your registered email
          </label>
        
        <div className="mb-3">
          <label htmlFor="otp" className="form-label">
            Enter 4 Digit verification Code
          </label>
          <input type="Number" className="form-control" id="email" placeholder="1234" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Validate</button>

        <div className="text-center mt-3">
          <Link to="/" className="text-decoration-none">Resend Verification Code?</Link>
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
