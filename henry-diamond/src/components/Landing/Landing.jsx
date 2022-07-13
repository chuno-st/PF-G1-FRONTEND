import { Link } from "react-router-dom";

import {Button} from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";

import Typography from "@material-ui/core/Typography";
// import {makeStyles} from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/core/styles";
// import {theme} from '../../themeConfig'
import lime from "@material-ui/core/colors/lime";
import amber from "@material-ui/core/colors/amber";
// import { PaletteColor } from "@material-ui/core/styles/createPalette";
import { createTheme } from "@material-ui/core/styles";
import Navbar from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ConteinerCards from "../ConteinerCards/ConteinerCards";

const theme = createTheme({
    palette: {
      primary:{
        main: lime[500],
      },
      secondary:{
        main:amber[800],
      }
    },
   
});


// const useStyle = makeStyles({
//   claseLanding: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   }
// })



const Landing = () => {

  // const classesLanding = useStyle()

  return (
    
         <ThemeProvider theme={theme}>
          <Navbar />
          <Typography variant="h2" color="main">Landing Page en construccion</Typography>
          <Typography variant="body1" color="inherit" align="center">
            parrafo de la landing
          </Typography>

          <Button 
            // className={classesLanding.claseLanding}
            color="primary" 
            variant="text"
            endIcon={<AccessAlarm />}
            >
            hi
          </Button>
          <Button
          // className={classesLanding.claseLanding}
          color="secondary" 
          variant="contained"
          >  
            <Link className="link" to="/Home">
              Home
            </Link>
          </Button>
          
          <Button
            // className={classesLanding.claseLanding}
            color="secondary" 
            variant="outlined"
          >
            <Link className="link" to="/About">About</Link>
        </Button>
        <ConteinerCards></ConteinerCards>
        <Footer/>
      </ThemeProvider> 
    
  );
};




// const LandingPage = () =>{
//     return (
//         <div className='background'>
//             <div className='container'>
//                 <div className="PokePage">
//                     <h1 className="tituloLanding">Welcome to my PokePage</h1>
//                 </div>
//                 <Link to='/Home'>
//                     <button className='buttonLanding'>Home</button>
//                 </Link>
//                 <div>
//                     <img className="pikachuEsp" src={ pikachuEsp } alt='imgLanding'></img>
//                 </div>
//                 <h4 className='myName'>Developed by Carolina Castillo A.</h4>
//             </div>
//         </div>
//     )
// }

// export default LandingPage

export default Landing;
