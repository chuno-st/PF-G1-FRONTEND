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
import {getProductById, getAllItems} from "../../../actions/actions"


const URL = "https://pf-g1-backend-production-3e79.up.railway.app/";


export default function EditarProducto(product_id) {
    

    
    const dispatch = useDispatch();
 
   

    const todosLosProductos = useSelector((state) => state.items);
    const categorias = useSelector((state) => state.category);
    const subCategorias = useSelector((state) => state.subcategory);
    
    
    const productoEditado = useSelector((state) => state.product);

    useEffect(()=> {
        dispatch(getAllItems())
        dispatch(getProductById(product_id))
    }, [])

    const [input, setInput] = useState("");
    const [error, setError] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category_id: "",
        subCategory_id: "",
        material_id: "",
        //stock
    });


    const handleEdit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios({
            method: "put",
            url: `${URL}product/${product_id}`,
            data: {
              name: input.name !== "" ? input.name : productoEditado.name,
              description: input.description !== "" ? input.description : productoEditado.description,
              price: input.price !== "" ? input.price : productoEditado.price,
              image: input.image !== "" ? input.image : productoEditado.image,
              category_id: input.category_id !== "" ? input.category_id : productoEditado.category_id,
              subCategory_id : input.subCategory_id !== "" ? input.subCategory_id : productoEditado.subCategory_id,
              
            },
          });
          console.log(response);
          alert(response.data.message);
        } catch (err) {
          console.log(err);
        }
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
                </Grid>
                <Button variant="container" color="primary" textAlign="center" onClick={handleEdit}>
                    Editar Producto
                </Button>
            </Container>
        </div>
    );
}
