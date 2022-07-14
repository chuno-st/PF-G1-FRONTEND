import React from "react";
import  AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {IconButton} from "@material-ui/core";
import  Typography  from "@material-ui/core/Typography";
import  {makeStyles, alpha} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "../SearchBar/SearchBar"


import Container from '@material-ui/core/Container';
// import {AdbIcon} from  "@material-ui/icons"
import Filter from "../Filter/Filter";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { Profile } from "../Profile/Profile";
// import { IconButton } from "@material-ui/core";

import './Nav.css'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {

        
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  export default function SearchAppBar() {
    const { isAuthenticated } = useAuth0();
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Container  className="contenedorNavCss" maxWidth="xl">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Material-UI
                        </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                <SearchIcon />
                                </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                            </div>
                    
                    {/* <div className="divContainer">
                    <SearchBar />
                    </div>
                    <div className="divContainerFilter">
                    <Filter/>
                    </div>
                */}
                            {/*<div className="containerNav">
                                <Link className="tittleNav" to='/home'>
                                <button className="buttonNav">Home</button>
                                </Link>
                            </div>*/}
                    {/* <div className="divContainer"> */}
                                
                                {/*<Link  to="/Home">
                                    Home
                                    </Link>
                                    <Link  to="/About">About</Link>
                                */}
                                {
                                    isAuthenticated ? (
                                        <div>
                                    <Profile />
                                </ div>
                                ) : (
                                    <LoginButton />
                                    
                                    )
                                }
                    {/* </div> */}
                    
                        
                    </Toolbar>
                </AppBar>
            </Container>
          
        </div>
   
    )}
