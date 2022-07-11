import {
    FILTER,
    URL,
    ALL_ITEMS,
    ALL_CAREGORY,
    ALL_SUBCATEGORY
} from "./typeActions";
const axios = require('axios')

export const FilterBy = ({category,subcategory,limite,desde}) => {
    return dispatch => {
        axios
        .get (`${URL}product/category?category=${category}&subcategory=${subcategory}&limite=${limite}&desde=${desde}`)
        .then((res) => {
            console.log(res.data)
        dispatch ({
            type: FILTER,
            payload: res.data
        })        
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
