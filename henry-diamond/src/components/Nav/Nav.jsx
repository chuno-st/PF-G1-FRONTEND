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
import { LogoutButton } from "../Logout/Logout";
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
            <AppBar position="fixed" color="secondary">
                <Container maxWidth="xl">
                    <SearchBar />
                        <Filter/>
                            <div className="containerNav">
                                <Link className="tittleNav" to='/home'>
                                    <button className="buttonNav">Home</button>
                                </Link>
                            </div>
                            <div>
                                
                                <Link  to="/Home">
                                    Home
                                </Link>
                                <Link  to="/About">About</Link>

                                {isAuthenticated ? (
                                <div>
                                    <Profile />
                                    <LogoutButton />
                                </ div>
                                ) : (
                                <LoginButton />
                               
                                )
                                }
                        </div>
                        
                </Container>
            </AppBar>
            <h1> Landing Page en construccion</h1>
            {/* <div className={classes.offset}></div> */}
        </div>
    )
}

export default Navbar;