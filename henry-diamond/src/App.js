import React from "react";
import {Routes,Route,} from "react-router-dom"
//import Landing from "./components/Landing/Landing"
import Home from "./components/Home/Home.jsx";
import './App.css';
//import { dark } from "@material-ui/core/styles/createPalette.js";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { brown, amber, deepOrange } from "@material-ui/core/colors";
import MyAccount from '../../henry-diamond/src/components/MyAccount/MyAccount'
import Detail from './components/Details/Detail'
import Admin from "../src/components/DashBoard/index"
import  {PrivateDash}  from "./components/PrivateDash/PrivateDash";

const theme = createTheme({
  palette: {
    primary:{
      main: brown[200]
    },
    secondary:{
      main: amber[500]
    },
    warning:{
      main: deepOrange[500]
    }
  },
  typography: {
      fontFamily: 'Arima',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
  }
})


function App() {
  return (

<div className="bodyApp">
  <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/:id" element={<Detail/>}/>
          <Route path="/admin" element={<PrivateDash>
            <Admin/>
          </PrivateDash>} />
        </Routes>
          
  </ThemeProvider>
</div>
   
      
  );
}

export default App;
