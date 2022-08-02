import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';


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

export default function UserInfoModal() {
const { user, isAuthenticated, isLoading } = useAuth0();

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
          <h2 className="name">Hola {user.name}</h2>
          <Link to="/myaccount">Ingresa a tu cuenta: </Link>  
            

            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 20 }}>
          <h4>
          </h4>

        </Typography>
        </Box>
      </Modal>
    </div>
    );
}