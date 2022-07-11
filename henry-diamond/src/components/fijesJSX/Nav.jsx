import  AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import  Typography  from "@material-ui/core/Typography";
import  {makeStyles} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Container from '@material-ui/core/Container';
// import {AdbIcon} from  "@material-ui/icons"

import React from "react";
import { IconButton } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    menuButton:{
        marginRight: theme.spacing(2)
    }
}))

const Navbar = () => {

    const classes = useStyle()
    return (
        <div>
            <AppBar position="fixed" color="secondary">
                <Container maxWidth="xl">
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
        </div>
    )
}

export default Navbar;