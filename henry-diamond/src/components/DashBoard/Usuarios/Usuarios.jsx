import { React } from "react";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { capitalizeLetter } from "../../../Utils/utils";
import CrearProducto from "../CrearProducto/CrearProducto";

const useStyles = makeStyles((theme) => ({
    iconos: {
        cursor: "pointer",
    },
    inputMaterial: {
        width: "100%",
    },
}));

export default function Productos() {
    const styles = useStyles();

    // const productos = useSelector((state) => state.items);
    // console.log(productos);

    const [isOpenProducto, openProducto, closeProducto] = useModal(false);

    const handleOpenCloseCreate = () => {
        openProducto();
    };

    return (
        <ThemeProvider>
            <div style={{ height: 400, width: "100%" }}>
                <Button onClick={handleOpenCloseCreate}>Crear Usuario</Button>
                <br />
                <br />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Imagen</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellido</TableCell>
                                <TableCell>Rol</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell>01</TableCell>
                                <TableCell>Img not found</TableCell>
                                <TableCell>Francisco</TableCell>
                                <TableCell>Siri</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>02</TableCell>
                                <TableCell>Img not found</TableCell>
                                <TableCell>Sebastian</TableCell>
                                <TableCell>Engelstajn</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>03</TableCell>
                                <TableCell>Img not found</TableCell>
                                <TableCell>Bruno</TableCell>
                                <TableCell>Stauber</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>04</TableCell>
                                <TableCell>Img not found</TableCell>
                                <TableCell>Lautaro</TableCell>
                                <TableCell>Ferreyra</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>05</TableCell>
                                <TableCell>Img not found</TableCell>
                                <TableCell>Agustin</TableCell>
                                <TableCell>Lescano</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>05</TableCell>
                                <TableCell>Img not found</TableCell>
                                <TableCell>Carolina</TableCell>
                                <TableCell>Andrada</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>05</TableCell>
                                <TableCell>Img not found</TableCell>
                                <TableCell>Maria Soledad</TableCell>
                                <TableCell>Petrino</TableCell>
                                <TableCell>Admin</TableCell>
                            </TableRow>

                            {/* {productos.map((e) => (
                                <TableRow key={e.product_id}>
                                    <TableCell>{e.product_id}</TableCell>
                                    <TableCell>
                                        <img
                                            src={e.image}
                                            style={{ height: "35px", borderRadius: "5px" }}
                                        />
                                    </TableCell>
                                    <TableCell>{capitalizeLetter(e.name)}</TableCell>
                                    <TableCell>{e.price}</TableCell>
                                    <TableCell>{e.subCategory_id}</TableCell>
                                    <TableCell>
                                        <EditIcon />
                                        &nbsp;&nbsp;&nbsp;
                                        <DeleteIcon />
                                    </TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal isOpen={isOpenProducto} closeModal={closeProducto}>
                    <CrearProducto closeProducto={closeProducto} />
                </Modal>
            </div>
        </ThemeProvider>
    );
}
