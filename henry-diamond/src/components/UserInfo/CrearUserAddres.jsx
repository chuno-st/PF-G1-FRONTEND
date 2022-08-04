import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDatosUsuario } from "../../actions/actions";
import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react'
import Validate from "./Utils/Validate";
import {Box} from '@material-ui/core';
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'


export default function CrearUserAddres() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [data, setData] = useState([]);
    const [input, setInput] = useState({
        id: user.sub,
        name: "",
        lastName: "",
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
        lastName: "",
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
            if (!input.name || !input.lastName || !input.calle || !input.direccion || !input.codigo_postal || !input.provincia || !input.localidad || !input.telefono || !input.dni) {
                swal({
                    title: "Error",
                    text: "Por favor, completar las celdas correspondientes ",
                    icon: "error",
                    button: "Aceptar",
                  });
                
            }
            dispatch(createDatosUsuario(input));
            setInput({
                name: "",
                lastName: "",
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

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            // style={{
            //     display: "flex",
            //     flexDirection: "row",
            //     flexWrap: "wrap",
            //     alignContent: "center",
            //     justifyContent: "space-around",
            //     alignItems: "center",
            // }}
        >
                            <FormControl sx={{ m: 1, minWidth: 250 }}>
                                <TextField
                                    onChange={handleChange}
                                    error={error.name}
                                    label="Nombre"
                                    name="name"
                                    helperText={error.name}
                                    // type="text"
                                    InputLabelProps={{shrink: true}}

                                />
                            </FormControl>
                      

                            <FormControl sx={{ m: 1, minWidth: 250 }}>
                                <TextField
                                    onChange={handleChange}
                                    error={error.lastName}
                                    label="Apellido"
                                    name="lastName"
                                    helperText={error.lastName}
                                    type="text"
                                    InputLabelProps={{shrink: true}}

                                />
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.dni}
                                label="DNI"
                                name="dni"
                                helperText={error.dni}
                                type="number"
                                InputLabelProps={{shrink: true}}
                                inputProps={{
                                    maxLength: 8,
                                  }}

                            />
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.fecha_nacimiento}
                                label="Fecha de nacimiento"
                                name="fecha_nacimiento"
                                helperText={error.fecha_nacimiento}
                                type="date"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.telefono}
                                label="Teléfono"
                                name="telefono"
                                helperText={error.telefono}
                                type="number"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.calle}
                                label="Calle"
                                name="calle"
                                helperText={error.calle}
                                type="text"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.direccion}
                                label="Número"
                                name="direccion"
                                helperText={error.direccion}
                                type="number"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>
                    
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.piso}
                                label="Piso"
                                name="piso"
                                helperText={error.piso}
                                type="text"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.departamento}
                                label="Departamento"
                                name="departamento"
                                helperText={error.departamento}
                                type="text"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.codigo_postal}
                                label="CP"
                                name="codigo_postal"
                                helperText={error.codigo_postal}
                                type="number"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.provincia}
                                label="Provincia"
                                name="provincia"
                                helperText={error.provincia}
                                type="text"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <TextField
                                onChange={handleChange}
                                error={error.localidad}
                                label="Localidad"
                                name="localidad"
                                helperText={error.localidad}
                                type="text"
                                InputLabelProps={{shrink: true}}

                            />
                        </FormControl>

                        

                       

                        

                <Box>
                    <Button
                        variant="container"
                        color="primary"
                        textAlign="center"
                        onClick={handleCreate}   
                    >
                        ENVIAR
                    </Button>
                </Box>

        </div>
    );
}
