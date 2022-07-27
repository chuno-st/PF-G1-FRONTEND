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
import {  useSelector } from "react-redux";
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

    const productos = useSelector((state) => state.items);
    console.log(productos);

    const [isOpenProducto, openProducto, closeProducto] = useModal(false);
     
    const handleOpenCloseCreate = () => {
        openProducto();
    };

    
    return (
        <ThemeProvider>
            <div style={{ height: 400, width: "100%" }}>
                <Button onClick={handleOpenCloseCreate}>Crear Producto</Button>
                <br />
                <br />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Imagen</TableCell>
                                <TableCell>Producto</TableCell>
                                <TableCell>Precio</TableCell>
                                <TableCell>Stock</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {productos.map((e) => (
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
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal isOpen={isOpenProducto} closeModal={closeProducto}>
                    <CrearProducto closeProducto={closeProducto}/>
                </Modal>
            </div>
        </ThemeProvider>
    );
}