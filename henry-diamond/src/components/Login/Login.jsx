import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Button from '@mui/material/Button';
import PersonIcon from '@material-ui/icons/Person';
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
            variant='#757575'
            className={classes.styleButton}
            startIcon={<PersonIcon />} 
            onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>
    </div>
  );
};