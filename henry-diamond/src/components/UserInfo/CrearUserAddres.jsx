import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDatosUsuario } from "../../actions/actions";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";

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
            if (!input.name || !input.lastname || !input.calle || !input.direccion || !input.piso || !input.departamento || !input.codigo_postal || !input.provincia || !input.localidad || !input.telefono || !input.dni) {
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
                                error={error.lastname}
                                label="Apellido"
                                name="lastname"
                                helperText={error.lastname}
                            />
                        </FormControl>
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








                </Grid>

                






                <Box align="center">

                <Button
                    variant="container"
                    color="primary"
                    textAlign="center"
                    onClick={handleCreate}
                >
                    CARGAR INFORMACIÓN 
                </Button>
                </Box>

            </Container>
        </div>
    );
}
