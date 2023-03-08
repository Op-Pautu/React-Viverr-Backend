import React from "react";
import "./Login.scss";
import axios from "axios";

function Login() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        username,
        password,
      });
      console.log(res.data);
    } catch (err) {
      setError(err);
      console.log(err);
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
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          placeholder="johndoe@gmail.com"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
