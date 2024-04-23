import React, { useState } from "react";
import axios from "axios";

const ChangeForgotPassword = ({ changeView, emailForgot }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [validationMessage, setValidationMessage] = useState({
    password: "",
    confirmPassword: "",
  });

  const changePassword = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/changePassword",
        {
          email: emailForgot,
          newPassword: formData.password,
          confirmPassword: formData.confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
  
      if (response.status === 200) {
        alert("Password changed successfully")
        changeView("login")
      } else if (response.status === 400) {
        alert("Please choose a different password")
      } else if (response.status === 404) {
        alert("Patient not found")
      } else if (response.status === 422) {
        alert("New password and confirm password do not match")
      } else {
        alert("An unexpected error occurred. Please try again later.")
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Please choose a different password")
      } else if (error.response && error.response.status === 404) {
        alert("Patient not found")
      } else if (error.response && error.response.status === 422) {
        alert("New password and confirm password do not match")
      } else {
        console.error("Error changing password:", error)
        alert("An unexpected error occurred. Please try again later.")
      }
    }
  }
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setValidationMessage({ ...validationMessage, [name]: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setValidationMessage((prevState) => ({
        ...prevState,
        password: "Password must be at least 8 characters long.",
      }));
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setValidationMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one uppercase letter.",
      }));
      return;
    }

    if (!/[a-z]/.test(formData.password)) {
      setValidationMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one lowercase letter.",
      }));
      return
    }

    if (!/\d/.test(formData.password)) {
      setValidationMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one number.",
      }))
      return
    }

    if (!/\W/.test(formData.password)) {
      setValidationMessage((prevState) => ({
        ...prevState,
        password: "Password must contain at least one symbol.",
      }))
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setValidationMessage((prevState) => ({
        ...prevState,
        confirmPassword: "Password and confirm password do not match.",
      }))
      return
    }

    changePassword()
  }

  return (
    <div className="lowin-box lowin-register">
      <div className="lowin-box-inner">
        <form onSubmit={handleSubmit}>
          <p>Let's change your password</p>

          <div className="lowin-group">
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              className="lowin-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="validation-message">
              {validationMessage.password}
            </div>
          </div>

          <div className="lowin-group">
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              className="lowin-input"
              placeholder="Repeat Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className="validation-message">
              {validationMessage.confirmPassword}
            </div>
          </div>

          <button type="submit" className="lowin-btn">
            Change Password
          </button>
          <div className="text-foot">
            Already have an account?{" "}
            <button type="button" className="login-link"
            onClick={() => changeView("login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeForgotPassword;
