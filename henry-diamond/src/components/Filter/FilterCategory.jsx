import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider'

export default function FilterCategory() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Por categoría</FormLabel>
        <FormGroup aria-label="position" row>
            <FormControlLabel
              value="piedras preciosas"
              control={<Checkbox />}
              label="Piedras"
              labelPlacement="end"
            />
            <FormControlLabel
              value="joyas"
              control={<Checkbox />}
              label="Joyas"
              labelPlacement="end"
            />
            <FormControlLabel
              value="otros"
              control={<Checkbox />}
              label="Otros"
              labelPlacement="end"
            />
          </FormGroup>
    </FormControl>
  




  );
}
