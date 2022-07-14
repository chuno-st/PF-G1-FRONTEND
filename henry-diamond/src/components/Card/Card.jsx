import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import './Cards.css'
import { capitalizeLetter } from "../../Utils/utils.js"

export default function BasicCard(props) {
    const {item} = props;
  return (
    
    <Card sx={{ maxWidth: 345,height:'100%' }} className="card">
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {capitalizeLetter(item.name)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {capitalizeLetter(item.description)+" "+"$"+item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='buttonCard'>Compartir</Button>
        <Button size="small" className='buttonCard'>Detalles</Button>
        
      </CardActions>
    </Card>
   
  );
}
  