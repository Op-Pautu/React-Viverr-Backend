import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      console.log(res.data);
    } catch (err) {
      const errorResponse = err.response.data;
      const errorMessage =
        errorResponse.message || errorResponse.error || "An error occurred";
      setError(errorMessage);
    }
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
