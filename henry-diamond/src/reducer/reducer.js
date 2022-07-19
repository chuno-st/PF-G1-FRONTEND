import { FILTER, ALL_ITEMS, ALL_CAREGORY, ALL_SUBCATEGORY, CHECK_ROLE } from "../actions/typeActions";
import {GET_PRODUCT} from '../actions/typeActions'
const inicialState = {
    allProducts: [],
    items: [],
    category: [],
    subcategory: [],
    role:false
};

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:

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
        case CHECK_ROLE:
          return {...state,
               role: payload
          }


        default:
            return state;
    }
};

export default reducer;
