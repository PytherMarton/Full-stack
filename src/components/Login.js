import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const baseURL = "http://localhost/user/login";

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const prof = user ? window.location.href = "http://localhost:3000/profile" : undefined;

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
    
    console.log(data)
    setUser({ username: data.user.name, id: data.user.id, jwt: data.token });
    console.log(user)
   
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
            onClick={prof}
          />
          <br />
          {/* <h1>{user ? user.username : ""}</h1>
          <h1>{user ? user.id : ""}</h1>
          <h1>{user ? user.jwt : ""}</h1> */}
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
