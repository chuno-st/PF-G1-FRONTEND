import React from "react";
import  AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from '@material-ui/core/InputBase';
import  Typography  from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import Button from '@mui/material/Button';
import Container from '@material-ui/core/Container';
import  {makeStyles} from "@material-ui/core/styles";
import { useState} from "react";
import {useDispatch} from 'react-redux';
import { getAllProduct } from "../../actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import SideBar from "../SideBar/SideBar"
import { brown, amber, deepOrange } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core";
import { ShoppingCartButton } from '../ShoppingCartButton/ShoppingCartButton'
import Filter  from '../Filter/Filter';
import Logo from '../Logo/Logo'

const theme = createTheme({
  
  typography: {
      fontFamily: 'Roboto',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
  }
})

const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#e0e0e0',
      color: '#212121'
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
      backgroundColor: (theme.palette.secondary, 0.15),
      '&:hover': {
        backgroundColor: (theme.palette.common.white, 0.25),
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
      color: '#827717',
      paddingRight: 100
    },
    inputInput: {

      color:'#212121',
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
    const dispatch = useDispatch();
    const [name, setName] = useState("")
   
  
      const handleSearchBar = (e) => {
          setName(e.target.value)
      }
      
      // console.log(name)
  
      const handleSubmit =(e) => {
          e.preventDefault() // para que no refresque la pag si no hay info nueva, con el click.
          dispatch(getAllProduct(name))
      }
  


    return (
        <div >
            <Container maxWidth="xl">
                <AppBar className={classes.root} position="static">
                    <Toolbar>
                      <SideBar />
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Logo />
                        </Typography>
                        {/* <div><Filter /></div> */}
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                <SearchIcon />
                                </div>
                                    <InputBase
                                        placeholder="Buscar..."
                                        label="Outlined secondary"
                                        classes={{
                                          root: classes.inputRoot,
                                          input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={handleSearchBar}
                                        />
                                </div>
                                <Button  
                                      className="Search" 
                                      type='submit' 
                                      color= 'primary'
                                      onClick={(e) => handleSubmit(e)}
                                      > BUSCAR
                                </Button>
                                 
                            {
                              isAuthenticated ? (
                                <div>
                                <Profile />
                                </ div>
                                ) : (
                                  <LoginButton />
                                  )
                                }
                                <ShoppingCartButton />                         
                    </Toolbar>
                </AppBar>
            </Container>
          
        </div>
   
    )}
