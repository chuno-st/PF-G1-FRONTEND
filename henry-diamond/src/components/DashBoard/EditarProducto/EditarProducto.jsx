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
import { getProductByIdAdmin, getAllItemsAdmin, editProduct } from "../../../actions/actions";
import { useNavigate } from "react-router-dom";


export default function EditarProducto(props) {

    const { product_id, isOpen, closeProduct } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const categorias = useSelector((state) => state.category);
    const subCategorias = useSelector((state) => state.subcategory);

    const productoEditado = useSelector((state) => state.productAdmin);
    console.log("producto editado", productoEditado)


    useEffect(() => {
        if (isOpen) {
            dispatch(getProductByIdAdmin(product_id));
        }
        if (productoEditado.product_id){
            setInput(productoEditado)
        }
    }, [isOpen, productoEditado]);
  
    const [input, setInput] = useState({
        product_id: "",
        name: "",
        description: "",
        price: "",
        category: "",
        subcategory: "",
        image: "",
        stock: "",
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
        dispatch(editProduct(input));
        closeProduct();
        setTimeout(function(){
            dispatch(getAllItemsAdmin())
        }, 1500);
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

    if (isOpen && productoEditado.product_id) {
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
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <TextField
                                    onChange={handleChange}
                                    error={error.stock}
                                    label="Stock"
                                    name="stock"
                                    helperText={error.stock}
                                    value={input.stock}
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
                                    value={productoEditado && productoEditado.category_id}
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
                                    value={productoEditado && productoEditado.subCategory_id}
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
