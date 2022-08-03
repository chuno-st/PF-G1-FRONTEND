import React from "react";
import  AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from '@material-ui/core/InputBase';
import  Typography  from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import  {makeStyles} from "@material-ui/core/styles";
import { useState} from "react";
import {useDispatch} from 'react-redux';
import { getAllProduct } from "../../actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import SideBar from "../SideBar/SideBar"
import { createTheme, Hidden } from "@material-ui/core";
import { ShoppingCartButton } from '../ShoppingCartButton/ShoppingCartButton'
import Logo from '../Logo/Logo'
import IconButton from '@mui/material/IconButton';
import Button from '@material-ui/core/Button';
import { HeartFavButton } from '../HeartFavButton/HeartFavButton'



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
      color: '#212121',
    
    },
    AppBar: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
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
      width: '70%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
      boxShadow: '4px 2px 6px #7a7a7a'
    },
    searchIcon: {
      padding: theme.spacing(0),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'start',
      
    },
    inputRoot: {
      color: '#827717',
      paddingRight: 10
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
         <AppBar className={classes.root} position="static" >
                    <Toolbar>
                      <SideBar />
                        <Typography className={classes.title} variant="h6" noWrap>
                          <Button href="/">
                              <Logo />
                          </Button>
                        </Typography>
                       
                          
                           
                            <div >
                                <div className={classes.searchIcon}>
                                
                                </div>
                                    <InputBase
                                        className={classes.search}
                                        mdDown='true'
                                        placeholder="Buscar..."
                                        label="Outlined secondary"
                                        classes={{
                                          root: classes.inputRoot,
                                          input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={handleSearchBar}
                                        />
                           
                                <IconButton  
                                      className='Search' 
                                      type='submit' 
                                      onClick={(e) => handleSubmit(e)}
                                      > <SearchIcon />
                                </IconButton>
                          </div>
                          <Hidden smDown>
                      
                                 
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
                                    <HeartFavButton />

                        </Hidden>
                        
                                                         
                    </Toolbar>
                </AppBar>
          
        </div>
   
    )}
