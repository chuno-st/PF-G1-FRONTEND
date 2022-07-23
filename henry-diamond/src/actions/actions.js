import {
    FILTER,
    GET_PRODUCT,
    ALL_ITEMS,
    ALL_CAREGORY,
    ALL_SUBCATEGORY, 
    SET_CATEGORY, 
    SET_SUBCATEGORY,
    ADD_USER,
    CHECK_ROLE,
    CREATE_PRODUCT,
    CREATE_CATEGORY,
    CREATE_SUBCATEGORY,
} from "./typeActions";
// import {getProduct} from '../../../../PF-G1-BACKEND/src/controllers/productControllers'
import axios from "axios";
const URL = "https://henry-diamonds.herokuapp.com/"


// const axios = require('axios')


export function getAllProduct(name){
    // console.log('estoy en la action'
    return async (dispatch) =>{
        let allProducts = await axios.get(`${URL}product?name=${name}`)
        console.log(allProducts)
        return dispatch({
            type: GET_PRODUCT,
            payload: allProducts.data
            
        })
    }
}

export function getAllItems(){
    return async (dispatch) =>{
        let allItems = await axios.get(`${URL}product`)
        return dispatch({
            type: ALL_ITEMS,
            payload: allItems.data
            
        })
    }
}

export const FilterBy = ({subcategory,price}) => {
    console.log(subcategory,price)
    return dispatch =>{
        axios.get(`${URL}product/subcategory?subcategory=${subcategory}&min=${price.min}&max=${price.max}`)
        .then(res => {
            dispatch({
                type: FILTER,
                payload: res.data
            })
        })
    }
    
        
    }


export function addUser(data){
    return async (dispatch) =>{
        let user = await axios.post(`${URL}adduser`, data)
    }
}

export function checkRole (id){
    return async (dispatch) =>{
        let Role = await axios.get(`${URL}adduser/checkrole?id=${id}`)
        return dispatch ({
            type: CHECK_ROLE,
            payload: Role.data
        }) 
    }
}

export const Category = ()=>{
    return dispatch => {
        axios
        .get (`${URL}category`)
        .then((res) => {
           
        dispatch ({
            type: ALL_CAREGORY,
            payload: res.data
        })        
        })
    }

}
export const SubCategory = ()=>{
    return dispatch => {
        axios
        .get (`${URL}subcategory`)
        .then((res) => {
         
        dispatch ({
            type: ALL_SUBCATEGORY,
            payload: res.data
        })        
        })
    }

}

export const SET_PAGINADO = (payload) => {
    console.log(payload)
    return dispatch => {
       dispatch ( {
            type: SET_PAGINADO,
            payload: payload
        })
    }
}

export const setCategory = (payload) => {
    return dispatch => {
        dispatch ({
            type: SET_CATEGORY,
            payload: payload
        })
    }
}

export const setSubCategory = (payload) => {
    return dispatch => {
        dispatch ({
            type: SET_SUBCATEGORY,
            payload: payload 
        })
    }
}

export const getProductById =  (id) => {
    return async dispatch => {
        const productID = await axios.get(`${URL}product/${id}`)
        dispatch({
            type: 'GET_PRODUCT_ID',
            payload: productID.data
        })
    }
}

export const findMatch = (category) => {
    return async dispatch => {
         let filterProducts = await axios.get (`${URL}product/category?category=${category}`)
         dispatch({
            type: 'FIND_MATCH',
            payload: filterProducts.data
         })
    }
}
export const addShoppingCart = (obj)=>{
    console.log(obj)
    return dispatch => {
        dispatch({
            type: 'ADD_CART',
            payload: obj
        })
    }
}

export const createProduct = (body) => {
    return async function (dispatch) {
      try {
        let response = await axios.post(`${URL}`, body);
        if (response.data.message) {
          alert(response.data.message);
        } else {
          dispatch({
            type: CREATE_PRODUCT,
            payload: response.data,
          });
          alert("El producto fue creado correctamente");
        }
      } catch (err) {
        console.log(err);
      }
    };
  };