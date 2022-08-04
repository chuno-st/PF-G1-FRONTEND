import EditarProducto from "../EditarProducto/EditarProducto";
import { useModalUpdate } from "../../Modal/Hooks/UseModalUpdate";
import ModalUpdate from "../../Modal/ModalUpdate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { capitalizeLetter } from "../../../Utils/utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductById, getAllItemsAdmin, disableItemsAdmin } from "../../../actions/actions";
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Button,
} from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function ProductoForm(props) {

    const { elem } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const useStyles = makeStyles((theme) => ({
        iconos: {
            cursor: "pointer",
        },
        inputMaterial: {
            width: "100%",
        },
    }));

    const [isOpenProducto2, openProducto2, closeProducto2] = useModalUpdate(false);

    const handleOpenModalEditarProducto = (product_id) => {
        // dispatch(getProductById(product_id));
        openProducto2();
    };

    const handleDisable = async () => {
        try {
            dispatch(disableItemsAdmin(elem.product_id, elem.state));
            // navigate(0);
            setTimeout(function(){
                dispatch(getAllItemsAdmin())
            }, 1500);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TableRow key={elem.product_id} style={{ height: "100%", width: "100%" }}>
            <TableCell>{elem.product_id}</TableCell>
            <TableCell>
                <img src={elem.image} style={{ height: "35px", borderRadius: "5px" }} />
            </TableCell>
            <TableCell>{capitalizeLetter(elem.name)}</TableCell>
            <TableCell>${elem.price}</TableCell>
            <TableCell>{elem.stock}</TableCell>
            <TableCell>{elem.state.toString()}</TableCell>
            <TableCell>
                <EditIcon onClick={() => handleOpenModalEditarProducto(elem.product_id)} />
            </TableCell>
            <TableCell>
            <Button key={elem.product_id} onClick={handleDisable}>
                    
                 <FormControlLabel control={<Switch defaultChecked={elem.stock !== 0 ? elem.state : elem.state = false} />} />

                    
                </Button>
            </TableCell>
            <ModalUpdate isOpen={isOpenProducto2} closeModal={closeProducto2}>
                <EditarProducto closeProduct={closeProducto2} isOpen={isOpenProducto2}  product_id={elem.product_id}/>
            </ModalUpdate>
        </TableRow>
    );
}
