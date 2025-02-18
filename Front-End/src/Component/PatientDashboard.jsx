import React from 'react'
import PatientNavbar from './PatientNavbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

export default function PatientDashboard() {

    const navigate = useNavigate();

    const handelWatchStudyMaterial=()=>{
        navigate('/StudyMaterial');
        

    }
  return (
    <div className='container bgcolor barlow-thin bg-img'>
        <PatientNavbar/>
        {/* Greet by name  */}
        <div class="alert alert-success my-1" role="alert">
        Welcome back Rahul, Good Morning !😊
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
         </button>
        </div>

        <div class="d-flex justify-content-around"> 

        <div className="card my-2 mx-1 border hover_card" style={{ width: "18rem" }}>
       <img src={require('../Assets/book.jpg')} className="card-img-top" alt="..." />
       <div className="card-body text-center">
       <h5 className="card-text">
       Book an appointment
       </h5>
       </div>    
      </div>

      <div className="card my-2 hover_card" style={{ width: "18rem" }}>
       <img src={require('../Assets/Status.jpg')} className="card-img-top" alt="..." />
       <div className="card-body text-center">
       <h5 className="card-text">
       Appointment status
       </h5>
       </div>       
</div>
</div>
<div class="d-flex justify-content-around"> 

<div className="card my-2 mx-1 hover_card" style={{ width: "18rem" }} onClick={handelWatchStudyMaterial}>
       <img src={require('../Assets/study.jpg')} className="card-img-top" alt="..." />
       <div className="card-body text-center">
       <h5 className="card-text">
       Watch a study material
       </h5>
       </div>       
</div>

<div className="card my-2 hover_card" style={{ width: "18rem" }}>
<br />
<br/>
<br/>
       <img src={require('../Assets/refund.jpg')} className="card-img-top" alt="..." />
       <div className="card-body text-center">
       <h5 className="card-text">
       <br/>
       Refund History
       </h5>
       </div>       
</div>

</div>
<div class="d-flex justify-content-around"> 
<div className="card my-2 hover_card mx-1" style={{ width: "18rem" }}>
       <img src={require('../Assets/settings.jpg')} className="card-img-top" alt="..." />
       <div className="card-body text-center">
       <h5 className="card-text">
       Account details update
       </h5>
       </div>       
</div>

<div className="card my-2 hover_card" style={{ width: "18rem" }}>
       <img src={require('../Assets/issue.jpg')} className="card-img-top" alt="..." />
       <div className="card-body text-center">
       <h5 className="card-text">
       Raise an issue
       </h5>
       </div>       
</div>
</div>




        <Footer/>
    </div>
  )
}
