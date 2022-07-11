import { FILTER, ALL_ITEMS, /*URL*/ } from "../actions/typeActions";
import {GET_PRODUCT} from '../actions/typeActions'

const inicialState = {
    allProducts: [],
};

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
          // console.log(payload, type, 'estoy en reducer')
            return { ...state, 
                   allProducts: payload };

        case FILTER:
          return {
            ...state,
            items: payload,
          }

        default:
            return state;
    }
};

export default reducer;
