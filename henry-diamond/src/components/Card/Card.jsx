import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import { blueGrey } from '@material-ui/core/colors';
import { useAuth0 } from "@auth0/auth0-react";
import {useState} from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoCard from '../Logo/LogoCard'; 
import { ThemeProvider , createTheme} from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary:{
      main: '#1976d2'
    },
    secondary:{
      main: '#9c27b0'
    },
    warning:{
      main: '#ed6c02'
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)'
    }
  },
  typography: {
      fontFamily: 'Roboto',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    
  },
  palette:{
    backgroundColor: blueGrey
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'white',
    variant: "square",
    height: 'auto' ,
    width: 'auto',
    
  },
  text:{
    alignItems:'right',
  },
}));





export default function BasicCard(props) {
  const {item} = props;
      const dispatch = useDispatch();
      const navigate = useNavigate()
      const { isAuthenticated } = useAuth0();
      const [cantidad, setCantindad] = useState(0);
  
  
       const handleclick = () => {
        navigate(`/${item.product_id}`,{ replace: true })
  
      }
      if(item.cantidad===0){
          localStorage.removeItem(item.product_id ,JSON.stringify(item) )
      }
      const handleUp = () => {
        if (isAuthenticated){
          setCantindad(cantidad+1)
          item.cantidad=cantidad+1;
          console.log(item)
          localStorage.setItem(item.product_id ,JSON.stringify(item) )

        }else { alert("Para comprar un producto debes estar logueado")}

      }
      const handleDown = () => {
        if (isAuthenticated){
          setCantindad(cantidad-1)
          item.cantidad=cantidad-1;
          console.log(item)
          localStorage.setItem(item.product_id ,JSON.stringify(item) )
        }else { alert("Para comprar un producto debes estar logueado")}}
      const handleFav = () => {
        if (isAuthenticated){
          localStorage.setItem(item.product_id ,JSON.stringify(item) )
        }else {
          alert("Para agregar a favoritos un producto, debes estar registrado")
        }
      }
      const classes = useStyles();
      // const [expanded, setExpanded] = React.useState(false);

     

  return (
      <ThemeProvider theme={theme}>
          <Card  md={{ maxWidth: '100%',height:'100%' }}>
            <CardHeader
              className={classes.text}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}  >
                  <LogoCard />
                </Avatar>
              }
              variant='h1'
              title={(item.name.toUpperCase())}
              
            />

            <CardMedia
              className={classes.media} 
              image={item.image}
              title="Imagen del producto"
            />
        
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon onClick={handleFav} />
              </IconButton>
              <IconButton>
                {"$"+item.price}
              </IconButton>
              <IconButton aria-label="share" >
                { cantidad===0
                ?  <AddShoppingCartIcon onClick={handleUp} />
                : <><KeyboardArrowUpIcon onClick={handleUp}/><p>{cantidad}</p> <KeyboardArrowDownIcon onClick={handleDown} /></>

                }
              
                
              </IconButton>
              <IconButton arial-label='detail' onClick={handleclick}>
                <AddIcon />
              </IconButton>
            </CardActions>
            
          </Card>
    </ThemeProvider>
  );
}

  