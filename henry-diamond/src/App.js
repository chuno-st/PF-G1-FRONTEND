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
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container  disableGutters='true' maxWidth="xl" height='xl' >
//         <Typography component="div" style={{ backgroundColor: '#7a7a7a', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
// }



function App() {
  const {isLoading} = useAuth0();

  if (isLoading) return <Loading />;

  return (
  <div className="bodyApp">
    <React.Fragment>
        <CssBaseline />
          <Container  disableGutters='true' maxWidth="xl" height='xl' >        
            <Typography component="div" style={{ backgroundColor: '#bababa', height: '100%' }}>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/myaccount" element={<MyAccount />} />
                  <Route path="/cart" element={<ShoppingCart/>} />
                  <Route path="/:id" element={<Detail/>}/>
                  <Route path="/admin" element={<PrivateDash>
                    <Admin/>
                  </PrivateDash>} />
                </Routes>
              </Typography>
          </Container>
    </React.Fragment>    
        </div>
  );
}

export default App;
