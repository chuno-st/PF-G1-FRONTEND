import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FilterCategory() {
  return (
    <FormControl component="fieldset">
        <FormLabel component="legend">Por color</FormLabel>
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="marron"
                    control={<Checkbox />}
                    label="Marrón"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="gris"
                    control={<Checkbox />}
                    label="Gris"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="rosa"
                    control={<Checkbox />}
                    label="Rosa"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="violeta"
                    control={<Checkbox />}
                    label="Violeta"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="rojo"
                    control={<Checkbox />}
                    label="Rojo"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="amarillo"
                    control={<Checkbox />}
                    label="Amarillo"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="blanco"
                    control={<Checkbox />}
                    label="Blanco"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="azul"
                    control={<Checkbox />}
                    label="Azul"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="turqueza"
                    control={<Checkbox />}
                    label="Turqueza"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="verde"
                    control={<Checkbox />}
                    label="Verde"
                    labelPlacement="end"
                />
            </FormGroup>
    </FormControl>
  




  );
}
