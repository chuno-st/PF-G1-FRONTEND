import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Validate from "../Utils/Validate";
import { capitalizeLetter } from "../../../Utils/utils";
import axios from "axios";
import { getProductById, getAllItemsAdmin, editProduct } from "../../../actions/actions";

// const URL = "https://pf-g1-backend-production-3e79.up.railway.app/";

export default function EditarProducto(props) {

    const { product_id, isOpen, closeProduct } = props;

    const dispatch = useDispatch();

    const categorias = useSelector((state) => state.category);
    const subCategorias = useSelector((state) => state.subcategory);

    const productoEditado = useSelector((state) => state.product);
    console.log("producto editado", productoEditado)


    useEffect(() => {
        if (isOpen) {
            dispatch(getProductById(product_id));
        }
        if (productoEditado.product_id){
            setInput(productoEditado)
        }
    }, [isOpen, productoEditado.product_id]);

    const [input, setInput] = useState({
        id: productoEditado.product_id,
        name: productoEditado.name,
        description: productoEditado.description,
        price: productoEditado.price,
        image: productoEditado.image,
        category_id: productoEditado.category_id,
        subCategory_id: productoEditado.subCategory_id,
        material_id: productoEditado.material_id,
        stock: productoEditado.stock,
    });
    
    const [error, setError] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category_id: "",
        subCategory_id: "",
        material_id: "",
        stock: "",
    });

    const handleEdit = async (e) => {
        e.preventDefault();
        console.log("que es unput en el HandleEdit", input)
        dispatch(editProduct(input));
    };

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

    if (isOpen) {
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
                                    value={input.name}
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
                                    value={input.description}
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
                                    value={input.price}
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
                                    value={input.image}
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
                                    value={input.category_id}
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
                                    value={input.subCategory_id}
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
                    <Button
                        variant="container"
                        color="primary"
                        textAlign="center"
                        onClick={handleEdit}
                    >
                        Editar Producto
                    </Button>
                </Container>
            </div>
        );
    } else {
        return null;
    }
}
