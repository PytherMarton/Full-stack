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
          <h1 className="animate-charcter">Welcome to Magic Card Finder!</h1>
          <p>- Search for your favourite Magic cards.</p>
          <p>- Create your own deck.</p>
          <p>- Extend your collection.</p>
          <p>- Create multiple decks.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
