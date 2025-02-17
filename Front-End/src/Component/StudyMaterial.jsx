import React from 'react'
import PatientNavbar from './PatientNavbar'
import Footer from './Footer'

export default function StudyMaterial() {
  return (

    <div className='container'>

        <PatientNavbar/>

    <div>
      <div className="card my-2">
  <h5 className="card-header">Provided By Doctor Abc</h5>
  <div className="card-body">
    <h5 className="card-title">Simple & Effective Frozen Shoulder Exercises </h5>
    <p className="card-text">
    Frozen shoulder exercises, frozen shoulder exercises at home, frozen shoulder treatment, frozen shoulder physiotherapy exercises, how to treat frozen shoulder, frozen shoulder pain relief exercises, shoulder frozen treatment, exercises for frozen shoulder pain
    </p>
    <a href="https://www.youtube.com/watch?v=frrPIRs1tjA" target='_blank'  className="btn btn-primary">
      Watch a Video
    </a>
  </div>
  </div>
    </div>

    
    </div>
  )
}
