import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
export const LogoutButton = () => {
  const { logout } = useAuth0();

<<<<<<< HEAD
  return <Button onClick={() => logout()}>Cerrar Sesion</Button>;
=======
  return <Button 
            onClick={() => logout()}
          >
          Cerrar Sesion
          </Button>;
>>>>>>> 77fddef3687ff35f02d5e6844b55452961867b11
};