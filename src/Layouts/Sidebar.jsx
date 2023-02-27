import React from "react";
import {NavLink} from "react-router-dom";
import '../Assets/Styles/Sidebar.scss';

const Sidebar=() => {
  return (
    <>

      <ul className="sidenavul">
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/patient">
            Patient
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/doctor">
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/nurse">
            Nurse
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/pharmacist">
            Pharmacist
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/laboratorist">
            Laboratorist
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/accountant">
            Accountant
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/receptionist">
            Receptionist
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/bedalot">
            Bed Allotment
          </NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/medicine">
            Medicine
          </NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/bloodbag">
            Blood bag
          </NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/createpayroll">
            Create Payroll
          </NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => "navLink"+(isActive? "active":"")} to="/userpage/payroll">
            Payroll
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
