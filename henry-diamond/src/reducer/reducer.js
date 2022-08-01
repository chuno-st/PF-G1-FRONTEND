import { FILTER, ALL_ITEMS, ALL_CAREGORY, ALL_SUBCATEGORY, SET_PAGINADO, SET_CATEGORY, SET_SUBCATEGORY, CHECK_ROLE, CREATE_PRODUCT, GET_USER_ADDRESS, POST_USER_ADDRESS, UPDATE_USER_ADDRESS } from "../actions/typeActions";
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
    favorites: [],
    matches: [],
    role:"none",
    shoppingCart: [],
    Cart:"",
    user: [],
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
          // console.log(payload, "estoy en reducer")
          return {...state,
               role: payload
          }

        case 'ADD_CART': { 
         return { 
          ...state, 
          shoppingCart: [...state.shoppingCart, payload]  
        }
       }
       case CREATE_PRODUCT:
       return {
        ...state,
        items: state.items.concat(payload),
        };
       case 'RESET_MATCH': {
        return {...state, matches:[]}
       }

       case 'POST_CART':
        return {
          ...state,
          Cart: payload
        }
        case 'CHECK_FAV':
          console.log('estoy en CHECK_FAV:', payload)
          return {
            ...state,
            favorites: payload
          }

        case 'GET_USER':
            return {
              ...state,
              user: payload
            }  

        case 'POST_USER_ADDRESS':
            return {
              ...state
            } 

        case 'UPDATE_USER_ADDRESS':
            return {
              ...state,
              user: payload
            }

      


        default:
            return state;
    }
};
  
export default reducer;
