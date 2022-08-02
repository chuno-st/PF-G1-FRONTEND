import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCategory, createCategory} from "../../../actions/actions";
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
import CategoryForm from "../CategoryForm/CategoryForm";

export default function Categorias() {
    const dispatch = useDispatch();
    const categorias = useSelector((state) => state.adminCategory);

    const [input, setInput] = useState({
        name: "",
    });

    const [error, setError] = useState({
        nombre: "",
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

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            if (!input.name) {
                alert("Por favor ingresar un nombre");
            } else {
                dispatch(createCategory(input));
                setInput({ name: "" });
                alert("La categoria se creo correctamente");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Grid container>
                <Grid item md={12} margin={1.5}>
                    <FormControl>
                        <TextField
                            error={error.nombre}
                            label="Nombre de la categoria"
                            onChange={handleChange}
                            name="name"
                            value={input.name}
                            helperText={error.nombre}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="container" color="secundary" onClick={handleCreate}>
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
                                    <TableCell>Estado</TableCell>
                                    <TableCell>Editar</TableCell>
                                    <TableCell>Habilitar/Deshabilitar</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {categorias.map((elem) => (
                                    <CategoryForm
                                        elem = {elem} 
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
}
