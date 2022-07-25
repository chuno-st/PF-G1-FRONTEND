import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FilterPrice() {
  return (
    <FormControl component="fieldset">
        <FormLabel component="legend">Por precios</FormLabel>
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="$1000 - $2000"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="$2000 - $3000"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="$3000 - $4000"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="$4000 - $5000"
                    labelPlacement="end"
                />
            </FormGroup>
    </FormControl>
        );
    }
