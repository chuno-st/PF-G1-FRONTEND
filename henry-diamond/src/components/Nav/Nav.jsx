import React from "react";
import  AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import  Typography  from "@material-ui/core/Typography";
import  {makeStyles} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Container from '@material-ui/core/Container';
// import {AdbIcon} from  "@material-ui/icons"
import SearchBar from "../SearchBar/SearchBar"
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";

import { Profile } from "../Profile/Profile";
import { IconButton } from "@material-ui/core";

import './Nav.css'

// const useStyle = makeStyles((theme) => ({
//     offset: theme.mixins.toolbar,
//     menuButton:{
//         marginRight: theme.spacing(2)
//     }
// }))

const Navbar = () => {
    const { isAuthenticated } = useAuth0();
    // const classes = useStyle()
    return (
        <div className="backgroundGral">
                <Container  className="contenedorNavCss" maxWidth="xl">
                    <div className="divContainer">
                    <SearchBar />
                    </div>
                    <div className="divContainerFilter">
                        <Filter/>
                    </div>
                    
                            {/*<div className="containerNav">
                                <Link className="tittleNav" to='/home'>
                                    <button className="buttonNav">Home</button>
                                    </Link>
                            </div>*/}
                    <div className="divContainer">
                                
                                {/*<Link  to="/Home">
                                    Home
                                </Link>
                                <Link  to="/About">About</Link>
                                                                */}
                                {isAuthenticated ? (
                                <div>
                                    <Profile />
                                </ div>
                                ) : (
                                <LoginButton />
                               
                                )
                                }
                    </div>
                    
                        
                </Container>

            <h1> </h1>
            {/* <div className={classes.offset}></div> */}
        </div>
    )
}

export default Navbar;