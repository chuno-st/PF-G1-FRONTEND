import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDatosUsuario } from "../../actions/actions";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import Typography from '@material-ui/core/Typography';
import Validate from "./Utils/Validate";
import {Box} from '@material-ui/core';

// import { capitalizeLetter } from "./Utils/";

const { URL } = require("../../config");

export default function CrearUserAddres() {
    const dispatch = useDispatch();

   

 

    const [data, setData] = useState([]);

    const [input, setInput] = useState({
        name: "",
        lastname: "",
        calle: "",
        direccion: "",
        piso: "",
        departamento: "",
        codigo_postal: "",
        provincia: "",
        localidad: "",
        telefono: "",
        dni: "",
        fecha_nacimiento: "",
    });

    const [error, setError] = useState({
        name: "",
        lastname: "",
        calle: "",
        direccion: "",
        piso: "",
        departamento: "",
        codigo_postal: "",
        provincia: "",
        localidad: "",
        telefono: "",
        dni: "",
        fecha_nacimiento: "",
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
            if (!input.name || !input.lastname || !input.calle || !input.direccion || !input.codigo_postal || !input.provincia || !input.localidad || !input.telefono || !input.dni) {
                alert("Por favor completar las celdas correspondientes");
            }
            dispatch(createDatosUsuario(input));
            setInput({
                name: "",
                lastname: "",
                calle: "",
                direccion: "",
                piso: "",
                departamento: "",
                codigo_postal: "",
                provincia: "",
                localidad: "",
                telefono: "",
                dni: "",
                fecha_nacimiento: "",
            });
            alert("Los datos para el envío fueron cargados correctamente");
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
             <Container maxWidth="lg">
                <Typography component="div" 
                style={{ backgroundColor: '#e0e0e0', height: '100vh'}}>
            
                {/* <Grid container xs={12} ms={12} md={12} lg={12} xl={12}> */}
                {/* <Box item justifyContent="center"  border={1} borderColor='black'> */}

                    <Grid item md={12} lg={6} margin={1.5}>
                        <Box p={1}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <TextField
                                    onChange={handleChange}
                                    error={error.name}
                                    label="Nombre"
                                    name="name"
                                    helperText={error.name}
                                />
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item md={12} lg={6} margin={1.5}>
                        <Box p={1}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <TextField
                                    onChange={handleChange}
                                    error={error.lastname}
                                    label="Apellido"
                                    name="lastname"
                                    helperText={error.lastname}
                                />
                            </FormControl>
                        </Box>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.calle}
                                label="Calle"
                                name="calle"
                                helperText={error.calle}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.direccion}
                                label="Direccion"
                                name="direccion"
                                helperText={error.direccion}
                            />
                        </FormControl>
                    </Grid>
                    
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.piso}
                                label="Piso"
                                name="piso"
                                helperText={error.piso}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.departamento}
                                label="Departamento"
                                name="departamento"
                                helperText={error.departamento}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.codigo_postal}
                                label="CP"
                                name="codigo_postal"
                                helperText={error.codigo_postal}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.provincia}
                                label="Provincia"
                                name="provincia"
                                helperText={error.provincia}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.localidad}
                                label="Localidad"
                                name="localidad"
                                helperText={error.provincia}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.telefono}
                                label="Teléfono"
                                name="telefono"
                                helperText={error.provincia}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.dni}
                                label="DNI"
                                name="dni"
                                helperText={error.dni}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item md={12} margin={1.5}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.fecha_nacimiento}
                                label="Fecha de nacimiento"
                                name="fecha_nacimiento"
                                helperText={error.fecha_nacimiento}
                            />
                        </FormControl>
                    </Grid>
                    <Grid container direction='row-reverse' >
                        <Box
                        pr={10}
                        >
                    <Button
                    variant='outlined' 
                    color="secondary"
                    textAlign="center"
                    onClick={handleCreate}
                    
                    >
                        ENVIAR
                    </Button>
                    </Box>
                    </Grid>
                    {/* </Box> */}

                {/* </Grid> */}
                </Typography>
                
                

            </Container>
        </div>
    );
}
