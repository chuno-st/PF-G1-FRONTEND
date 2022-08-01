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
    GET_USER,
    POST_USER_ADDRESS,
    UPDATE_USER_ADDRESS

} from "./typeActions";
//import config from "../config.js"
import axios from "axios";
import swal from 'sweetalert'

//import {URL} from "../index.js"
const {URL} = require('../config')
//import {URL} from "../index.js"




export function getAllProduct(name){
    // console.log('estoy en la action'
    return async (dispatch) =>{
        let allProducts = await axios.get(`${URL}product?name=${name}`)
        console.log(allProducts)
        if(allProducts.data.length === 0){
            swal({
                title: "Error",
                text: "Producto no encontrado",
                icon: "error",
                button: "Aceptar",
              });
            //alert('Producto no encontrado')
        }
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
         console.log(res)
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

export const findMatch = (subcategory) => {
    return async dispatch => {
         let filterProducts = await axios.get (`${URL}product/subCategory?subcategory=${subcategory}`)
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
    return async function () {
      try {
        await axios.post(`${URL}`, body);
        swal({
            title: "Error",
            text: "El producto fue creado correctamente",
            icon: "error",
            button: "Aceptar",
          });
        //alert("El producto fue creado correctamente");
        } catch (err) {
        console.log(err);
      }
    };
  };

export const resetMatch = () => {
    return dispatch => {
        dispatch({
            type: 'RESET_MATCH',
            payload: null
        })
    }
}

export const postCart = (carrito, user) => {
    return async dispatch => {
        console.log("Carrito=",carrito, "USER=", user)
         let link = await axios.post(`${URL}payment?id=${user}`, carrito)
         console.log(link)
         return dispatch({
            type: 'POST_CART',
            payload: link.data
        })
    }
}

export const addCart = () => {
    const miStorage = window.localStorage;
    let Productos = Object.values(miStorage)
    let objetos = Productos.map(producto => {return JSON.parse(producto)})
    let productos = objetos.filter(producto => producto.hasOwnProperty('product_id'))
    const cantidad = productos.reduce( (acc,producto) =>acc+producto.cantidad, 0)

    return dispatch => {
        return dispatch ({
            type: 'ADD_CART',
            payload: productos  
    })
    }
}

export const addFavorite = (sub, item ) => {
    return async () => {
        console.log(item)
        let addFavorite = await axios.post(`${URL}favs/${sub}`, item)
        console.log(addFavorite.data)

    }
}

export const checkFav = (sub, item ) => {
   return async dispatch =>{
    const chequeo = await axios.get(`${URL}favs/${sub}`)
    console.log(chequeo.data)
    
     return dispatch ({
        type: 'CHECK_FAV',
        payload: chequeo.data
     })
}}

export const deleteFavorite = (sub, item ) => {
    return async () => {
        console.log(item, sub)
        let addFavorite = await axios.put(`${URL}favs/${sub}`, item)
        console.log(addFavorite )

    }
}

//USER: 

export const getUser = ()=>{
    return async function(dispatch){
      return axios.get(`${URL}`, )
        .then(response=>{
          dispatch({type: GET_USER, payload: response.data})
        }).catch(err => console.log(err))
    }
  }
  
  export const postUserAddress = (data) => {
    return async function(dispatch){
      return axios.post(`${URL}`, data, )
      .then(response => { 
        console.log(response.data)
        dispatch({type: POST_USER_ADDRESS, payload: response.data})  
      }).catch(err => console.log(err))
    }
  }
  
  export const updateUserAddress = (id, data)=>{
    return async function(dispatch){
      return axios.put(`${URL}`, data ,  )
      .then(response =>{
        dispatch({type: UPDATE_USER_ADDRESS, payload: response.data})
        }).catch(err=> console.log(err))
    }
  }
  





