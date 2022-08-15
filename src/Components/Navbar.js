import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import '../css/Sty.css'
import '../css/weather.css'
import lg from '../Image/lg.png'

function Navbar() {
  let location = useLocation();

  useEffect(() => {
    console.log()
  }, [location]);
  return (
    <div>
      <nav className="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={lg} style={{width:"3.5rem"}} alt="..." />
          <a className="navbar-brand" href="/">Havaman</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Knowweather</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body bg-dark">
              <ul className="nav flex-column align-items-start">
                <li className="nav-item">
                  <a className={`he  nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`he  nav-link ${location.pathname === "/news" ? "active" : ""}`} aria-expanded="false" href="/news">News</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
