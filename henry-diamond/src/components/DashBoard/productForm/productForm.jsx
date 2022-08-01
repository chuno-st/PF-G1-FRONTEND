
import EditarProducto from "../EditarProducto/EditarProducto";
import { useModalUpdate } from "../../Modal/Hooks/UseModalUpdate";
import ModalUpdate from "../../Modal/ModalUpdate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { capitalizeLetter } from "../../../Utils/utils";
import {useDispatch} from 'react-redux'
import {getProductById, getAllItemsAdmin} from "../../../actions/actions"
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

export default function ProductoForm (props){
    const {elem} = props
    const dispatch = useDispatch();
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
        dispatch(getProductById(product_id))
          openProducto2();
    
    };


    return(
    <div style={{ height:"100%", width: "100%" }}>
    <TableRow key={elem.product_id}>

    <TableCell>{elem.product_id}</TableCell>
    <TableCell>
        <img
            src={elem.image}
            style={{ height: "35px", borderRadius: "5px" }}
        />
    </TableCell>
    <TableCell>{capitalizeLetter(elem.name)}</TableCell>
    <TableCell>{elem.price}</TableCell>
    <TableCell>{elem.stock}</TableCell>
    <TableCell>
        <EditIcon onClick={()=>handleOpenModalEditarProducto(elem.product_id)} />
        &nbsp;&nbsp;&nbsp;
        <DeleteIcon />
    </TableCell>
</TableRow>
<ModalUpdate isOpen={isOpenProducto2} closeModal={closeProducto2}>
                    <EditarProducto closeProducto={closeProducto2} />
    </ModalUpdate>

</div>



    )




}