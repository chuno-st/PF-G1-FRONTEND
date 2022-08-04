import { useDispatch } from "react-redux";
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
import ViewListIcon from "@mui/icons-material/ViewList";
import { capitalizeLetter } from "../../../Utils/utils";
import { React, useState } from "react";
import Select from "react-select";
import { ventasStatus, getAllVentas } from "../../../actions/actions.js";

export default function VentasForm(props) {
    const { elem } = props;
    const dispatch = useDispatch();

    const [ventaItems, setVentaItems] = useState([]);

    const [ventaID, setVentaId] = useState("");

    const [estado, setEstado] = useState("");

    const status = [
        { value: "dispatch", label: "Despachado" },
        { value: "ANULED", label: "Anulado" },
        { value: "approved", label: "Aprobado" },
    ];

    const [isOpenDetalle1, openDetalle1, closeDetalle1] = useModal(false);

    const handleClick = () => {
        const body = {
            id: elem.id,
            status: estado,
        };

        dispatch(ventasStatus(body))

        setTimeout(() => dispatch(getAllVentas()),2000)
    };

    return (
            <TableRow key={elem.id}>
            <TableCell>{elem.id}</TableCell>
            <TableCell>{capitalizeLetter(elem.status)}</TableCell>
            <TableCell>{elem.Users[0].userName}</TableCell>
            <TableCell>${elem.montoTotal}</TableCell>
            <TableCell>
                <Select options={status} onChange={(e) => setEstado(e.value)} />
            </TableCell>
            <TableCell>
                <ViewListIcon
                    onClick={() => {
                        setVentaItems(elem.items);
                        setVentaId(elem.id);
                        openDetalle1();
                    }}
                />
            </TableCell>
            <TableCell>
                <Button onClick={handleClick}>Guardar</Button>
            </TableCell>
           
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
        </Modal>
      
        </TableRow>

    );
}
