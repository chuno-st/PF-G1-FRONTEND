import { React, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Table,TableContainer,TableHead,TableCell,TableBody,TableRow,Button,} from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import UserForm from "./UserForm";
import { getAllUsers } from "../../../actions/actions";



const useStyles = makeStyles((theme) => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

export default function Usuarios() {
  const dispatch = useDispatch();
  const styles = useStyles();
  const usuarios = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <ThemeProvider>
      <div style={{ height: 400, width: "100%" }}>
        <Button>Agregar Usuario</Button>
        <br />
        <br />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Imagen</TableCell>
                <TableCell>Nombre y Apellido</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {usuarios.map((e) => (
                <UserForm key={e.id_user} elem={e} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
}
