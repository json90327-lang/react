import React, { useState } from "react";
import "./login.css"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">

      <div className="card">

        <h2>Registration</h2>

        <input
          type="text"
          placeholder="Enter Username"
          className="input"
        />

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="input"
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
<div>
    <input type="checkbox"/> Please Accept T&C
</div>
        </div>

        <button className="btn">Login</button>

      </div>

    </div>
  );
};

export default Login;