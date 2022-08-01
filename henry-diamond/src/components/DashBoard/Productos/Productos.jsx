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

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import ProductForm from  "../productForm/productForm";

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
    const dispatch = useDispatch();

    const productos = useSelector((state) => state.itemsAdmin);

        
    const [isOpenProducto1, openProducto1, closeProducto1] = useModal(false);
   

    const handleOpenModalCrearProducto = () => {
        openProducto1();
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
                               <ProductForm elem={e} style={{ height: "100%", width: "100%" }}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal isOpen={isOpenProducto1} closeModal={closeProducto1}>
                    <CrearProducto closeProducto={closeProducto1} />
                </Modal> 
                {/* <ModalUpdate isOpen={isOpenProducto2} closeModal={closeProducto2}>
                    <EditarProducto closeProducto={closeProducto2} />
                </ModalUpdate> */}
                
                
            </div>
        </ThemeProvider>
    );
}
