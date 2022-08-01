import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { resetMatch } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginButton } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../Logo/Logo';
import Grid from '@material-ui/core/Grid';
import {ShoppingCartButton} from '../ShoppingCartButton/ShoppingCartButton'
// import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Box, Hidden} from '@material-ui/core';


const theme = createTheme({
  palette: {
    primary:{
      main: '#1976d2'
    },
    secondary:{
      main: '#9c27b0'
    },
    warning:{
      main: '#ed6c02'
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)'
    }
  },
  typography: {
      fontFamily: 'Roboto',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
  },
})



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    padding: '0px',
   
  },
  home: {
    alignContent: 'center'
  },
  profile: {

  },
  loginButton: {

  },
  logo: {
    
  }
  
}));

export default function NavMyAccount() {
  const classes = useStyles();
  const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleclick = () => {
        dispatch(resetMatch())
        navigate('/')
    }
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    <div className={classes.root}>
      {/* <ThemeProvider theme={theme}> */}
      <AppBar position="fixed" >
        <Toolbar variant="dense">
            <Grid container xs={12}>

                    <Grid item xs={6} ms={6} md={6} lg={6} xl={6}>
                    <Box pr={60}>
                        <Button href="/">
                            <Logo className={classes.logo} />
                        </Button>
                    </Box>

                    </Grid>

                    
                    
                    <Grid item xs={6} ms={6} md={6} lg={6} xl={6}>
                        <Box pl={25}>

                        {
                                    isAuthenticated ? (
                                     

                                        <div>
                                              <Hidden smDown>
                                                <Button  size="large"><Profile className={classes.profile}/></Button>
                                              </Hidden>

                                                <ShoppingCartButton />

                                        </ div>
                                        ) : (
                                        <div>
                                            <LoginButton className={classes.loginButton} />
                                        </ div>

                                        )

                                        }
                        </Box>
                    </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    {/* </ThemeProvider> */}
    </div>
  );
}


















