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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import { blueGrey } from '@material-ui/core/colors';
import { useAuth0 } from "@auth0/auth0-react";
import {useState} from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


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
    backgroundColor: '#4fc3f7',
  },
}));





export default function BasicCard(props) {
  const {item} = props;
      const dispatch = useDispatch();
      const navigate = useNavigate()
      const { isAuthenticated } = useAuth0();
      const [cantidad, setCantindad] = useState(1);
  
  
       const handleclick = () => {
        navigate(`/${item.product_id}`,{ replace: true })
  
      }
       const handleBuy = () => {
         if (isAuthenticated){
          setCantindad(cantidad+1)
          item.cantidad=cantidad;
          console.log(item)
          localStorage.setItem(item.product_id ,JSON.stringify(item) )
        }else {
          alert("Para comprar un producto debes estar logueado")
        }
      }
      const handleUp = () => {
        setCantindad(cantidad+1)
        item.cantidad=cantidad;
        console.log(item)
      }
      const handleFav = () => {
        if (isAuthenticated){
          localStorage.setItem(item.product_id ,JSON.stringify(item) )
        }else {
          alert("Para favear un producto debes estar logueado")
        }
      }
      const classes = useStyles();
      // const [expanded, setExpanded] = React.useState(false);

     

  return (
    <Card  md={{ maxWidth: 345,height:'100%' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}  >
            HD
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        variant='h2'
        title={(item.name.toUpperCase())}
        
      />

      <CardMedia
        className={classes.media} 
        image={item.image}
        title="Paella dish"
      />
   
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={handleFav} />
        </IconButton>
        <IconButton>
          {"$"+item.price}
        </IconButton>
        <IconButton aria-label="share" >
          { cantidad===1
          ?  <AddShoppingCartIcon onClick={handleBuy} />
          : <><KeyboardArrowUpIcon onClick={handleUp}/><p>{cantidad}</p> <KeyboardArrowDownIcon onClick={()=>setCantindad(cantidad-1)}/></>

          }
         
          
        </IconButton>
        <IconButton arial-label='detail' onClick={handleclick}>
          <AddIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}

  