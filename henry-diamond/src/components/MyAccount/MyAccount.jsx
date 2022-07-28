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
import {Box, CssBaseline, Button} from '@material-ui/core';


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

// console.log(isAuthenticated, "componente MY ACOUNT")

  return (
<div>
    <ThemeProvider theme={theme}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <NavMyAccount/>              
            </Grid>
            <Grid item xs={6}
              alignContent='flex-start'
              >
                    <Box 
                    bgcolor='lightGreen'
                    p={6}
                    mt={8}
                    textAlign='left'
                    border={1}
                    borderColor='black'
                    >
                          <Typography>Bienvenido,<h3>{user.name}</h3></Typography>
                          <Avatar src={user.picture} variant='square'
                          ></Avatar>
                          <Typography>{user.email}</Typography>
                    </Box>
              </Grid>
              <Grid container xs={12}
              direction="row-reverse"
              >
                    <Grid item xs={6}
                    
                    >
                      <Box
                      bgcolor='lightGreen'
                      textAlign='left'
                      p={10}
                      mb={5}
                      >
                        <h3>
                        Redirección al carrito <br/>
                        Detail
                        </h3>
                      </Box>
                    </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box
                bgcolor='lightGreen'
                textAlign='left'
                pb={15}
                >
                    <h2>Historial de pedidos</h2>
                </Box>
              </Grid>
            <Grid item xs={12}>
                <Footer></Footer>
            </Grid>
          </Grid>
      </ThemeProvider>
</div>
          
    
  );
};
