import React from 'react';
import { Grid, Box } from '@material-ui/core'
import ConteinerCards from "../ConteinerCards/ConteinerCards"
import SearchAppBar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import {useDispatch,useSelector} from "react-redux";
<<<<<<< HEAD
import {checkFav, getAllItems, checkuserBlocked} from "../../actions/actions";
=======
import {checkFav, getAllItems, getAllSales} from "../../actions/actions";
>>>>>>> 1747fdde0d3ee8b1263f375f9b45f229c9b29287
import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import swal from 'sweetalert'

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#9c27b0",
        },
        warning: {
            main: "#ed6c02",
        },
        text: {
            primary: "rgba(0,0,0,0.87)",
            secondary: "rgba(0,0,0,0.6)",
            disabled: "rgba(0,0,0,0.38)",
        },
    },
    typography: {
        fontFamily: "Roboto",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

export default function Home() {

  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const roleUser = useSelector(state => state.roleUser);
  

  useEffect(() => {
    dispatch(getAllItems())
    if(isAuthenticated) {
      dispatch(checkFav(user.sub))
<<<<<<< HEAD
      dispatch(checkuserBlocked(user.sub))

=======
      dispatch(getAllSales(user.sub))
>>>>>>> 1747fdde0d3ee8b1263f375f9b45f229c9b29287
    }
    
  }, [dispatch,]);
 if (roleUser==='Locked'){ 
   swal({title: 'Usuario Bloqueado', text: 'Por favor contacte al administrador', icon: 'error', button: 'Aceptar',})
  .then(() => logout({ returnTo: window.location.origin }))
 }
  

 
  return (
  <div>
  <React.Fragment>
      <ThemeProvider theme={theme}>
            <Grid containerFluid sm={{
              hight:1,
              width:1
            }}>
            <Grid item xs={12} sm={12} xl={12}>
              <SearchAppBar />
            </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              <Box
              p={8}
              >
              <ConteinerCards/>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              {/* <Carrousel /> */}
            </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              <Footer/>
            </Grid>
          </Grid>
          </ThemeProvider>
    </React.Fragment>
</div>
          
    
  );
};




