import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Category, createProduct, SubCategory } from "../../../actions/actions";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Validate from "../Utils/Validate";
import { capitalizeLetter } from "../../../Utils/utils";
import axios from "axios";
import VistaPrevia from "./VistaPrevia";
const { URL } = require("../../../config");

export default function CrearProducto() {
    const dispatch = useDispatch();

    const categorias = useSelector((state) => state.category);
    const subCategorias = useSelector((state) => state.subcategory);
 
    useEffect(() => {
        dispatch(Category());
        dispatch(SubCategory());
    }, []);

    const [data, setData] = useState([]);

    const [input, setInput] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category_id: "",
        subCategory_id: "",
        material_id: "",
        stock:"",

    });

    const [error, setError] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category_id: "",
        subCategory_id: "",
        material_id: "",
        stock:"",
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
            if (!input.name || !input.description || !input.price || !input.stock ) {
                alert("Por favor completar las celdas correspondientes");
            }
            dispatch(createProduct(input));
            setInput({
                name: "",
                description: "",
                price: "",
                image: "",
                category_id: "",
                subCategory_id: "",
                material_id: "",
                stock: "",
            });
            alert("La categoria se creo correctamente");
        } catch (error) {
            console.log(error);
        }
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
                                error={error.name}
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
                                error={error.description}
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
                                error={error.price}
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
                                error={error.image}
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
                                error={error.category_id}
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
                                error={error.subCategory_id}
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
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.stock}
                                label="Stock"
                                name="stock"
                                helperText={error.stock}
                            />
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
