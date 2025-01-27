"use client";
import { useState } from "react";

const Login = ({ login, client }) => {
  const [disabled, setDisabled] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabled(true)

    try {
      const response = await client.login(e.target.username.value, e.target.password.value)
      console.log(response.data)
      login(response.data.token)
    } catch (error) {

    }

  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>
        <button type="submit" disabled={disabled}>
          {disabled ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Login;