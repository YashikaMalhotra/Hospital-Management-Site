import {ArrowRightOutlined} from "@ant-design/icons";
import React from "react";
import {NavLink,Outlet,useParams} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../Assets/Styles/Userpage.scss";

const UserPage=() => {
  const params=useParams();
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div><NavLink>Sidebar</NavLink></div>
      <section className="userpagediv">
        <div className="Sidebar">
          <Sidebar />
        </div>

        <div className="userpageBody">
          <section className="bedSection">
            <h3>
              <b>
                <ArrowRightOutlined /> &nbsp;
                {params.id}
              </b>
            </h3>
            <hr />
            <Outlet />
          </section>
        </div>
      </section>
    </>
  );
};

export default UserPage;
