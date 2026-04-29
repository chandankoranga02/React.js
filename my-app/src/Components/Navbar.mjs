import React from "react";
import { Link } from "react-router-dom";



export default function Navbar(props) {
  return (
    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.stylemode} bg-${props.stylemode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/about">About Us</Link>

          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
