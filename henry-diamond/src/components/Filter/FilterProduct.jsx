import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider'
import { setCategory, setSubCategory  } from "../../actions/actions";


export default function FilterProduct() {

const dispatch = useDispatch();
const items = useSelector(state => state.items);
const [filtrados, setFiltrados] = useState({category:'', subcategory:''});




const handleChange = (e) => {
//setFiltrados({...filtrados, [e.target.label]: e.target.value})
console.log(e)
}

  return (
    <div> 
    <FormControl component="fieldset" onChange={handleChange}>
      <FormLabel component="legend">Por categoría</FormLabel>
        <FormGroup aria-label="position" row>
            <FormControlLabel
              value="1"
              control={<Checkbox />}
              label="Piedras"
              labelPlacement="end"

            />
            <FormControlLabel
              value="2"
              control={<Checkbox />}
              label="Joyas"
              labelPlacement="end"
            />
            <FormControlLabel
              value="3"
              control={<Checkbox />}
              label="Otros"
              labelPlacement="end"
            />
          </FormGroup>

      <FormLabel component="legend">Por sub-categoría</FormLabel>
        <FormGroup aria-label="position" row>
            <FormControlLabel
              value="1"
              control={<Checkbox />}
              label="Dijes"
              labelPlacement="end"
            />
            <FormControlLabel
              value="2"
              control={<Checkbox />}
              label="Anillos"
              labelPlacement="end"
            />
             <FormControlLabel
              value="3"
              control={<Checkbox />}
              label="Pulseras"
              labelPlacement="end"
            />
            <FormControlLabel
              value="4"
              control={<Checkbox />}
              label="Péndulos"
              labelPlacement="end"
            />
            <FormControlLabel
              value="5"
              control={<Checkbox />}
              label="Llaveros"
              labelPlacement="end"
            />
            <FormControlLabel
              value="6"
              control={<Checkbox />}
              label="Aros"
              labelPlacement="end"
            />
      </FormGroup>
    </FormControl>
        {/* <button onClick={}>SetFiltrado</button> */}
  </div>
       
  );
}
