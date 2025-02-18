import React from 'react'

export default function DoctorNavBar() {
  return (
    <div className='barlow-thin'>
    <nav className="navbar navbar-light sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
  <a className="navbar-brand" href="/PatientDashBoard">
    Shree Clinic
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
        🏠︎ Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
        🔗Add Meet Link <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
        ☑ Active Accounts <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
        📈 Download and view reports <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
        ⚙️Account Details <span className="sr-only">(current)</span>
        </a>
      </li>

      <li className="nav-item active">
        <a className="nav-link" href="#">
        ▶️ Provide Study Material <span className="sr-only">(current)</span>
        </a>
      </li>

      

      <li className="nav-item active">
        <a className="nav-link" href="#">
        🔴 Log out <span className="sr-only">(current)</span>
        </a>
      </li>
    </ul>

  </div>
</nav>


    </div>
  )
}
