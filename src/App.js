import React,{Suspense,lazy} from "react";
import {Route,Routes} from "react-router-dom";
import {ThreeDots} from 'react-loader-spinner';
import BedAllotment from "./components/Pages/Manage Hospital Pages/Bed Alot/BedAllotment";
import CreatePayroll from "./components/Pages/Payments Dropdown/CreatePayroll";
import Payroll from "./components/Pages/Payments Dropdown/Payroll";
import PageNotFound from "./Layouts/PageNotFound";

const LoginPage=lazy(() => import('./Layouts/LogIn'))
const Userpage=lazy(() => import('./Layouts/Userpage'))
const Dashboard=lazy(() => import('./components/Dashboard'))
const Patient=lazy(() => import('./components/Pages/Patient/Patient'))
const EditPatientPage=lazy(() => import('./components/Pages/Patient/EditPatientPage'))
const Doctors=lazy(() => import('./components/Pages/Doctors/Doctors'))
const Nurse=lazy(() => import('./components/Pages/Nurse/Nurse'))
const Laboratorist=lazy(() => import('./components/Pages/Lab/Laboratorist'))
const Accountant=lazy(() => import('./components/Pages/Accountant/Accountant'))
const Medicine=lazy(() => import('./components/Pages/Manage Hospital Pages/Medicine/Medicine'))

const App=() => {
  return (
    <Suspense fallback={<ThreeDots
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{display: 'grid',placeItems: 'center',alignItems: 'center',height: '100vh'}}
      wrapperClassName=""
      visible={true} height='80'
      width='80'
      color='#0081c9'
    />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/userpage" element={<Userpage />}>
          <Route path="/userpage" element={<Dashboard />} />
          <Route path="/userpage/patient" element={<Patient />} />
          <Route path="/userpage/patient/editpatientpage" element={<EditPatientPage />} />
          <Route path="/userpage/doctor" element={<Doctors />} />
          <Route path="/userpage/nurse" element={<Nurse />} />
          <Route path="/userpage/laboratorist" element={<Laboratorist />} />
          <Route path="/userpage/accountant" element={<Accountant />} />
          <Route path="/userpage/medicine" element={<Medicine />} />
          <Route path="/userpage/bedalot" element={<BedAllotment />} />
          <Route path="/userpage/createpayroll" element={<CreatePayroll />} />
          <Route path="/userpage/payroll" element={<Payroll />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
