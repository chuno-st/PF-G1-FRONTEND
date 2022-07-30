import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #a1887f',
  boxShadow: 24,
  p: 4,
};

export default function HowToBuyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button fullWidth onClick={handleOpen}><h4>¿Cómo comprar?</h4></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
          <h4>¡Comprar en nuestra tienda online es muy fácil!
          <p>-Elegí el producto que querés comprar.</p>
          <p>-Haz click en el carrito asociado al producto y selecciona las unidades que desees comprar. </p>
          <p>-Haz click en el carrito que se encuentra en el margen superior derecho, puedes modificar la cantidad o eliminar productos del mismo.</p>
          <p>-Una vez seleccionados los productos que desea adquirir, apretar el botón de comprar. </p>

          </h4>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}