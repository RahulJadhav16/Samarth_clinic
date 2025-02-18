import React from 'react'
import signinimg from '../Assets/signup.png'
import { Link } from 'react-router-dom'


export default function Signup() {
  return (
    <div>
         <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
     
      <div className="d-flex justify-content-center align-items-center vh-130 my-4 barlow-thin">   
    <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "60px" }}>
      <div className="text-center mb-3">
        <img src={signinimg} alt="Shree Clinic Logo" className="img-fluid" />
      </div>
      <h2 className="text-center text-primary mb-4">Signup -create your account</h2>
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
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Re-Enter Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Mobile Number
          </label>
          <input type="text" className="form-control" id="name" placeholder="Enter your mobile number" required />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Address
          </label>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

       




        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        <div className="text-center mt-2">
          <span>Have an account? </span>
          <Link to="/login" className="text-decoration-none text-primary">Sign In</Link>
        </div>
      </form>
    </div>
  </div>
  </div>
    
  )
}
