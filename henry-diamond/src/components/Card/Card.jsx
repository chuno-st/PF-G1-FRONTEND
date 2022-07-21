import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import './Cards.css'
import { capitalizeLetter } from "../../Utils/utils.js"
import { useNavigate } from 'react-router-dom';
import {addShoppingCart} from '../../actions/actions.js'
import { useDispatch } from 'react-redux';

export default function BasicCard(props) {
    const {item} = props;
    const dispatch = useDispatch();
    const navigate = useNavigate()

     const handleclick = () => {
      navigate(`/${item.product_id}`)

    }
     const handleBuy = () => {
      localStorage.setItem('compras',item)
    }
     
  return (
    
    <Card sx={{ maxWidth: 345,height:'100%' }} className="card">
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {capitalizeLetter(item.name)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"$"+item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='buttonCard' onClick={handleclick}>Detalles</Button>
        <Button size="small" className='buttonCard' onClick={handleBuy}>Agregar al carrito</Button>
        
      </CardActions>
    </Card>
   
   );
  }
  