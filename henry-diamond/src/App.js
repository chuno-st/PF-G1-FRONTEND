import React from "react";
// import { ThemeProvider } from "@material-ui/core";
// import { Theme } from "./temaConfig";
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Landing from "./components/Landing"
// import Nav from "./components/Nav"

// import './App.css';

function App() {
  return (

   <div>
    {/* <ThemeProvider>
      <Nav /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>} />
          </Routes>
        </BrowserRouter>
    {/* </ThemeProvider> */}


   </div>
      
  );
}

export default App;
