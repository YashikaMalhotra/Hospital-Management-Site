import React,{useContext,useState} from "react";
import {useNavigate} from "react-router-dom";
import img from "../Assets/Images/doctorbg.2b7c226d.jpg";
import "../Assets/Styles/Login.scss";
import {HomeOutlined,UserOutlined} from "@ant-design/icons";
import AuthContext from '../store/auth-context';

const Login=() => {
  const [emailInput,setEmailInput]=useState("");
  const [emailIsValid,setEmailIsValid]=useState();
  const [passwordInput,setPasswordInput]=useState("");
  const [passwordIsValid,setpasswordIsValid]=useState();
  const [formIsValid,setFormIsValid]=useState(false);
  const [isLogin,setIsLogin]=useState(true);
  const authCtx=useContext(AuthContext);

  let navigate=useNavigate();

  const emailInputHandler=(e) => {
    setEmailInput(e.target.value);
    setFormIsValid(
      e.target.value.includes("@")&&passwordInput.trim().length>6
    );
  };

  const passwordInputHandler=(e) => {
    setPasswordInput(e.target.value);
    setFormIsValid(
      e.target.value.trim().length>6&&emailInput.includes("@")
    );
  };

  const emailValidateHandler=() => setEmailIsValid(emailInput.includes("@"));
  const passwordValidateHandler=() =>
    setpasswordIsValid(passwordInput.trim().length>6);

  const formSubmitHandler=(e) => {
    e.preventDefault();
    setEmailInput("");
    setPasswordInput("");
    setFormIsValid(false);

    let url;
    if(isLogin) {
      url=
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbu2hjgEmS55W9QBc4uzIpMLGOsMQI67A";
    } else {
      url=
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbu2hjgEmS55W9QBc4uzIpMLGOsMQI67A";
    }

    fetch(url,{
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if(res.ok) {
          navigate("/userpage");
        } else {
          return res.json().then((data) => {
            let errorMessage="Authentication Failed";
            if(data&&data.error&&data.error.message) {
              errorMessage=data.error.message;
              alert(errorMessage);
            }
          });
        }
      })
      .then((data) => {
        authCtx.login(data.token);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const switchformHandler=(e) => {
    e.preventDefault();
    setIsLogin((prevVal) => !prevVal);
  };

  return (
    <section className="LoginMainDiv">
      <div className="LoginSidebar">
        <HomeOutlined className="Loginheader" />
        <form onSubmit={formSubmitHandler}>
          <h2>
            <UserOutlined />
            &nbsp; Hospital Management
          </h2>
          <br />
          <div className={` ${emailIsValid===false? "invalid":""}`}>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={emailInput}
              onChange={emailInputHandler}
              onBlur={emailValidateHandler}
              required
            />
          </div>
          <div className={`${passwordIsValid===false? "invalid":""}`}>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={passwordInput}
              onChange={passwordInputHandler}
              onBlur={passwordValidateHandler}
              required
            />
          </div>

          <>
            <button type="submit" className="loginBtn" disabled={!formIsValid} >
              {isLogin? "Login":"Create Account"}
            </button>
            <br />
            <button onClick={switchformHandler} className="switchBtn">
              {isLogin? "Create Account":"Login via Existing Account"}
            </button>
          </>
        </form>
      </div>
      <div className="ImageLogin">
        <img src={img} alt="Hospital Doctor Photograph" />
      </div>
    </section>
  );
};

export default Login;
