import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/dashboard" />;
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    try {
      let response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      console.log(response);
      if (response.status === 200) {
        return navigate("/dashboard");
        // return <Navigate to="/dashboard" />;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
