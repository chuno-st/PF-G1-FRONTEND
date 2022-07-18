import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FilterMaterial() {
  return (
    <FormControl component="fieldset">
        <FormLabel component="legend">Por color</FormLabel>
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="1"
                    control={<Checkbox />}
                    label="Amatista"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="2"
                    control={<Checkbox />}
                    label="Jade"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="3"
                    control={<Checkbox />}
                    label="Lapizlasuli"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="4"
                    control={<Checkbox />}
                    label="Dioptasa"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="5"
                    control={<Checkbox />}
                    label="Rodocrosita"
                    labelPlacement="end"
                />
            </FormGroup>
    </FormControl>
  );
}
