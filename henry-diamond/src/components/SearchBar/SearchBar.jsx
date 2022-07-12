import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllProduct } from "../../actions/actions";
// import './SearchBar.css'

export default function SearcbBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("")
   
  
      const handleSearchBar = (e) => {
          setName(e.target.value)
          console.log(e.target.value, 'en searchBar')
      }
      
      // console.log(name)
  
      const handleSubmit =(e) => {
          e.preventDefault() // para que no refresque la pag si no hay info nueva, con el click.
          dispatch(getAllProduct(name))
          
      }
  
      return(
          <div className="containerSearch">
              <input className='searchImput' type='text' placeholder='Search your product...' onChange={(e) => handleSearchBar(e)} />
              <button className="Search" type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
          </div>
      )
  };
