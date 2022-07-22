import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getProductById, FilterBy, findMatch} from '../../actions/actions';
import NavPelado from "../MyAccount/Navpelado";
import Footer from "../Footer/Footer";
import { Card , CardHeader, Avatar, IconButton, CardMedia, CardActions, Box } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BasicCard from "../Card/Card";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RecipeReviewCard from '../Card/Card'


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  palette:{
    backgroundColor: 'blueGrey'
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

///////////////////////////////COMPONENTES DE MATERIAL UI --> SEGUIMOS MAÑANA 23/7/22 --- PORFA NO MODIFICAR//////////////

// export default function CenteredGrid(props) {

    // const {item} = props;
    // const classes = useStyles();
    // const matches = useSelector(state => state.matches)
    // const { id } = useParams()
    // const dispatch = useDispatch()
    // const product = useSelector(state => state.product)
    // const navigate = useNavigate()
  
    //    const handleclick = () => {
    //     navigate(`/${item.product_id}`)
  
    //   }
    //   const handleBuy = () => {
    //       localStorage.setItem(item.product_id ,JSON.stringify(item) )
    // }


    // useEffect(() => {
    //     dispatch(getProductById(id))
       
    // },[dispatch])

//    product.name && dispatch(findMatch(product.category_id))

// //  console.log(product)
// //  console.log(matches)
  

//   return (
   
// //     <div className={classes.root}>
    
// //       <Grid container spacing={3}>
// //         <Grid item sm={20} >
// //         <Paper className={classes.paper}>CardDetail</Paper>
// //             {/* <RecipeReviewCard /> */}
// //         </Grid>
// //         <Grid item sm={6}>
// //           <Paper className={classes.paper}>Description</Paper>
// //         </Grid>
// //         <Grid item sm={3}>
// //           <Paper className={classes.paper}>Relacionado1</Paper>
// //         </Grid>
// //         <Grid item sm={3}>
// //           <Paper className={classes.paper}>Relacionado2</Paper>
// //         </Grid>
// //         <Grid item sm={3}>
// //           <Paper className={classes.paper}>Relacionado3</Paper>
// //         </Grid>
     
// //       </Grid>
// //     </div>
   
// //   );
// // }

//////////////////////////// COMPONENTES CSS A MODIFICAR ARRIBA!! /////////////////////////////////////


export default function Detail () {

    const matches = useSelector(state => state.matches)
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProductById(id))
       
    },[dispatch])

   product.name && dispatch(findMatch(product.category_id))

//  console.log(product)
//  console.log(matches)
  return (

    <div>
        <NavPelado/>
        <h2>{product.name}</h2>
        <img src={product.image}></img>
        <h3>{product.price}</h3>
        <p>{product.description}</p>
        <div>
       { matches.map( i => {
        console.log(i.name,'estoy en detail')
        if(i.name === product.name) {
            return
        }
       return <BasicCard key={i.id} item={i}></BasicCard>
    })
        } 
    </div>
    
        <Footer></Footer>
    </div>
    
  )
}