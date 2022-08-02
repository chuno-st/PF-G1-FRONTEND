import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Button,
 } from "@material-ui/core";
import Modal from "../../Modal/Modal";
import { useModal } from "../../Modal/Hooks/UseModal";
import ModalUpdate from "../../Modal/ModalUpdate";
import { useModalUpdate } from "../../Modal/Hooks/UseModalUpdate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { capitalizeLetter } from "../../../Utils/utils";
import { getAllUsers } from "../../../actions/actions";
const { URL } = require("../../../config");

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
    // const dispatch = useDispatch();
    const usuarios = useSelector((state) => state.users);
    console.log("yo seria el usuario", usuarios);
    console.log("yo seria la foto del usuario", usuarios.picture);
    console.log("yo seria el rol del usuario", usuarios.isAdmin);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    const [input, setInput] = useState({
        id: "",
        name: "",
    });

    function handleChange(e) {
        e.preventDefault();
        setInput((prevState) => {
            const newState = {
                ...prevState,
                [e.target.name]: e.target.value,
            };
            return newState;
        });
    }

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
                                <TableRow key={e.id_user}>
                                    <TableCell>{e.id_user}</TableCell>
                                    <TableCell>
                                        <img
                                            src={e.picture}
                                            style={{ height: "35px", borderRadius: "5px" }}
                                        />
                                    </TableCell>
                                    <TableCell>{capitalizeLetter(e.userName)}</TableCell>
                                    <TableCell>{capitalizeLetter(e.email)}</TableCell>
                                    {/* <TableCell>{e.isAdmin.toString()}</TableCell> */}
                                    <TableCell>
                                        <Button>
                                        Usuario
                                   </Button>
                                   </TableCell>
                                    <TableCell>
                                        <EditIcon
                                        // onClick={() =>
                                        //     handleOpenModalEditarProducto(e.product_id)
                                        // }
                                        />
                                        &nbsp;&nbsp;&nbsp;
                                        <DeleteIcon />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* <Modal isOpen={isOpenProducto1} closeModal={closeProducto1}>
                    <CrearProducto closeProducto={closeProducto1} />
                </Modal>
                <ModalUpdate isOpen={isOpenProducto2} closeModal={closeProducto2}>
                    <EditarProducto closeProducto={closeProducto2} />
                </ModalUpdate> */}
                {/* <Button
                    variant="container"
                    color="primary"
                    textAlign="center"
                    onClick={handleCreate}
                >
                    Editar Usuario
                </Button> */}
            </div>
        </ThemeProvider>
    );
}
