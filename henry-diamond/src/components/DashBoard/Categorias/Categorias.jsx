import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCategory, createCategory, disableCategory } from "../../../actions/actions";
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
    const categorias = useSelector((state) => state.adminCategory);
    console.log("Las categorias del admin", categorias)

    useEffect(() => {
        dispatch(adminCategory());
    }, []);

      const [input, setInput] = useState({
        name: "",
      });

      const [state, setState] = useState({
        
        state: "",
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

    const handleDelete = async (id) => {
        try {
            dispatch(disableCategory(id))
            alert ("La categoria fue borrada correctamente")
        } catch (error) {
         console.log(error)  
        }
     
      };

    const handleCreate = async (e) => {
      e.preventDefault();
      try {
        if (!input.name){
            alert ("Por favor ingresar un nombre")
        } else {
          dispatch(createCategory(input))
              setInput({name : ""})
          alert ("La categoria se creo correctamente")
        }
      } catch (error) {
       console.log(error)  
      }
   
    };

    return (
        <Container>
            <Grid container>
                <Grid item md={12} margin={1.5}>
                    <FormControl >
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
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {categorias.map((e) => (
                                    <TableRow key={e.category_id}>
                                        <TableCell>{e.category_id}</TableCell>
                                        <TableCell>{capitalizeLetter(e.name)}</TableCell>
                                        <TableCell>{capitalizeLetter(e.state.toString())}</TableCell>
                                        <TableCell>
                                            <EditIcon />
                                            &nbsp;&nbsp;&nbsp;
                                            <DeleteIcon key={e.category_id} onClick={handleDelete}/>
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
