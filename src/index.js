import React from "react";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

function Test() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="profile" element={<Profile user={user} setUser={setUser}/>} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

render(
  <Test />,
  rootElement
);

export default Test;
