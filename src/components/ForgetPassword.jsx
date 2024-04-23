import React from 'react'
import "../assets/css/auth.css";


const ForgetPassword = () => {
  return (
    <div className="lowin-box lowin-register">
    <div className="lowin-box-inner">
      <form onSubmit={handleRegisterSubmit}>
        <p>Let's create your account</p>
        <div className="lowin-group">
          <input
            type="text"
            name="name"
            autoComplete="name"
            className="lowin-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {validationMessage.name && (
            <div className="validation-message">
              {validationMessage.name}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {validationMessage.lastName && (
            <div className="validation-message">
              {validationMessage.lastName}
            </div>
          )}
        </div>
        <div className="lowin-group">
          <input
            type="text"
            name="phoneNumber"
            className="lowin-input"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {validationMessage.phoneNumber && (
            <div className="validation-message">
              {validationMessage.phoneNumber}
            </div>
          )}
        </div>
        <div className="lowin-group">
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="lowin-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {validationMessage.email && (
            <div className="validation-message">
              {validationMessage.email}
            </div>
          )}
        </div>

        <div className="lowin-group">
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            className="lowin-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {validationMessage.password && (
            <div className="validation-message">
              {validationMessage.password}
            </div>
          )}
        </div>

        <div className="lowin-group">
          <input
            type="password"
            name="repeatPassword"
            autoComplete="new-password"
            className="lowin-input"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          {validationMessage.repeatPassword && (
            <div className="validation-message">
              {validationMessage.repeatPassword}
            </div>
          )}
        </div>

        <button className="lowin-btn">Sign Up</button>
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
  )
}

export default ForgetPassword