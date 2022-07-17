import React from 'react';
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
                    value="end"
                    control={<Checkbox />}
                    label="Marrón"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Gris"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Rosa"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Violeta"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Rojo"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Amarillo"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Blanco"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Azul"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Turqueza"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Verde"
                    labelPlacement="end"
                />
            </FormGroup>
    </FormControl>
  




  );
}
