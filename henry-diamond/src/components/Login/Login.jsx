import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import PersonIcon from '@material-ui/icons/Person';


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button startIcon={<PersonIcon />} onClick={() => loginWithRedirect()}>Iniciar Sesión</Button>;
};