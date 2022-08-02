import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CrearUserAddres from '../UserInfo/CrearUserAddres'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const styles = theme => ({
  modalStyle1:{
    position:'absolute',
    top:'10%',
    left:'10%',
    overflow:'scroll',
    height:'100%',
    display:'block'
  }
});

export default function ModalCreateInfoUser() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      
      <CrearUserAddres />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>Datos para el envio</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableScrollLock="false"
        className={classes.modalStyle1}
        
      >
        {body}
      </Modal>
    </div>
  );
}
