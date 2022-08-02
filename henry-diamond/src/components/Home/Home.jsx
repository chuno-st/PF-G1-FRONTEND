import React from 'react';
import { Grid, Box } from '@material-ui/core'
import ConteinerCards from "../ConteinerCards/ConteinerCards"
import SearchAppBar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { checkFav, getAllItems } from "../../actions/actions";
import { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'

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
  const { user, isAuthenticated, isLoading } = useAuth0();
  

  useEffect(() => {
    dispatch(getAllItems())
    if(isAuthenticated) {
      dispatch(checkFav(user.sub))
    }
    
  }, [dispatch,]);

  

 
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




