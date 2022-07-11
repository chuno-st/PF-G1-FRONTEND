import React from "react";

import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Landing from "./components/fijesJSX/Landing"
// import Nav from "./components/Nav"

// import './App.css';

function App() {
  return (

   <div>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
          </Routes>
        </BrowserRouter>
   


   </div>
      
  );
}

export default App;
