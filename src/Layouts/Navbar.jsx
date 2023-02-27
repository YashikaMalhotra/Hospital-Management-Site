import React from "react";
import {useNavigate} from "react-router-dom";
import "../Assets/Styles/Userpage.scss";

const Navbar=() => {
  let navigate=useNavigate();

  return (
    <>
      <nav className="nav">
        <ul>
          <li> <h4>Hospital Management</h4></li>
          <li>
            <button
              onClick={() =>
                window.confirm("Do you want to leave the page")
                  ? navigate("/")
                  :""
              }
            >
              Logout
            </button>
          </li>
          <li>Search</li>
          <li>Account</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
