import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SubCategory, FilterBy , getAllItems} from "../../actions/actions";
import { Button } from "@mui/material";

export default function FilterMaterial() {
    const dispatch = useDispatch();
    const subcategorys = useSelector(state => state.subcategory);
    const [filter, setFilter] = useState({
      price:'',
        subcategory: "",
    });
    const [price, setPrice] = useState('');
    const [subcategory, setSubcategory] = useState('');
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
   const arraycategories = subcategorys.map(e=> product.push({label:e.name, value:e.subCategory_id}));
   const handleChange = (e) => {
    console.log(filter.subcategory)
    dispatch(FilterBy(filter));
   }
   const handleReset = () => {
    setFilter({
      price:'',
        subcategory: "",
    });
    setPrice('');
    setSubcategory('');
    dispatch(getAllItems());
   }
   


  return (
    <>
    <Autocomplete
      
      id="combo-box-demo"
      options={arrayPrice}
      sx={{ width: 300 }}
      inputValue={price}
      onChange={(event, newValue) =>{
        if(!newValue) return;
        setFilter({...filter, price: newValue.value})
        setPrice(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="POR PRECIOS" />}
      />
      <br />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={product}
      sx={{ width: 300 }}
      value={subcategory}
      onChange={(event, newValue) =>{
        if(!newValue) return;
        setFilter({...filter, subcategory: newValue.value})
        setSubcategory(newValue.label)}}
      renderInput={(params) => <TextField {...params} label="POR PRODUCTOS" />}
      />
      <Button 
        fullWidth
        onClick={()=>{
        console.log('el boton anda')
        handleChange()
        }}>Filtrar</Button>
        <Button onClick={handleReset} >Limpiar filtros</Button>
      </>
  );
}
