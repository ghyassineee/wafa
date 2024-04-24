import React, { useState } from "react";
import "../assets/css/auth.css";
import OtpInput from "react-otp-input";
import axios from "axios";

const VerificationAccount = ({ email, changeView }) => {
  const [otp, setOtp] = useState("");
  console.log(typeof otp, email);

  const sendVerifEmail = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/sendEmailVerif",
        {
          recipientEmail: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        alert("Email sent successfully");
        console.log("sended");
      } else if (response.status === 404) {
        alert(`User with email "${email}" not found.`);
        console.log("not found");
      } else {
        alert(`Failed to send email.`);
        console.log("failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.response && error.response.status === 500) {
        alert("Failed to send email");
      } else {
        alert("Email not sent.");
      }
    }
  };
  
  const handleResendCodeClick = (e) => {
    e.preventDefault()
    sendVerifEmail()
    console.log("Resend code clicked")
  };

  const handleOtpComplete = async (enteredOtp) => {
    try {
      const otpString = enteredOtp.toString()
      const response = await axios.post(
        "http://127.0.0.1:1129/api/patient/verifAccount",
        {
          email: email,
          otpFromBody: otpString,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
  
      if (response.status === 200) {
          alert("Account verified successfully")
          setOtp("")
          changeView("login")
      } else if (response.status === 422) {
        alert("Invalid OTP or OTP expired")
      } else {
        alert("Failed to verify account")
      }
    } catch (error) {
      console.error("Error verifying account:", error)
      alert("Failed to verify account")
    }
  };
  

  const handleOtpChange = (enteredOtp) => {
    setOtp(enteredOtp)
    console.log(typeof enteredOtp)
    console.log("Entered OTP:", enteredOtp)

    if (enteredOtp.length === 6) {
      handleOtpComplete(enteredOtp)
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
          <p>Verification Account</p>
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
          <button
            // type="submit"
            className="lowin-btn"
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

export default VerificationAccount;
