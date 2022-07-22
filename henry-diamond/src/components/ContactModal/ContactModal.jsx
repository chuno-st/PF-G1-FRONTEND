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

export default function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button fullWidth onClick={handleOpen}><h4>Contacto</h4></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography>
        <h4>Podes contactarte con nosotros:
            <p>Por email: henrydiamons@gmail.com</p>
            <p>Por teléfono: +54-XXX-XXXXXXX</p>
            <p>Por nuestras redes sociales: ...</p>
        </h4>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}