import { Avatar, Grid, Typography } from '@material-ui/core'
import SearchAppBar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { brown, amber, deepOrange } from "@material-ui/core/colors";
import { Link } from 'react-router-dom';
import NavPelado from './Navpelado';
import { useAuth0 } from "@auth0/auth0-react";
import './MyAccount.css'


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

export default function MyAccount() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  return (
<div>
    <ThemeProvider theme={theme}>
          <Grid container sx={{
            hight:'100%',
            width:'100%'
          }}>
            <Grid item xs={12} sm={12} xl={12}>
              <NavPelado></NavPelado>
              </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              <div className='divDatos'>
                <Avatar src={user.picture} sx={{
                  width: 200,
                  hight: 200
                }}  
                ></Avatar>
                <Typography>Bienvenido, {user.name}</Typography>
                <Typography>{user.email}</Typography>
                
              </div>
       
              </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              <Footer/>
              </Grid>
          </Grid>
      </ThemeProvider>
</div>
          
    
  );
};
