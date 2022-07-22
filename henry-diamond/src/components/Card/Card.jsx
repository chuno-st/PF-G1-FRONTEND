import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { capitalizeLetter } from "../../Utils/utils.js"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
  import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import { blueGrey } from '@material-ui/core/colors';




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



// export default function BasicCard(props) {
//     const {item} = props;
//     const dispatch = useDispatch();
//     const navigate = useNavigate()

//      const handleclick = () => {
//       navigate(`/${item.product_id}`)

//     }
//      const handleBuy = () => {
//       localStorage.setItem(item.product_id ,JSON.stringify(item) )
//     }
     
  // return (
    
  //   <Card sx={{ maxWidth: 345,height:'100%' }} className="card">
  //     <CardMedia
  //       component="img"
  //       height="350"
  //       width="350"
  //       image={item.image}
  //       alt="green iguana"
  //     />
  //     <CardContent>
  //       <Typography gutterBottom variant="h6" component="div">
  //         {capitalizeLetter(item.name)}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         {"$"+item.price}
  //       </Typography>
  //     </CardContent>
  //     <CardActions>
  //       <Button size="small" className='buttonCard' onClick={handleclick}>Detalles</Button>
  //       <Button size="small" className='buttonCard' onClick={handleBuy}>Agregar al carrito</Button>
        
  //     </CardActions>
  //   </Card>
   
  //  );
  // }



export default function RecipeReviewCard(props) {
  const {item} = props;
      const dispatch = useDispatch();
      const navigate = useNavigate()
  
       const handleclick = () => {
        navigate(`/${item.product_id}`)
  
      }
       const handleBuy = () => {
        localStorage.setItem(item.product_id ,JSON.stringify(item) )
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
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={handleBuy}>
          {"$"+item.price}
        </IconButton>
        <IconButton aria-label="share">
          <AddShoppingCartIcon  />
        </IconButton>
        <IconButton arial-label='detail' onClick={handleclick}>
          <AddIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}

  