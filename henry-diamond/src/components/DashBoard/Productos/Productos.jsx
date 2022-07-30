import { React, useState } from "react";
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
import  {useModal} from "../../Modal/Hooks/UseModal";
import ModalUpdate from "../../Modal/ModalUpdate";
import { useModalUpdate } from "../../Modal/Hooks/UseModalUpdate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { capitalizeLetter } from "../../../Utils/utils";
import CrearProducto from "../CrearProducto/CrearProducto";
import EditarProducto from "../EditarProducto/EditarProducto";
import {getProductById} from "../../../actions/actions"

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
    const dispatch = useDispatch();

    const productos = useSelector((state) => state.items);
    
    const [isOpenProducto1, openProducto1, closeProducto1] = useModal(false);
    const [isOpenProducto2, openProducto2, closeProducto2] = useModalUpdate(false);

    const handleOpenModalCrearProducto = () => {
        openProducto1();
        
    };

    const handleOpenModalEditarProducto = (product_id) => {
        dispatch(getProductById(product_id))
          openProducto2();
    
    };
  

    return (
        <ThemeProvider>
            <div style={{ height: 400, width: "100%" }}>
                <Button onClick={handleOpenModalCrearProducto}>Crear Producto</Button>
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
                                        <EditIcon onClick={()=>handleOpenModalEditarProducto(e.product_id)} />
                                        &nbsp;&nbsp;&nbsp;
                                        <DeleteIcon />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal isOpen={isOpenProducto1} closeModal={closeProducto1}>
                    <CrearProducto closeProducto={closeProducto1} />
                </Modal> 
                <ModalUpdate isOpen={isOpenProducto2} closeModal={closeProducto2}>
                    <EditarProducto closeProducto={closeProducto2} />
                </ModalUpdate>
                
                
            </div>
        </ThemeProvider>
    );
}
