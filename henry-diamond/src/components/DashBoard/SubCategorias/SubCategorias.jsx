import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import Validate from "../Utils/Validate";

export default function SubCategoria() {
  
  const [input, setInput] = useState({
    nombre: "",
    subCategoria: "",
   });

  const [error, setError] = useState({
    nombre: "",
    subCategoria: "",
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

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(error).length === 0) {
        setInput({
            nombre: "",
            subCategoria: "",
      });
    } else {
      alert("Por favor completa todas las celdas");
    }
  }
  return (
        <Container>
            <h1>Estas serian las subCategoria</h1>
            <Grid container>
                <Grid item md={12} margin={1.5}>
                    <FormControl>
                        <TextField
                          onChange={handleChange}
                          error={error.nombre || ""}
                          // id="outlined-error-helper-text"
                          label="Nombre"
                          // defaultValue="Hello World"
                          helperText={handleChange}        
                        />
                    </FormControl>
                </Grid>     
                <Grid item md={12} margin={1.5}>
                    <FormControl>
                        <TextField
                          onChange={handleChange}
                          error={error.subCategoria || ""}
                          // id="outlined-error-helper-text"
                          label="subCategoria"
                          // defaultValue="Hello World"
                          helperText={handleChange}        
                        />
                    </FormControl>
                </Grid>         
            </Grid>
            <Button variant="container" color="primary">
                Crear subCategoria
            </Button>
        </Container>
    );
}