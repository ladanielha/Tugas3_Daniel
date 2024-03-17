// FormLogin.js
import React, { useState } from "react";
import validateLogin from "../validation/Validation";
import CustomButon from "./Button";

const FormLogin = ({
  handleLogin,
  error,
  setUsername,
  setPassword,
  username,
  password,
}) => {
  const [errorName, setErrorName] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorName("");
    setErrorPass("");

    const message = validateLogin(username, password);
    if (message) {
      setErrorName(message.includes("username") ? message : "");
      setErrorPass(message.includes("password") ? message : "");
      return;
    }

    handleLogin();
  };

  const handleClick = () => {
    
  };

  return (
    <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Sign in
          </h1>
          <p className="col-lg-10 fs-4">sign in</p>
        </div>
        <form
          onSubmit={handleSubmit}
          
        >
          <label>
            Email:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          {errorName && <p style={{ color: "red" }}>{errorName}</p>}
          <label>
            Password:
            <input
              className=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {errorPass && <p style={{ color: "red" }}>{errorPass}</p>}
          <CustomButon type={"submit"} text={"Login"} onClick={handleClick}/>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
