import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorNavBar() {
  return (
    <div className='barlow-thin'>
    <nav className="navbar navbar-light sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
    <Link className="navbar-brand" to="/DoctorDashboard">
  Shree Clinic
</Link>
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
        <Link className="nav-link" to="#">
        🏠︎ Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="#">
        🔗Add Meet Link <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="#">
        ☑ Active Accounts <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="#">
        📈 Download and view reports <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="#">
        ⚙️Account Details <span className="sr-only">(current)</span>
        </Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="#">
        ▶️ Provide Study Material <span className="sr-only">(current)</span>
        </Link>
      </li>

      

      <li className="nav-item active">
        <Link className="nav-link" to="#">
        🔴 Log out <span className="sr-only">(current)</span>
        </Link>
      </li>
    </ul>

  </div>
</nav>


    </div>
  )
}
