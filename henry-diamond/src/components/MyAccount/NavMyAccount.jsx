import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Link  } from "@material-ui/core";
import { resetMatch } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginButton } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../Logo/Logo';
import Grid from '@material-ui/core/Grid';
import {ShoppingCartButton} from '../ShoppingCartButton/ShoppingCartButton'





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',

  },
  home: {

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
      <AppBar position="static">
        <Toolbar variant="dense">
            <Grid container spacing={1}>

                    <Grid item xs>
                        <Logo className={classes.logo} />
                    </Grid>

                    <Grid item xs>
                        <Button size="large" variant="contained" className={classes.home} onClick={handleclick} > HOME </Button>
                    </Grid>
                    

                    <Grid item xs>
                    {
                                isAuthenticated ? (
                                    <div>
                                        <Button  size="large"><Profile className={classes.profile}/></Button>
                                        <ShoppingCartButton />

                                    </ div>
                                    ) : (
                                      <div>
                                        <LoginButton className={classes.loginButton} />
                                        </ div>

                                    )
                                    }

                </Grid>


          
            </Grid>

        </Toolbar>
      </AppBar>
    </div>
  );
}














