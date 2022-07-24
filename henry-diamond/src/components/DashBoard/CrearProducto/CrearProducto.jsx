import { React, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Validate from "../Utils/Validate";
import { capitalizeLetter } from "../../../Utils/utils";

export default function CrearProducto() {
    const categorias = useSelector((state) => state.category);
    const subCategorias = useSelector((state) => state.subcategory);

    const [input, setInput] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        categoria: "",
        subCategoria: "",
        imagen: "",
    });

    const [error, setError] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        categoria: "",
        subCategoria: "",
        imagen: "",
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
        if (Object.keys(error).length === 0) {
            setInput({
                nombre: "",
                descripcion: "",
                precio: "",
                categoria: "",
                subCategoria: "",
                imagen: "",
            });
        } else {
            alert("Por favor completa todas las celdas");
        }
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <Container>
                <h1>Creacion del producto</h1>
                <Grid container>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.nombre || ""}
                                label="Nombre"
                                name="nombre"
                                helperText={error.nombre}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.descripcion || ""}
                                label="Descripcion"
                                name="descripcion"
                                helperText={error.descripcion}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.precio || ""}
                                label="Precio"
                                name="precio"
                                helperText={error.precio}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.imagen || ""}
                                label="Imagen"
                                name="imagen"
                                helperText={error.imagen}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ minWidth: 230 }}>
                            <InputLabel>Categoria</InputLabel>
                            <Select
                                error={error.categoria || ""}
                                label="Categorias"
                                name="categoria"
                                onChange={handleChange}
                                helperText={error.categoria}
                                >
                                {categorias.map((c) => {
                                    return (
                                        <MenuItem value={c.category_id}>
                                            {capitalizeLetter(c.name)}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ minWidth: 230 }}>
                            <InputLabel>Sub-Categoria</InputLabel>
                            <Select
                                error={error.subCategoria || ""}
                                label="Sub Categorias"
                                name="subCategorias"
                                onChange={handleChange}
                                helperText={error.subCategoria}
                            >
                                {subCategorias.map((c) => {
                                    return (
                                        <MenuItem value={c.subCategory_id}>
                                            {capitalizeLetter(c.name)}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button variant="container" color="primary" textAlign="center">
                    Crear Producto
                </Button>
            </Container>
        </div>
    );
}
