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
  border: '6px solid #5d4037',
  boxShadow: 24,
  p: 4,
};

export default function HowToBuyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><h6>&#10145;</h6></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Cómo comprar en nuestra tienda online?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 20 }}>
          <h4>¡Comprar en nuestra tienda online es muy fácil!

          Pasos a seguir:

          -Paso 1: (texto1)

          -Paso 2: (texto2)
              .
              .
              .
          -Paso n: (texton)
          </h4>

        </Typography>
        </Box>
      </Modal>
    </div>
  );
}