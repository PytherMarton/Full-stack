import React from "react";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

const rootElement = document.getElementById("root");


// const [user, setUser] = useState(null);
// user={user} setUser={setUser}


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="register" element={<Register />} />
    </Routes>

  </BrowserRouter>,
  rootElement
);