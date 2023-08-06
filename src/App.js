import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Import the Navigate component

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./components/FirebaseAuth/firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setAuthenticated(true);
      } else {
        setUserName("");
        setAuthenticated(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/login/home"
            element={
              authenticated ? (
                <Home name={userName} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
