import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ user, setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost/user/userLogin";

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: userName,
      password: password,
    });

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    setUser({ username: data.user.name, id: data.user.id, jwt: data.token });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text">Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user" className="form">
            Username:
          </label>
          <input
            type="text"
            name="user"
            value={userName}
            onChange={handleUserName}
          />

          <label htmlFor="password" className="form">
            User:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />

          <input
            style={{ marginBottom: "4rem"}}
            type="submit"
            value="Submit"
            className="submitbtn"
            onClick={(event) =>
              (window.location.href = "http://localhost:3000/profile")
            }
          />
          <br />
          <Link
            style={{
              border: "solid 1px wheat",
              borderRadius: "30px",
              paddingTop: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
            className="linkBut"
            to="/"
          >
            Back to home
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
