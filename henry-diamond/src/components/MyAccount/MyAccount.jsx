import { Grid } from '@material-ui/core'
import SearchAppBar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { ThemeProvider } from "@material-ui/core"
import { createTheme } from "@material-ui/core";
import { brown, amber, deepOrange } from "@material-ui/core/colors";
import { Link } from 'react-router-dom';


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
  return (
<div>
    <ThemeProvider theme={theme}>
          <Grid container sx={{
            hight:'100%',
            width:'100%'
          }}>
            <Grid item xs={12} sm={12} xl={12}>
              <SearchAppBar />
              </Grid>
            <Grid item xs={12} sm={12} xl={12}>
       
              </Grid>
            <Grid item xs={12} sm={12} xl={12}>
              <Footer/>
              </Grid>
          </Grid>
      </ThemeProvider>
</div>
          
    
  );
};
