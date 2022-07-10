import {
    FILTER,
    URL,
} from "./typeActions";
const axios = require('axios')

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
