import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TableCell, TableRow, Button } from "@material-ui/core";
import { capitalizeLetter } from "../../../Utils/utils";
import EditIcon from "@mui/icons-material/Edit";
import { disableCategory } from "../../../actions/actions";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function CategoryForm(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const { elem } = props;

    const handleDisable = async () => {
        try {
            dispatch(disableCategory(elem.category_id, elem.state));
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TableRow key={elem.category_id}>
            <TableCell>{elem.category_id}</TableCell>
            <TableCell>{capitalizeLetter(elem.name)}</TableCell>
            <TableCell>{capitalizeLetter(elem.state.toString())}</TableCell>
            <TableCell>
                <Button>
                    <EditIcon />
                </Button>
            </TableCell>
            <TableCell>
                <Button key={elem.category_id} onClick={handleDisable}>
                    <FormControlLabel control={<Switch defaultChecked={elem.state} />} />
                </Button>
            </TableCell>
        </TableRow>
    );
}
