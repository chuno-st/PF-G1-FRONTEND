import React from "react";
import {Routes,Route,} from "react-router-dom"
import Home from "./components/Home/Home.jsx";
import './App.css';
import { Loading } from "./components/Loading/loading.jsx";
//import { dark } from "@material-ui/core/styles/createPalette.js";
import MyAccount from '../../henry-diamond/src/components/MyAccount/MyAccount'
import Detail from '../src/components/Details/Detail.jsx'
import Admin from "../src/components/DashBoard/index"
import  {PrivateDash}  from "./components/PrivateDash/PrivateDash";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  const {isLoading} = useAuth0();

  if (isLoading) return <Loading />;

  return (

<div className="bodyApp">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="/:id" element={<Detail/>}/>
          <Route path="/admin" element={<PrivateDash>
            <Admin/>
          </PrivateDash>} />
        </Routes>
          
</div>
   
      
  );
}

export default App;
