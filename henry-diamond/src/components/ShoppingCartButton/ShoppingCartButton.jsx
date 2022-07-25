import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Button from '@mui/material/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



export const ShoppingCartButton = () => {
      
    return (
      <IconButton aria-label="show cart items" color="black" href="/cart">
        <Badge badgeContent={2} color='primary'> 
              <ShoppingCartIcon />
        </Badge>
      </IconButton>

      );
    };

    //badge permite agregar la logica para que el numero de items en el carrito se modifique