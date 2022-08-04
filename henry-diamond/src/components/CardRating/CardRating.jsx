import React, { Fragment, useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Rating } from '@material-ui/lab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Chip } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { postReview, getReviews} from '../../actions/actions';


// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const labels = {
  1: "Malo",
  2: "Regular",
  3: "Satisfactorio",
  4: "Bueno",
  5: "Excelente",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "90%",
    },
  },
}));

export default function CardRating({ product }) {

  const [reviews, setReviews] = useState([]);
  const [value, setValue] = useState(null);
  const [valueNew, setNewValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [open, setOpen] = useState(false);
  const [openSnack, setSnack] = useState(false);
  const [description, setDescription] = useState("");
  const classes = useStyles();
  const { isAuthenticated, user} = useAuth0();
  
  // const fecha = {e.updatedAt}.substr(0,9)
  const { Reviews } = useSelector(state => state.product);

  //la Id del producto deberia llegar como props o como parametro
  //const id = product.id

  
  useEffect(() => {
    if (product.id) dispatch (getReviews());
  }, [product.id]);

  const dispatch = useDispatch();

  const handlePostReview = () => {
    const obj = {
      id: product.product_id,
      comment: description,
      author: user.name,
      rating: valueNew,
      
    }
    dispatch (postReview(obj))
    dispatch (getReviews())
    setOpen(false)
  }

  
  
  // const handlePostComprador = () => {
  //   if(isAuthenticated ){
  //     dispatch(getReviews(user.email))
  //     setDescription(e.target.value)
  //   }
  // }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleClickOpen = (id) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    setOpen(false);
    // dispatch();
  };
  const handleSnack = () => {
    setSnack(false);
    
  };

  
  return (
    <Fragment>
      <div >
        {isAuthenticated 
        && (
          <div >
            <h2>
              ¿Has comprado este producto? ¡Comparte tu opinión con el resto!
            </h2>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={handlePostReview}
              
            >
              <TextField
                required
                id="outlined-basic"
                label="Escribe tu reseña"
                variant="outlined"
                onChange={handleDescriptionChange}
                value={description}
                
              />
            </form>
            <Rating
              name="hover-feedback"
              value={valueNew}
              precision={1}
              onChange={(event, newValue) => {
                setNewValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {valueNew !== null && (
              <Box ml={0} style={{ marginBottom: "10px" }}>
                {labels[hover !== -1 ? hover : valueNew]}
              </Box>
            )}
            <Button
              variant="contained"
              color="primary"
              style={{ width: "200px" }}
              onClick={handleClickOpen}
            >
              AÑADIR RESEÑA
            </Button>
          </div>
        )
        
        }

        <Typography align='center' gutterBottom variant='h5' >
          Mirá las críticas de {product.name}{" "}
        </Typography>
        {Reviews  ? (
          Reviews.map((e) => (
            <div >
              <div >
                <Box
                  component="fieldset"
                  mb={1} 
                  borderColor="transparent"
                >
                 <Typography align='left' gutterBottom variant='overline' > Valoracion: </Typography>
                  <Rating name="pristine" size="large" value={e.rating} readOnly />
                  <p style={{alignSelf:"flex-start"}}> 
                  <Chip
                    variant="outlined"
                    color="secondary"
                    label={`Autor: ${e.author} : ${e.comment} - Fecha:${(e.updatedAt).substr(0,10)} `}
                    size='medium'
                    title={e.description}
                    /> 
                    {console.log(Reviews, 'estoooooy')}
                  </p>
                </Box>
              </div>
              <div>
                <span>{e.review}</span>
              </div>
            </div>
          ))
        ) : (
          <h2>No se encontraron reviews para este producto.</h2>
        )}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Estas seguro de añadir reseña?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ textAlign: "center", paddingBottom: "5px" }}
          >
            Esta acción puede ser modificada en tu panel de usuario.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{
              maxWidth: "25%",
              color: "white",
              backgroundColor: "black",
            }}
          >
            Cancelar
          </Button>
          <Button
            onClick={handlePostReview}
            color="primary"
            autoFocus
            style={{
              maxWidth: "25%",
              color: "black",
              backgroundColor: "#ffff01",
            }}
          >
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSnack} autoHideDuration={6000} 
      onClose={handleSnack}
      >
        {/* {
        swal({
          title: "La reseña fue añadida con éxito!",
          text: "Por favor inicia sesión para poder realizar la compra",
          icon: "success",
          button: "Aceptar",
          onClose:{handleSnack}
        })
        } */}
        <Alert
          onClose={handlePostReview}
          severity="success"
          style={{ backgroundColor: "#3f51b5", color: "white" }}
        >
          La reseña fue añadida con exito
        </Alert>
      </Snackbar>
    </Fragment>
  );
}
