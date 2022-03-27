import React from 'react'
import '../styles/navbar.css';
import mainLogo from '../images/logo.png';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navsize shadow p-3 mb-5 bg-white rounded">
      <div className='container-fluid nc'>
        <a className="navbar-brand" href="#"><img className='image1' src={mainLogo} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Join</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Log In</a>
            </li>
            <button type="button" className="btn getstarted btn-primary">Get Started</button>
          </ul>
        </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar