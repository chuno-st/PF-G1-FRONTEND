import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Button from '@mui/material/Button';
import PersonIcon from '@material-ui/icons/Person';
import { brown, amber, deepOrange } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  styleButton:{
      background:'secondary',
      color: '#ffbb66',
      padding: 2,
  }
})


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyle();

  return (
    <div>
            <Button
            className={classes.styleButton}
            startIcon={<PersonIcon />} 
            onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>
    </div>
  );
};