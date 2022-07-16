import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import PersonIcon from '@material-ui/icons/Person';


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

<<<<<<< HEAD
  return <Button startIcon={<PersonIcon />} onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>;
=======
  return <Button  startIcon={<PersonIcon />} onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>;
>>>>>>> 77fddef3687ff35f02d5e6844b55452961867b11
};