import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Modal, 
    Button,
    TextField,
} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import {capitalizeLetter} from "../../../Utils/utils"
import CrearProducto from "../CrearProducto/CrearProducto";


const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    }
  }));

 
export default function Productos() {
    // const styles = useStyles();

    const [modalInsert, setModalInsert] = useState(false);

    const productos = useSelector((state) => state.items);
    console.log(productos);

    // const handleModal = ()=>{
    //     setModalInsert(!modalInsert);
    // }

    return (
        <div style={{ height: 400, width: "100%" }}>
            <Button component={Link} to="/crearproducto">Crear Producto</Button>
            
            <br/>
            <br/>
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
                                <TableCell><img src={e.image} style={{height: "35px", borderRadius:"5px"}} /></TableCell>
                                <TableCell>{capitalizeLetter(e.name)}</TableCell>
                                <TableCell>{e.price}</TableCell>
                                <TableCell>{e.subCategory_id}</TableCell>
                                <TableCell>
                                    <EditIcon/>
                                    &nbsp;&nbsp;&nbsp;
                                    <DeleteIcon/>
                                </TableCell>
                            </TableRow>
                     
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <Modal>
             open={modalInsert}                           
             onClose={handleModal}
            </Modal> */}
        </div>
    );
}

// const columns = [
//     { field: "id", headerName: "ID", width: 110 },
//     {
//         field: "image",
//         headerName: "Imagen",
//         width: 150,
//         editable: true,
//     },
//     {
//         field: "name",
//         headerName: "Producto",
//         width: 200,
//         editable: true,
//     },
//     {
//         field: "price",
//         headerName: "Precio",
//         type: "number",
//         width: 150,
//         editable: true,
//     },
//     {
//         field: "stock",
//         headerName: "Stock",
//         type: "number",
//         width: 200,
//         editable: true,
//     },
// ];

// const rows = [
//     { id: 1, name: "anillo", price: 50, stock: 4, image: "img not found" },
//     { id: 2, name: "joya", price: 50, stock: 4, image: "img not found" },
//     { id: 3, name: "collar", price: 50, stock: 4, image: "img not found" },
//     { id: 4, name: "arito", price: 50, stock: 4, image: "img not found" },
//  ];

// return (
//     <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={5}
//             checkboxSelection
//             disableSelectionOnClick
//         />

//     </div>
// );
