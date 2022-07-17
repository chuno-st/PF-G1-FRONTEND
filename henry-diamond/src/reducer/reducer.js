import { FILTER, ALL_ITEMS, ALL_CAREGORY, ALL_SUBCATEGORY, SET_PAGINADO } from "../actions/typeActions";
import {GET_PRODUCT} from '../actions/typeActions'
const inicialState = {
    allProducts: [],
    items: [],
    category: [],
    subcategory: [],
    paginado: {
      desde: 0,
      hasta: 12
    }
};

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
          // console.log(payload, type, 'estoy en reducer')
            return { ...state, 
                   items: payload };
        case ALL_ITEMS:
            return { ...state,
                   items: payload };

        case FILTER:
          return {
            ...state,
            items: payload,
          }
        case ALL_CAREGORY:
            return { ...state,
                    category: payload };

        case ALL_SUBCATEGORY:
            return { ...state,
                    subcategory: payload };

        case SET_PAGINADO:
          return {
            ...state,
            paginado: payload
          }          
      


        default:
            return state;
    }
};

export default reducer;
