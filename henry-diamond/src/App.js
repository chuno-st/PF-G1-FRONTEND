import React from "react";

import {Routes,Route,} from "react-router-dom"
//import Landing from "./components/Landing/Landing"
import  Home  from "./components/Home/Home.jsx";
import './App.css';
import  About  from "./components/About/About";
import  {PrivateDash}  from "./components/PrivateDash/PrivateDash";

function App() {
  return (

   <div className="bodyApp">

      <Routes>
      <Route
          path="/admin/about"
          element={
            <PrivateDash>
              <About />
            </PrivateDash>
          }
        />
        <Route path="/" element={<Home/>} />
      </Routes>

   </div>
      
  );
}

export default App;
