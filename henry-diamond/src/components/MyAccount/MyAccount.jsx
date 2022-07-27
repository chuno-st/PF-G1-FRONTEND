import { Avatar, Grid, Typography } from '@material-ui/core'
import SearchAppBar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { Link } from 'react-router-dom';
import NavMyAccount from './NavMyAccount';
import { useAuth0 } from "@auth0/auth0-react";
import './MyAccount.css';
import Divider from '@material-ui/core/Divider';


const theme = createTheme({
  palette: {
    primary:{
      main: '#e0e0e0'
    },

  },
  typography: {
      fontFamily: 'Roboto',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
  }
})

export default function MyAccount() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated, "componente MY ACOUNT")

  return (
<div>
    <ThemeProvider theme={theme}>
          <Grid container sx={{
            hight:'100%',
            width:'100%'
          }}>
            <Grid item xs={12} sm={12} xl={12}>
              <NavMyAccount/>              
            </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              <Typography>Bienvenido, {user.name}</Typography>
            </Grid>

            <Grid item xs={12} sm={12} xl={12}>
              <div className='divDatos'>
                <Avatar src={user.picture} sx={{
                  width: 200,
                  hight: 200
                }}  
                ></Avatar>
                <Typography>{user.email}</Typography>
                
              </div>
              </Grid>
            
            <Grid item xs={12} sm={12} xl={12}>
            
    
                <Footer></Footer>
            
            </Grid>
          </Grid>
      </ThemeProvider>
</div>
          
    
  );
};
