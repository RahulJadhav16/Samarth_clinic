import React from 'react'
import { Link } from "react-router-dom";

export default function NotFound() {
 
    return (
        <div className='container d-flex justify-content-center align-items-center vh-100 text-center'>
          <div className='row'>
            <div className='col-12'>
              <div className='four_zero_four_bg'>
                <h1 className='display-1 fw-bold text-danger'>404</h1>
              </div>
              <div className='content_box_404'>
                <h3 className='h2'>Looks like you're lost</h3>
                <p className='text-muted'>The page you are looking for is not available!</p>
                <Link to='/login' className='btn btn-primary mt-3'>Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    