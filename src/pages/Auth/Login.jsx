import React, { useEffect, useState } from "react";
import FormLogin from "../../components/FormLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const localUser = localStorage.getItem("username");
    if (localUser) {
      navigate("/download");
    }
  }, []);

  const handleLogin = async () => {
    setError("");
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.status == 200) {
        console.log("Login success:");
        const username = data.username;
        localStorage.setItem("username", username);
        navigate("/download");
      } else {
        setError("*Wrong username or password");
        console.error("Wrong username or password", data.error);
      }
    } catch (error) {
      console.error("*Login error:", error.message);
    }
  };

  return (
    <FormLogin
      handleLogin={handleLogin}
      error={error}
      setUsername={setUsername}
      setPassword={setPassword}
      username={username}
      password={password}
    />
  );
};

export default Login;
