import React, { useState} from "react";
import {useDispatch} from 'react-redux';
import { getAllProduct } from "../../actions/actions";
import Button from '@mui/material/Button';
// import TextField from '@material-ui/core/TextField';
// import './SearchBar.css'
import { Autocomplete } from "@mui/material";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("")
   
  
      const handleSearchBar = (e) => {
          setName(e.target.value)
          
      }
      
      // console.log(name)
  
      const handleSubmit =(e) => {
          e.preventDefault() // para que no refresque la pag si no hay info nueva, con el click.
          dispatch(getAllProduct(name))
          
      }
  
      return(
        //export default function FreeSolo() {
            //   return (
            //     <div style={{ width: 300 }}>
            //       <Autocomplete
            //         id="free-solo-demo"
            //         freeSolo
            //         options={top100Films.map((option) => option.title)}
            //         renderInput={(params) => (
            //           <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
            //         )}
            //       />
          <div style={{ width: 300 }}>
              <SearchBar id="searchImput" onChange={(e) => handleSearchBar(e)} />
              <Button variant="outlined" className="Search" type='submit' onClick={(e) => handleSubmit(e)}>Buscar</Button>
          </div>
      )
  };
