import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function FilterSubCategory() {
  return (
    <FormControl component="fieldset">
            <FormLabel component="legend">Por sub-categoría</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="dije"
                        control={<Checkbox />}
                        label="Dijes"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="pulsera"
                        control={<Checkbox />}
                        label="Pulseras"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="anillo"
                        control={<Checkbox />}
                        label="Anillos"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="aros"
                        control={<Checkbox />}
                        label="Aros"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="pendulo"
                        control={<Checkbox />}
                        label="Péndulos"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="llavero"
                        control={<Checkbox />}
                        label="Llaveros"
                        labelPlacement="end"
                    />
      </FormGroup>
    </FormControl>
  );
}
