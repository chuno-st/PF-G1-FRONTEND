import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';


export default function BasicCard(props) {
    const {item} = props;
  return (
    <div className="backgrounCard" >
        <h3 className="ProductName">{item.name.toUpperCase()}</h3>
          <img className="pokeImg" src={item.image} alt='PokeImg not found'  ></img>
        <h4 className="types">Descripción: {<br />}{item.description}</h4>

        {/* <Card  sx={{ maxWidth: 345 }}>

          <CardMedia className="backcadaCard" 
          component="img" 
          height="140" 
          image={item.image} 
          alt="green iguana" 
          />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
        </Card> */}
    </div>
  );
}
  