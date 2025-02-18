import React from 'react'
import DoctorNavBar from './DoctorNavBar'
import Footer from './Footer'

export default function DoctorDashboard() {
  return (
    <div className='container bg-img'>
      <DoctorNavBar/>
      {/* Greet by name  */}
      <div class="alert alert-success my-1 barlow-thin" role="alert">
        Welcome back Dr.Rahul, Good Morning !😊
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
         </button>
        </div>

        <div class="d-flex justify-content-around barlow-thin"> 
                <div className="card my-2 mx-1 border hover_card" style={{ width: "18rem" }}>
               <img src={require('../Assets/book.jpg')} className="card-img-top" alt="..." />
               <div className="card-body text-center">
               <h5 className="card-text">
               Create an  appointment
               </h5>
               </div>    
              </div>
        
              <div className="card my-2 hover_card" style={{ width: "18rem" }}>
               <img src={require('../Assets/Status.jpg')} className="card-img-top" alt="..." />
               <div className="card-body text-center">
               <h5 className="card-text">
               View Appointments 
               </h5>
               </div>       
        </div>
        </div>
        <div class="d-flex justify-content-around barlow-thin"> 
        
        <div className="card my-2 mx-1 hover_card" style={{ width: "18rem" }}>
               <img src={require('../Assets/patient.jpg')} className="card-img-top" alt="..." />
               <div className="card-body text-center">
               <h5 className="card-text">
               ➕ Add Patient History 
               </h5>
               </div>       
        </div>
        <div className="card my-2 mx-1 hover_card" style={{ width: "18rem" }}>
            <br/>
               <img src={require('../Assets/money.jpg')} className="card-img-top" alt="..." />
               <div className="card-body text-center">
               <h5 className="card-text">
               Payments
               </h5>
               </div>       
        </div>

        </div>
        <div class="d-flex justify-content-around barlow-thin"> 
        <div className="card my-2 hover_card mx-1" style={{ width: "18rem" }}>
            <br/>
            <br/>
            <br/>
               <img src={require('../Assets/refund.jpg')} className="card-img-top" alt="..." />
               <div className="card-body text-center">
               <h5 className="card-text">
               Refund History
               </h5>
               </div>       
        </div>
        
        <div className="card my-2 hover_card" style={{ width: "18rem" }}>
               <img src={require('../Assets/issue.jpg')} className="card-img-top" alt="..." />
               <div className="card-body text-center">
               <h5 className="card-text">
               View Issues
               </h5>
               </div>       
        </div>
        </div>
        
        
        
        
        <Footer/>



    </div>
  )
}
