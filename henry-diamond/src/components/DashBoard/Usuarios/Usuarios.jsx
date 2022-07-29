// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { forwardRef } from "react";
// import Avatar from "react-avatar";
// import Grid from "@material-ui/core/Grid";

// import MaterialTable from "material-table";
// import AddBox from "@material-ui/icons/AddBox";
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import Check from "@material-ui/icons/Check";
// import ChevronLeft from "@material-ui/icons/ChevronLeft";
// import ChevronRight from "@material-ui/icons/ChevronRight";
// import Clear from "@material-ui/icons/Clear";
// import DeleteOutline from "@material-ui/icons/DeleteOutline";
// import Edit from "@material-ui/icons/Edit";
// import FilterList from "@material-ui/icons/FilterList";
// import FirstPage from "@material-ui/icons/FirstPage";
// import LastPage from "@material-ui/icons/LastPage";
// import Remove from "@material-ui/icons/Remove";
// import SaveAlt from "@material-ui/icons/SaveAlt";
// import Search from "@material-ui/icons/Search";
// import ViewColumn from "@material-ui/icons/ViewColumn";
// import axios from "axios";
// import Alert from "@material-ui/lab/Alert";

// const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => (
//     <ChevronRight {...props} ref={ref} />
//   )),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => (
//     <ChevronLeft {...props} ref={ref} />
//   )),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
// };

// const api = axios.create({
//   baseURL: `https://reqres.in/api`
// });

// function validateEmail(email) {
//   const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
//   return re.test(String(email).toLowerCase());
// }

// function App() {
//   var columns = [
//     { title: "id", field: "id", hidden: true },
//     {
//       title: "Avatar",
//       render: rowData => (
//         <Avatar
//           maxInitials={1}
//           size={40}
//           round={true}
//           name={rowData === undefined ? " " : rowData.first_name}
//         />
//       )
//     },
//     { title: "First name", field: "first_name" },
//     { title: "Last name", field: "last_name" },
//     { title: "email", field: "email" }
//   ];
//   const [data, setData] = useState([]); //table data

//   //for error handling
//   const [iserror, setIserror] = useState(false);
//   const [errorMessages, setErrorMessages] = useState([]);

//   useEffect(() => {
//     api
//       .get("/users")
//       .then(res => {
//         setData(res.data.data);
//       })
//       .catch(error => {
//         console.log("Error");
//       });
//   }, []);

//   const handleRowUpdate = (newData, oldData, resolve) => {
//     //validation
//     let errorList = [];
//     if (newData.first_name === "") {
//       errorList.push("Please enter first name");
//     }
//     if (newData.last_name === "") {
//       errorList.push("Please enter last name");
//     }
//     if (newData.email === "" || validateEmail(newData.email) === false) {
//       errorList.push("Please enter a valid email");
//     }

//     if (errorList.length < 1) {
//       api
//         .patch("/users/" + newData.id, newData)
//         .then(res => {
//           const dataUpdate = [...data];
//           const index = oldData.tableData.id;
//           dataUpdate[index] = newData;
//           setData([...dataUpdate]);
//           resolve();
//           setIserror(false);
//           setErrorMessages([]);
//         })
//         .catch(error => {
//           setErrorMessages(["Update failed! Server error"]);
//           setIserror(true);
//           resolve();
//         });
//     } else {
//       setErrorMessages(errorList);
//       setIserror(true);
//       resolve();
//     }
//   };

//   const handleRowAdd = (newData, resolve) => {
//     //validation
//     let errorList = [];
//     if (newData.first_name === undefined) {
//       errorList.push("Please enter first name");
//     }
//     if (newData.last_name === undefined) {
//       errorList.push("Please enter last name");
//     }
//     if (newData.email === undefined || validateEmail(newData.email) === false) {
//       errorList.push("Please enter a valid email");
//     }

//     if (errorList.length < 1) {
//       //no error
//       api
//         .post("/users", newData)
//         .then(res => {
//           let dataToAdd = [...data];
//           dataToAdd.push(newData);
//           setData(dataToAdd);
//           resolve();
//           setErrorMessages([]);
//           setIserror(false);
//         })
//         .catch(error => {
//           setErrorMessages(["Cannot add data. Server error!"]);
//           setIserror(true);
//           resolve();
//         });
//     } else {
//       setErrorMessages(errorList);
//       setIserror(true);
//       resolve();
//     }
//   };

//   const handleRowDelete = (oldData, resolve) => {
//     api
//       .delete("/users/" + oldData.id)
//       .then(res => {
//         const dataDelete = [...data];
//         const index = oldData.tableData.id;
//         dataDelete.splice(index, 1);
//         setData([...dataDelete]);
//         resolve();
//       })
//       .catch(error => {
//         setErrorMessages(["Delete failed! Server error"]);
//         setIserror(true);
//         resolve();
//       });
//   };

//   return (
//     <div className="App">
//       <Grid container spacing={1}>
        
//         <Grid item xs={12}>
//           <div>
//             {iserror && (
//               <Alert severity="error">
//                 {errorMessages.map((msg, i) => {
//                   return <div key={i}>{msg}</div>;
//                 })}
//               </Alert>
//             )}
//           </div>
//           <MaterialTable
//             title="User data from remote source"
//             columns={columns}
//             data={data}
//             icons={tableIcons}
//             editable={{
//               onRowUpdate: (newData, oldData) =>
//                 new Promise(resolve => {
//                   handleRowUpdate(newData, oldData, resolve);
//                 }),
//               onRowAdd: newData =>
//                 new Promise(resolve => {
//                   handleRowAdd(newData, resolve);
//                 }),
//               onRowDelete: oldData =>
//                 new Promise(resolve => {
//                   handleRowDelete(oldData, resolve);
//                 })
//             }}
//           />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default App;



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
