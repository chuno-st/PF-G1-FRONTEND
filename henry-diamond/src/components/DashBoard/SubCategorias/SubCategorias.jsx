import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminSubCategory, createSubCategory } from "../../../actions/actions";
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
import SubCategoryForm from "../SubCategoryForm/subCategoryForm";

export default function SubCategorias() {
    const dispatch = useDispatch();
    const subCategorias = useSelector((state) => state.adminSubCategory);
    
     const [input, setInput] = useState({
        name: "",
    });

    // const [state, setState] = useState({
    //     state: "",
    // });

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
                dispatch(createSubCategory(input));
                setInput({ name: "" });
                alert("La subCategoria se creo correctamente");
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
                            label="Nombre de la subCategoria"
                            onChange={handleChange}
                            name="name"
                            value={input.name}
                            helperText={error.nombre}
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="container" color="secundary" onClick={handleCreate}>
                Crear Sub-Categoria
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
                                    <TableCell>Imagen de SubCategoria</TableCell>
                                    <TableCell>Estado</TableCell>
                                    <TableCell>Editar</TableCell>
                                    <TableCell>Habilitar/Deshabilitar</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {subCategorias.map((elem) => (
                                    <SubCategoryForm
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
