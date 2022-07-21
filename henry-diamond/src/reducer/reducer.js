import { FILTER, ALL_ITEMS, ALL_CAREGORY, ALL_SUBCATEGORY, SET_PAGINADO, SET_CATEGORY, SET_SUBCATEGORY, CHECK_ROLE } from "../actions/typeActions";
import {GET_PRODUCT} from '../actions/typeActions'
const inicialState = {
    allProducts: [],
    items: [],
    filter: {},
    category: [],
    subcategory: [],
    paginado: {
      desde: 0,
      hasta: 12
    },
    product:{},
    matches: [],
    role:false,
    shoppingCart: []
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

        case SET_PAGINADO:
          return {
            ...state,
            paginado: payload
          }  
        case SET_CATEGORY:
          return { 
            ...state,
            category: payload
          }
          case SET_SUBCATEGORY:
          return { 
            ...state,
            category: payload
          }
          case 'GET_PRODUCT_ID':
            return {
              ...state,
              product: payload
            }
          case 'FIND_MATCH':
            return {
              ...state,
              matches: payload
            }  

        case CHECK_ROLE:
          return {...state,
               role: payload
          }

        case 'ADD_CART': { 
         return { 
          ...state, 
          shoppingCart: [...state.shoppingCart, payload] 
        }
       }


        default:
            return state;
    }
};
  
export default reducer;
