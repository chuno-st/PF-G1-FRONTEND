import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FilterOrder() {
  return (
    <FormControl component="fieldset">
        <FormLabel component="legend">Por orden</FormLabel>
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="A - Z"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="end"
                    control={<Checkbox />}
                    label="Z - A"
                    labelPlacement="end"
                />
            </FormGroup>
    </FormControl>
  );
}
