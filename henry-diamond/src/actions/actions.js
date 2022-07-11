import React from "react";
import {
    FILTER,
    URL,
    GET_PRODUCT
} from "./typeActions";
// import {getProduct} from '../../../../PF-G1-BACKEND/src/controllers/productControllers'
import axios from "axios";


// const axios = require('axios')


export function getAllProduct(name){
    // console.log('estoy en la action')
    return async (dispatch) =>{
        let allProducts = await axios.get(`http://localhost:3001/product?name=${name}`)
        // console.log(payload, "? actionBack")
        return dispatch({
            type: GET_PRODUCT,
            payload: allProducts.data
            
        })
    }
}







export const FilterBy = (typeFilter) => {
    return dispatch => {
        axios
        .get (`${URL}`)
        .then((res) => {
        dispatch ({
            type: FILTER,
            payload: res.data
        })        
        })
    }
}
