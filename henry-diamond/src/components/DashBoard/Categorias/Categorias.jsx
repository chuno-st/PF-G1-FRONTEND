import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category, createCategory } from "../../../actions/actions";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import {
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Button,
} from "@material-ui/core";
import { capitalizeLetter } from "../../../Utils/utils";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Validate from "../Utils/Validate";

export default function Categorias() {
    const dispatch = useDispatch();
    const categorias = useSelector((state) => state.category);
    console.log("estas son las categorias", categorias);

    useEffect(() => {
        dispatch(Category());
    }, []);

      const [input, setInput] = useState({
        nombre: "",
        categoria: "",
    });

    const [error, setError] = useState({
        nombre: "",
        categoria: "",
    });

    //__________________________________________________

    function handleChange(e) {
        e.preventDefault();
        setInput((prevState) => {
            const newState = {
                ...prevState,
                [e.target.name]: e.target.value,
            };
            setError(Validate(newState));
            return newState;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
       dispatch(createCategory());
    }

    return (
        <Container>
            <Grid container>
                <Grid item md={12} margin={1.5}>
                    <FormControl>
                        <TextField
                            error={error.category_id}
                            label="Nombre de la categoria"
                            name="category_id"
                            onChange={handleChange}
                            helperText={error.category_id}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="container" color="primary">
                Crear Categoria
            </Button>
            <br />
            <br />
            <br />

            <Grid container>
                <Grid item md={12} margin={1.5}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Imagen de categoria</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {categorias.map((e) => (
                                    <TableRow key={e.category_id}>
                                        <TableCell>{e.category_id}</TableCell>
                                        <TableCell>{capitalizeLetter(e.name)}</TableCell>
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
                </Grid>
            </Grid>
        </Container>
    );
}
