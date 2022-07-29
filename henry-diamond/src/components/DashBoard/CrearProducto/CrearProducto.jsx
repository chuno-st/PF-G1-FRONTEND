import { React, useState } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Validate from "../Utils/Validate";
import { capitalizeLetter } from "../../../Utils/utils";
import  axios from "axios";
import { useNavigate } from "react-router-dom";
import VistaPrevia from "./VistaPrevia";
//import config from "../../../config"
//import {URL} from "../../../index.js"
const {URL} = require('../../../config')
export default function CrearProducto() {
    const navigate = useNavigate()
    const categorias = useSelector((state) => state.category);
    const subCategorias = useSelector((state) => state.subcategory);

    const [data, setData] = useState([]);

    const [input, setInput] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category_id: "",
        subCategory_id: "",
        material_id: "",
        //stock
    });

    const [error, setError] = useState({
        name: "",
        description: "",
        price:"",
        image: "",
        category_id: "",
        subCategory_id: "",
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
        const response = await axios.post(`${URL}product`, input)
        console.log(response)
        return setData(data.concat(response));
        
    };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (Object.keys(error).length === 0) {
    //         setInput({
    //             nombre: "",
    //             descripcion: "",
    //             precio: "",
    //             imagen: "",
    //             categoria: "",
    //             subCategoria: "",
    //             material_id: "",
    //             //stock
    //         });
    //     } else {
    //         alert("Por favor completa todas las celdas");
    //     }
    // }

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
                                error={error.name }
                                label="Nombre"
                                name="name"
                                helperText={error.name}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.description }
                                label="Descripcion"
                                name="description"
                                helperText={error.description}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField 
                                onChange={handleChange}
                                error={error.price }
                                label="Precio"
                                name="price"
                                helperText={error.price}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.image }
                                label="Imagen"
                                name="image"
                                helperText={error.image}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ minWidth: 230 }}>
                            <InputLabel>Categoria</InputLabel>
                            <Select
                                error={error.category_id }
                                label="Categorias"
                                name="category_id"
                                onChange={handleChange}
                                helperText={error.category_id}
                              >
                                {categorias.map((c) => {
                                    return (
                                        <MenuItem value={c.category_id.toString()}>
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
                                error={error.subCategory_id }
                                label="Sub Categorias"
                                name="subCategory_id"
                                onChange={handleChange}
                                helperText={error.subCategory_id}
                                >
                                {subCategorias.map((c) => {
                                    return (
                                        <MenuItem value={c.subCategory_id.toString()}>
                                            {capitalizeLetter(c.name)}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                {/* <VistaPrevia
                    nombre={input.name}
                    descripcion={input.description}
                    precio={input.price}
                    imagen={input.image}
                    categoria={input.category}
                    subcategoria={input.subCategory}
                    material_id={input.material_id}
                    //stock
                /> */}
                <Button
                    variant="container"
                    color="primary"
                    textAlign="center"
                    onClick={handleCreate}
                >
                    Crear Producto
                </Button>
            </Container>
        </div>
    );
}
