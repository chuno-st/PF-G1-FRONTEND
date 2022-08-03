import { React, useEffect, useState } from "react";
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Button,
} from "@material-ui/core";
import Select from "react-select";
import Modal from "../../Modal/Modal";
import { useModal } from "../../Modal/Hooks/UseModal";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllVentas } from "../../../actions/actions";
import { capitalizeLetter } from "../../../Utils/utils";
import ViewListIcon from "@mui/icons-material/ViewList";
import { ventasStatus } from "../../../actions/actions";
import VentasForm from "../VentasForm/VentasForm";

export default function Ventas() {
    const dispatch = useDispatch();
    const ventas = useSelector((state) => state.ventas);

    const [ventaItems, setVentaItems] = useState([]);

    // const [ventaID, setVentaId] = useState("");
    // const [estado, setEstado] = useState("");

    // const status = [
    //     { value: "dispatch", label: "Despachado" },
    //     { value: "ANULED", label: "Anulado" },
    //     { value: "approved", label: "Aprobado" },
    // ];

    useEffect((body) => {
        dispatch(getAllVentas());
        dispatch(ventasStatus(body));
    }, []);

    const [isOpenDetalle1, openDetalle1, closeDetalle1] = useModal(false);

    return (
        <ThemeProvider>
            <div style={{ height: 400, width: "100%" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Monto Total</TableCell>
                                <TableCell>Accion</TableCell>
                                <TableCell>Detalle</TableCell>
                                <TableCell>Guardar</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {ventas.map((elem) => (
                                <VentasForm key={elem.id} elem={elem} />                               
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Modal isOpen={isOpenDetalle1} closeModal={closeDetalle1}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Imagen</TableCell>
                                <TableCell>Descripcion</TableCell>
                                <TableCell>Cantidad</TableCell>
                                <TableCell>Precio</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {ventaItems?.map((e) => (
                                <TableRow>
                                    <TableCell>{e.id}</TableCell>
                                    <TableCell>{capitalizeLetter(e.title)}</TableCell>
                                    <TableCell>
                                        <img
                                            src={e.picture_url}
                                            style={{ height: "35px", borderRadius: "5px" }}
                                        />
                                    </TableCell>
                                    <TableCell>{e.description}</TableCell>
                                    <TableCell>{e.quantity}</TableCell>
                                    <TableCell>${e.unit_price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    ;
                </Modal>
                {/* <ModalUpdate isOpen={isOpenProducto2} closeModal={closeProducto2}>
                    <EditarProducto closeProducto={closeProducto2} />
                </ModalUpdate> */}
            </div>
        </ThemeProvider>
    );
}
