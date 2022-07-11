import React from "react";
import  AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import  Typography  from "@material-ui/core/Typography";
import  {makeStyles} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Container from '@material-ui/core/Container';
// import {AdbIcon} from  "@material-ui/icons"
import SearcbBar from "../SearchBar/SearchBar"
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Logout/Logout";
import { Profile } from "../Profile/Profile";
import { IconButton } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    menuButton:{
        marginRight: theme.spacing(2)
    }
}))

const Navbar = () => {
    const { isAuthenticated } = useAuth0();
    const classes = useStyle()
    return (
        <div>
            <AppBar position="fixed" color="secondary">
                <Container maxWidth="xl">
                    <SearcbBar/>
                    <Filter/>
                    <Toolbar disableGutters>
                        {/* <AdbIcon className={classes.MenuIcon} /> */}
                        <Typography variant="h6">
                            Logo Marca
                        </Typography>
                        <IconButton color="primary" enableColorOnDark="bool" className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={classes.offset}></div>
            <div>
                <h1> Landing Page en construccion</h1>
                <Link  to="/Home">
                Home
                </Link>
                <Link  to="/About">About</Link>
                {isAuthenticated ? (
                <>
                    <Profile />
                    <LogoutButton />
                </>
                ) : (
                <LoginButton />
        )}
        </div>
        </div>
    )
}

export default Navbar;