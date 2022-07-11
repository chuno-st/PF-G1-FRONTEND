// import React, {useEffect, useState} from "react";
// import {useSelector, useDispatch} from 'react-redux';
// import { getAllPoke } from '../../Redux/Actions';
// // import '../Styles/SearcbBar.css'


// export default function SearcbBar(){
//   const dispatch = useDispatch();
//   const [name, setName] = useState("")

//     const handleSearchBar = (e) => {
//         setName(e.target.value)
//     }
    
//     // console.log(name)

//     const handleSubmit =(e) => {
//         e.preventDefault() // para que no refresque la pag si no hay info nueva, con el click.
//         dispatch(getAllPoke(name))
//     }

//     return(
//         <div className="containerSearch">
//             <input className='searchImput' type='text' placeholder='Search pokes...' onChange={(e) => handleSearchBar(e)} />
//             <button className="pokeSearch" type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
//         </div>
//     )
// };