import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import PersonIcon from '@material-ui/icons/Person';
import { brown, amber, deepOrange } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core"



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

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
        <ThemeProvider theme={theme}>
            <Button color='primary' startIcon={<PersonIcon />} onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>
        </ThemeProvider>    
    </div>
  );
};