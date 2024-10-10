import React, { useState, useEffect, useContext, useRef } from "react";
import logo from "../assets/images/logo-dark.png";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import validator from "validator";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import AppConfig from "../AppConfig.js";
import axios from "axios";
import OtpForgetPassword from "./OtpForgetPassword";
import QuestionsForgot from "./QuestionsForgot";
import ChangeForgotPassword from "./ChangeForgotPassword";
import VerificationAccount from "./VerificationAccount";
import RegisterQuestions from "./RegisterQuestions";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AuthPage = () => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRepeatRegisterPassword, setShowRepeatRegisterPassword] = useState(false);

  const toggleLoginPasswordVisibility = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  const toggleRegisterPasswordVisibility = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };

  const toggleRepeatRegisterPasswordVisibility = () => {
    setShowRepeatRegisterPassword(!showRepeatRegisterPassword);
  };
  const [currentView, setCurrentView] = useState("login");
  const [isAnimating, setIsAnimating] = useState(false);
  const [validationMessage, setValidationMessage] = useState({
    email: "",
    password: "",
  });

  const { logindata, setLoginData } = useContext(LoginContext);

  const [emailForgot, setEmailForgot] = useState("");
  const navigate = useNavigate();
  // const [token, setToken] = useState("");
  const captcha = useRef();
  const captchaForget = useRef();
  const captchaLogin = useRef();
  const [captchaResult, setCaptchaResult] = useState(false);
  const [captchaResultForgetPass, setCaptchaResultForgetPass] = useState(false);
  const [captchaResultLogin, setCaptchaResultLogin] = useState(false);
  console.log("QQQQQQQQQQQQQQ", captchaResult);
  console.log("AAAAAAA", captchaResultLogin);

  ////////////////////////////////////////////
  const hcaptchaVerif = (token) => {
    if (!token) {
      setCaptchaResult(false);
      return;
    }
    axios
      .post("http://127.0.0.1:1129/api/patient/verify-captcha", {
        token,
      })
      .then((resp) => {
        console.log(true, "verify-captcha");
        setCaptchaResult(true);
      })
      .catch(({ response }) => {
        console.log(false, "verify-captcha");

        setCaptchaResult(false);
      })
      .finally(() => {
        // captcha.current.resetCaptcha();
      });
  };
  const hcaptchaVerifForget = (token) => {
    if (!token) {
      setCaptchaResultForgetPass(false);
      return;
    }
    axios
      .post("http://127.0.0.1:1129/api/patient/verify-captcha", {
        token,
      })
      .then((resp) => {
        console.log(true, "verify-captcha");
        setCaptchaResultForgetPass(true);
      })
      .catch(({ response }) => {
        console.log(false, "verify-captcha");

        setCaptchaResultForgetPass(false);
      });
  };
  const hcaptchaVerifLogin = (token) => {
    if (!token) {
      setCaptchaResultLogin(false);
      return;
    }
    axios
      .post("http://127.0.0.1:1129/api/patient/verify-captcha", {
        token,
      })
      .then((resp) => {
        console.log(true, "verify-captcha");
        setCaptchaResultLogin(true);
      })
      .catch(({ response }) => {
        console.log(false, "verify-captcha");

        setCaptchaResultLogin(false);
      });
  };

  ///////////////////////////////////////
  const sendVerifEmail = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/sendEmailVerif",
        {
          recipientEmail: formData.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Email sent successfully");
      } else if (response.status === 404) {
        changeView("login");
        alert(`User with email "${emailForgot}" not found.`);
      } else {
        alert(`Failed to send email.`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.response && error.response.status === 500) {
        alert("Failed to send email");
      } else {
        alert("Email not sent.");
        // changeView("login");
      }
    }
  };
  const [formRegisterData, setFormRegisterData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    repeatPassword: "",
    termsChecked: false,
    dateOfBirth:"",
  });
  console.log(formRegisterData, "AAAAA");
  const [validationRegisterMessage, setValidationRegisterMessage] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    repeatPassword: "",
    termsChecked: "",
    dateOfBirth: "",
    
  });
console.log(formRegisterData.dateOfBirth,typeof(formRegisterData.dateOfBirth),"log of date");
  const handleFormRegister = () => {
    setFormRegisterData({
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      password: "",
      repeatPassword: "",
      termsChecked: false,
    });
  };
  const handleChangeSubmit = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormRegisterData({ ...formRegisterData, [name]: newValue });
    setValidationRegisterMessage({ ...validationRegisterMessage, [name]: "" });
  };
  console.log(formRegisterData)

  const registerPatient = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/register",
        {
          nom: formRegisterData.name,
          prenom: formRegisterData.lastName,
          email: formRegisterData.email,
          phoneNumber: formRegisterData.phoneNumber,
          address: formRegisterData.address,
          password: formRegisterData.password,
          confirmPassword: formRegisterData.repeatPassword,
          dateOfBirth: formRegisterData.dateOfBirth,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("Registration Successfully done 😃!");
        changeView("registerQuestions");
        // handleFormRegister()
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        alert("Email is already registered. Please use a different emailllll.");
      } else {
        console.error("Error registering user:", error);
      }
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(formRegisterData);

    if (!captchaResult) {
      alert("Please Verify your captcha");
      return;
    }

    if (!validator.isEmail(formRegisterData.email)) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        email: "Please enter a valid email.",
      }));
      return;
    }

    if (!formRegisterData.name.trim()) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        name: "Please enter your name.",
      }));
      return;
    }

    if (!formRegisterData.lastName.trim()) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        lastName: "Please enter your last name.",
      }));
      return;
    }

    if (!formRegisterData.phoneNumber) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        phoneNumber: "Please enter your phone number.",
      }));
      return;
    }

    if (
      formRegisterData.phoneNumber &&
      !validator.isMobilePhone(formRegisterData.phoneNumber, "any", {
        strictMode: false,
      })
    ) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        phoneNumber: "Please enter a valid phone number.",
      }));
      return;
    }

    if (!formRegisterData.address.trim()) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        address: "Please enter your address.",
      }));
      return;
    }

    if (formRegisterData.password.length < 8) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        password: "Password must be at least 8 characters long.",
      }));
      return;
    }

    if (!/[A-Z]/.test(formRegisterData.password)) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one uppercase letter.",
      }));
      return;
    }

    if (!/[a-z]/.test(formRegisterData.password)) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one lowercase letter.",
      }));
      return;
    }

    if (!/\d/.test(formRegisterData.password)) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one number.",
      }));
      return;
    }

    if (!/\W/.test(formRegisterData.password)) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one symbol.",
      }));
      return;
    }

    if (formRegisterData.password !== formRegisterData.repeatPassword) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        repeatPassword: "Password and confirm password do not match.",
      }));
      return;
    }

    if (!formRegisterData.termsChecked) {
      setValidationRegisterMessage((prevState) => ({
        ...prevState,
        termsChecked: "Please agree to the terms and policy.",
      }));
      return;
    }
    registerPatient();
    // changeView("registerQuestions");
  };
  ///////////////////////////////////////////////
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };
  const changeView = (e) => {
    setCurrentView(e);
  };
  const sendForgetEmail = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/sendEmail",
        {
          recipientEmail: emailForgot,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Email sent successfully");
        setCurrentView("otpForgetPassword");
        setCaptchaResultForgetPass(false);
      } else if (response.status === 404) {
        setCurrentView("login");
        alert(`User with email "${emailForgot}" not found.`);
        setEmailForgot("");
      } else {
        throw new Error(
          `Failed to send email. Status code: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.response && error.response.status === 422) {
        alert(
          "Too many failed attempts. Please try again later or answer security questions."
        );
        setCurrentView("questionsForgot");
      } else {
        alert("Email not sent.");
        setCurrentView("login");
        setEmailForgot("");
      }
    }
  };

  const handlesubmitForgot = (e) => {
    e.preventDefault();
    if (!captchaResultForgetPass) {
      alert("Please verif with captcha.");
      return;
    }
    if (!emailForgot) {
      alert("Please enter your email.");
      return;
    }
    if (!validator.isEmail(emailForgot)) {
      alert("Please enter a valid email.");
      return;
    }
    sendForgetEmail();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaResultLogin) {
      alert("Please verif with captcha");
      return;
    }
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validator.isEmail(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(formData.password)) {
      alert("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/\d/.test(formData.password)) {
      alert("Password must contain at least one number.");
      return;
    }

    if (!/\W/.test(formData.password)) {
      alert("Password must contain at least one symbol.");
      return;
    }

    console.log("Login successful!");
    loginPatient();
  };

  axios.defaults.withCredentials = true;

  const loginPatient = async () => {
    try {
      const { email, password, rememberMe } = formData;
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/login",
        {
          email,
          password,
          rememberMe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem("patientdatatoken", response.data.result.token);
        localStorage.setItem(
          "patientdataId",
          response.data.result.patientValid._id
        );
        console.log(response.data.result);
       
        setFormData({
          email: "",
          password: "",
          rememberMe: false,
        });
    
          navigate("/");
        
     
        setLoginData(true);
      } else if (response.status === 403) {
        changeView("verifAccount");
        sendVerifEmail();
      }
      console.log(response.status, "response");
      if(response.status ===422 || response.status ===404){
        alert("Invalid emailor password")
        return
      }
    } catch (error) {
      if(error.response.status === 422 || error.response.status ===404){
        alert("Invalid emailor password")
        return
      }
      if (error.response && error.response.status === 403) {
        changeView("verifAccount");
        sendVerifEmail();
        console.error("Account not verified. Please verify your email address");
      } else {
        console.error("Error logging in user:", error);
      }
    }
  };
  ////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const hash = window.location.hash;
    switch (hash) {
      case "#forgot":
        setCurrentView("forgot");
        break;
      case "#login":
      default:
        setCurrentView("login");
        break;
    }
  }, []);

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
  };
  const toggleView = (view) => {
    setIsAnimating(true);
    setValidationMessage({
      email: "",
      password: "",
      repeatPassword: "",
      name: "",
      lastName: "",
      general: "",
    });

    setTimeout(() => {
      setIsAnimating(false);

      setCurrentView(view); // Change view after the animation
    }, 200);
  };

  return (
    <div className="lowin">
      <div className="lowin-brand">
        <img src={logo} alt="logo" />
      </div>
      <div className={`lowin-wrapper ${isAnimating ? "lowin-animated" : ""}`}>
        {currentView === "login" && (
          <div className="lowin-box lowin-login">
            <div className="lowin-box-inner">
              <form onSubmit={handleSubmit}>
                <p>Sign in to continue</p>
                <div className="lowin-group">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="lowin-input"
                    placeholder="Email"
                    value={FormData.email}
                    onChange={handleChange}
                  />
                  {validationMessage.email && (
                    <div className="validation-message">
                      {validationMessage.email}
                    </div>
                  )}
                </div>
                <div className="password-input-group lowin-group">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    className="lowin-input"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={toggleLoginPasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showRegisterPassword ? faEyeSlash : faEye} />
                  </button>
                </div>

                <div className="lowin-group password-group">
                  <div className="password-remember-group">
                    <label className="remember-me">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        className="lowin-checkbox"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />{" "}
                      Remember Me
                    </label>
                    <label>
                      <button
                        type="button"
                        onClick={() => toggleView("forgot")}
                        className="forgot-link"
                      >
                        Forgot Password?
                      </button>
                    </label>
                  </div>
                </div>
                <div className="captcha-container">
                  <HCaptcha
                    ref={(ref) => (captchaLogin.current = ref)}
                    sitekey={AppConfig.SITEKEY}
                    onVerify={(token) => hcaptchaVerifLogin(token)}
                    onExpire={(e) => setCaptchaResultLogin(false)}
                  />
                </div>

                <button
                  className="lowin-btn login-btn"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
                <div className="text-foot">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => toggleView("register")}
                    className="register-link"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {currentView === "forgot" && (
          <div className="lowin-box lowin-forgot">
            <div className="lowin-box-inner">
              <form onSubmit={handleForgotPasswordSubmit}>
                <p>Forgot your password? No worries.</p>
                <div className="lowin-group">
                  <input
                    type="email"
                    name="email"
                    required
                    className="lowin-input"
                    placeholder="Your email"
                    value={emailForgot}
                    onChange={(e) => setEmailForgot(e.target.value)}
                  />
                </div>
                <div className="captcha-container">
                  <HCaptcha
                    ref={(ref) => (captchaForget.current = ref)}
                    sitekey={AppConfig.SITEKEY}
                    onVerify={(token) => hcaptchaVerifForget(token)}
                    onExpire={(e) => setCaptchaResultForgetPass(false)}
                  />
                </div>

                <button
                  type="submit"
                  className="lowin-btn"
                  onClick={handlesubmitForgot}
                >
                  Send Reset Code
                </button>
                <div className="text-foot">
                  Remembered your password?{" "}
                  <button
                    type="button"
                    onClick={() => toggleView("login")}
                    className="login-link"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {currentView === "register" && (
          <div className="lowin-box lowin-register">
            <div className="lowin-box-inner">
              <form onSubmit={handleRegisterSubmit}>
                <p>Let's create your account</p>
                <div className="form-row">
                  <div className="lowin-group">
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="lowin-input"
                      placeholder="First Name"
                      value={formRegisterData.name}
                      onChange={handleChangeSubmit}
                    />
                    {validationRegisterMessage.name && (
                      <div className="validation-message">
                        {validationRegisterMessage.name}
                      </div>
                    )}
                  </div>
                  <div className="lowin-group">
                    <input
                      type="text"
                      name="lastName"
                      autoComplete="family-name"
                      className="lowin-input"
                      placeholder="Last Name"
                      value={formRegisterData.lastName}
                      onChange={handleChangeSubmit}
                    />
                    {validationRegisterMessage.lastName && (
                      <div className="validation-message">
                        {validationRegisterMessage.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div
                    className="lowin-group"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <PhoneInput
                      placeholder="Phone number"
                      value={formRegisterData.phoneNumber}
                      onChange={(value) =>
                        setFormRegisterData({
                          ...formRegisterData,
                          phoneNumber: value,
                        })
                      }
                      defaultCountry="TN"
                      international
                      countryCallingCodeEditable={false} // Keep this to prevent editing of the country code
                      style={{ width: "100%", display: "flex" }} // Ensures the input takes the full width
                    />
                    {validationRegisterMessage.phoneNumber && (
                      <div className="validation-message">
                        {validationRegisterMessage.phoneNumber}
                      </div>
                    )}
                  </div>
                  <div className="lowin-group">
                    <input
                      type="text"
                      name="address"
                      className="lowin-input"
                      placeholder="Address"
                      value={formRegisterData.address}
                      onChange={handleChangeSubmit}
                    />
                    {validationRegisterMessage.address && (
                      <div className="validation-message">
                        {validationRegisterMessage.address}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="lowin-group">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="lowin-input"
                      placeholder="Email"
                      value={formRegisterData.email}
                      onChange={handleChangeSubmit}
                    />
                    {validationRegisterMessage.email && (
                      <div className="validation-message">
                        {validationRegisterMessage.email}
                      </div>
                    )}
                  </div>
                  <div className="password-input-group lowin-group">
        <input
          type="date"
          name="dateOfBirth"
          className="lowin-input"
          placeholder="Date de naissance"
          value={formRegisterData.dateOfBirth}
          onChange={handleChangeSubmit}
        />
     
                    {validationRegisterMessage.dateOfBirth && (
                      <div className="validation-message">
                        {validationRegisterMessage.dateOfBirth}
                      </div>
                    )}
                  </div>
             
                </div>
                <div className="form-row">
                <div className="password-input-group lowin-group">
                    <input
  type={showRegisterPassword ? "text" : "password"}
  name="password"
                      autoComplete="new-password"
                      className="lowin-input"
                      placeholder="Password"
                      value={formRegisterData.password}
                      onChange={handleChangeSubmit}
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={toggleRegisterPasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={showRegisterPassword ? faEyeSlash : faEye}
                      />
                    </button>
                    {validationRegisterMessage.password && (
                      <div className="validation-message">
                        {validationRegisterMessage.password}
                      </div>
                    )}
                  </div>
                  <div className="password-input-group lowin-group">
                    <input
  type={showRepeatRegisterPassword ? "text" : "password"}
  name="repeatPassword"
                      autoComplete="new-password"
                      className="lowin-input"
                      placeholder="Repeat Password"
                      value={formRegisterData.repeatPassword}
                      onChange={handleChangeSubmit}
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={toggleRepeatRegisterPasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={showRepeatRegisterPassword ? faEyeSlash : faEye}
                      />
                    </button>
                    {validationRegisterMessage.repeatPassword && (
                      <div className="validation-message">
                        {validationRegisterMessage.repeatPassword}
                      </div>
                    )}
                  </div>
             
                </div>
           
       
     <div className="lowin-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="termsChecked"
                        checked={formRegisterData.termsChecked}
                        onChange={handleChangeSubmit}
                      />
                      I agree to the terms and policy
                    </label>
                    {validationRegisterMessage.termsChecked && (
                      <div className="validation-message">
                        {validationRegisterMessage.termsChecked}
                      </div>
                    )}
                  </div>

                  <div className="captcha-container">
                  <HCaptcha
                    ref={(ref) => (captcha.current = ref)}
                    sitekey={AppConfig.SITEKEY}
                    onVerify={(token) => hcaptchaVerif(token)}
                    onExpire={(e) => setCaptchaResult(false)}
                  />
                </div>
                <button className="lowin-btn">Submit</button>
                <div className="text-foot">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => toggleView("login")}
                    className="login-link"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {currentView === "otpForgetPassword" && (
          <OtpForgetPassword
            emailForgot={emailForgot}
            changeView={changeView}
          />
        )}
        {currentView === "questionsForgot" && (
          <QuestionsForgot emailForgot={emailForgot} changeView={changeView} />
        )}
        {currentView === "changeForgotPassword" && (
          <ChangeForgotPassword
            emailForgot={emailForgot}
            changeView={changeView}
          />
        )}
        {currentView === "verifAccount" && (
          <VerificationAccount email={formData.email} changeView={changeView} />
        )}
        {currentView === "registerQuestions" && (
          <RegisterQuestions
            formRegisterData={formRegisterData}
            changeView={changeView}
            handleFormRegister={handleFormRegister}
          />
        )}

    
      </div>

      
    </div>
  );
};

export default AuthPage;
