import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useSelector} from "react-redux";





export const HeartFavButton = () => {

  const miStorage = window.localStorage;
  let Productos = Object.values(miStorage)
  let objetos = Productos.map(producto => {return JSON.parse(producto)})
  let productos = objetos.filter(producto => producto.hasOwnProperty('product_id'))
  const cantidad = productos.reduce( (acc,producto) =>acc+producto.cantidad, 0)

  // useEffect(() => {
  //   dispatch(addCart())
  // }, [dispatch]);

  const fillCart = useSelector (state => state.shoppingCart)
  console.log(fillCart)

      
    return (
      <IconButton aria-label="show cart items" color="black" href="/cart">
        <Badge badgeContent={cantidad} color='primary'> 
              <FavoriteIcon />
        </Badge>
      </IconButton>

      );
    };

    //badge permite agregar la logica para que el numero de items en el carrito se modifique