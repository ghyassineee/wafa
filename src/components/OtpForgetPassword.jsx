import React, { useState } from "react";
import "../assets/css/auth.css";
import OtpInput from "react-otp-input";
import axios from "axios";

const OtpForgetPassword = ({ emailForgot, changeView }) => {
  const [otp, setOtp] = useState("");
  console.log(typeof(otp),emailForgot);

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
        // changeView("otpForgetPassword");
      } else if (response.status === 404) {
        changeView("login");
        alert(`User with email "${emailForgot}" not found.`);
      } else {
        throw new Error(`Failed to send email. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.response && error.response.status === 422) {
        alert(
          "Too many failed attempts. Please try again later or answer security questions."
        );
        changeView("questionsForgot");
      } else {
        alert("Email not sent.");
        // changeView("login");
      }
    }
  };

  const handleResendCodeClick = (e) => {
    e.preventDefault()
    sendForgetEmail()
    console.log("Resend code clicked");
  };

  const handleOtpComplete = async (enteredOtp) => {
    // const test ="686240"
    
    try {
        const otpString = enteredOtp.toString();
        console.log(otpString,"thissss");
        const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/forgetPassword",
        {
          email: emailForgot,
          code: otpString,
          questionsAndAnswers: []
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
  
      if (response.status === 200) {
        alert("You can change your password")
        setOtp("")
        changeView("changeForgotPassword")
      } else if (response.status === 403) {
        alert("You should have min 3 success questions")
        // changeView("login")
      } else if (response.status === 404) {
        alert(`User with email "${emailForgot}" not found.`)
        // changeView("login")
        // setEmailForgot("")
      } else if (response.status === 422) {
          setOtp("")
        alert("Incorrect code or expired. Please try again.")
      } else if (response.status === 500) {
          setOtp("")
        alert("Internal server error. Please try again later.")

      } else {
          setOtp("")
        alert("An unexpected error occurred. Please try again later.")

      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
          setOtp("")
        alert("Incorrect code or expired. Please try again.")
        changeView("login")

      } else {
        console.error("Error during password reset:", error)
        setOtp("")
        alert("An error occurred. Please try again later.")

      }
    }
  };
  

  const handleOtpChange = (enteredOtp) => {
    setOtp(enteredOtp);
console.log(typeof(enteredOtp));
console.log("Entered OTP:", enteredOtp);

    if (enteredOtp.length === 6) {
      handleOtpComplete(enteredOtp);
    }
  };

  const renderInput = (inputProps, index) => {
    return (
      <input
        {...inputProps}
        className="inputStyle"
        key={index}
        autoComplete="off"
      />
    );
  };

  return (
    <div className="lowin-box lowin-forgot">
      <div className="lowin-box-inner">
        <form>
          <p>Forgot your password? No worries.</p>
          <div className="lowin-group otpGroup">
            <OtpInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={6}
              separator={<span>-</span>}
              isInputNum={true}
              renderInput={renderInput}
            />
          </div>
          <button type="submit" className="lowin-btn"
          onClick={handleResendCodeClick}
          >
            Resend Code
          </button>
          <div className="text-foot">
            Remembered your password?{" "}
            <button
              type="button"
              onClick={() => changeView("login")}
              className="login-link"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpForgetPassword;
