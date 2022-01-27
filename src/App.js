import "./App.css";

import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div className="container">
      <nav
        style={{
          border: "solid 1px wheat",
          paddingBottom: "0.5rem",
          paddingTop: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem"
        }}
      >
        <Link className="linkBut" to="/login">Login</Link> |{" "}
        <Link className="linkBut" to="/register">Register</Link>
        {/* <Link className="linkBut" to="/profile">Profile</Link> */}
      </nav>
        <div className="text">
          <h1 className="animate-charcter">Welcome to!<br/> -- Best Friend Finder -- </h1>
          <p>- Find a new Best Friend</p>
          <p>- Search between various of dog breeds.</p>
          <p>- Get to know them better.</p>
          <p>- And get inspired!</p>
          <h2><Link className="linkBut" to="/register">Sign up today</Link></h2>
        </div>
      </div>
    </div>
  );
}

export default App;
