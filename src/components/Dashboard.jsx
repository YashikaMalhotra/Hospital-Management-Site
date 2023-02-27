import React from "react"
import '../Assets/Styles/Dashboard.scss'
import {UserOutlined} from "@ant-design/icons"
import {DummyData} from "./Pages/DummyPage"
import {DummyBedData} from "./Pages/Manage Hospital Pages/Bed Alot/Dummy_BedData"
import {DummyMedData} from "./Pages/Manage Hospital Pages/Medicine/Dummy_MedData"
import {DummyPatientData} from "./Pages/Patient/Dummy_PatientData";

const Dashboard=() => {
  var bedNum,
    medNum,
    patNum,
    docNum,
    AccNum=0

  for(var a=0;a<DummyBedData.length;a++) {
    bedNum=DummyBedData[a].id
  }
  for(var b=0;b<DummyMedData.length;b++) {
    medNum=DummyMedData[b].id
  }
  for(var c=0;c<DummyPatientData.length;c++) {
    patNum=DummyPatientData[c].id
  }
  for(var d=0;d<DummyData.length;d++) {
    docNum=DummyData[d].id
  }
  for(var e=0;e<DummyData.length;e++) {
    AccNum=DummyData[e].id
  }

  return (
    <>
      <div className="parent">
        <div className="div-1"></div>
        <div className="div-2">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{patNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>

            <p>
              <b>Patients</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-3">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{docNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>
            {/*--------------------------------------------------------------------*/}
            <p>
              <b>Doctors</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-4">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{bedNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>
            <p>
              <b>Nurses</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-5">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{medNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>
            <p>
              <b>Pharmacist</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-6">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{bedNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>
            <p>
              <b>Laboratorist</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-7">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{AccNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>
            <p>
              <b>Accountant</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-8">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{bedNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>
            <p>
              <b>Receptionist</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-9">
          <span className="divs-h2">
            <h1>
              <p>
                <b>{bedNum}</b>
              </p>
              <UserOutlined className="divs_icon" />
            </h1>
            <p>
              <b>Payments</b>
            </p>
          </span>
        </div>
        {/*--------------------------------------------------------------------*/}
        <div className="div-13">Patient Graph
        </div>
        <div className="div-14">Reports
        </div>
        <div className="div-15">Patients
        </div>
      </div>
    </>
  )
}

export default Dashboard;
