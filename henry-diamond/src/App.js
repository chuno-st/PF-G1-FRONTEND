import React from "react";

import {Routes,Route,} from "react-router-dom"
//import Landing from "./components/Landing/Landing"
import  Home  from "./components/Home/Home.jsx";
import './App.css';

function App() {
  return (

   <div className="bodyApp">

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

   </div>
      
  );
}

export default App;
