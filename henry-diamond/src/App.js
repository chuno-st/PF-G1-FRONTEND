import React from "react";

import { Routes, Route, } from "react-router-dom"
//import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home.jsx";
import './App.css';
import About from "./components/About/About";
// import  {PrivateDash}  from "./components/PrivateDash/PrivateDash"; función que validaba roles, ahora lo hace auth0 vvvvvvvv
import ProtectedRoute from "./auth/protected-route.js";

function App() {
  return (
    <div className="bodyApp">
      <Routes>
        <Route
          path="/admin/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
