import { React, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Validate from "../Utils/Validate";
import { capitalizeLetter } from "../../../Utils/utils";
import { axios } from "axios";
import VistaPrevia from "./VistaPrevia";

const URL = "https://pf-g1-backend-production-3e79.up.railway.app/product/";

export default function CrearProducto() {
    const categorias = useSelector((state) => state.category);
    const subCategorias = useSelector((state) => state.subcategory);

    const [data, setData] = useState([]);

    const [input, setInput] = useState({
        id:"",
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
        categoria: "",
        subCategoria: "",
        material_id: "",
        //stock
    });

    const [error, setError] = useState({
        id:"",
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
        categoria: "",
        subCategoria: "",
        material_id: "",
        //stock
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

    const handleCreate = async () => {
        await axios.post(URL, input).then((response) => {
            setData(data.concat(response.data));
        });
    };


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
                <Button
                    variant="container"
                    color="primary"
                    textAlign="center"
                    onSubmit={handleCreate}
                >
                    Modificar Producto
                </Button>
            </Container>
        </div>
    );
}