import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SubCategory, FilterBy } from "../../actions/actions";
import { Button } from "@mui/material";
import {Box} from '@material-ui/core';


export default function FilterMaterial() {
    const dispatch = useDispatch();
    const subcategory = useSelector(state => state.subcategory);
    const [filter, setFilter] = useState({
      price:{min:0, max:100000},
        subcategory: "",
    });
    useEffect(() => {
        dispatch(SubCategory());
    }, []);
    const arrayPrice = [{
        label: "$0 - $1000",
        value:{min: 0, max: 1000} },{
        label:'$1000 - $2000',
        value:{min: 1000, max:2000}},{
        label:'$2000 - $3000',
        value:{min: 2000, max:3000}},{
        label:'$3000 - $4000',
        value:{min: 3000, max:4000}},{
        label:'$4000 - $5000',
        value: {min: 4000, max:5000}},{
        label:'$5000 - $6000',
        value:{min: 5000, max:6000}},{ 
        label:'Todos los precios',
        value:{min: 0, max: 1000000}}
        ];
   const product =[]
   const arraycategories = subcategory.map(e=> product.push({label:e.name, value:e.subCategory_id}));
   const handleChange = (e) => {
    console.log(filter.subcategory)
    dispatch(FilterBy(filter));
   }
   


  return (
    <>
    <Autocomplete
      
      id="combo-box-demo"
      options={arrayPrice}
      sx={{ width: 300 }}
      onChange={(event, newValue) =>{
        if(!newValue) return;
        setFilter({...filter, price: newValue.value})}}
      renderInput={(params) => <TextField {...params} label="POR PRECIOS" />}
      />
      <br />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={product}
      sx={{ width: 300 }}
      onChange={(event, newValue) =>{
        if(!newValue) return;
        setFilter({...filter, subcategory: newValue.value})}}
      renderInput={(params) => <TextField {...params} label="POR PRODUCTOS" />}
      />
            
      <Box align="center">
        <Button 
          fullWidth
          onClick={()=>{
          console.log('el boton anda')
          handleChange()
          }}>Filtrar</Button>
      </Box>

      </>
  );
}
