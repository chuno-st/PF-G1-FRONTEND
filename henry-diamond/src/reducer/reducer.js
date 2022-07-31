import {
    FILTER,
    ALL_ITEMS,
    ALL_CATEGORY,
    ALL_CATEGORY_ADMIN,
    ALL_SUBCATEGORY,
    ALL_USERS,
    CREATE_CATEGORY,
    CREATE_SUBCATEGORY,
    SET_PAGINADO,
    SET_CATEGORY,
    SET_SUBCATEGORY,
    CHECK_ROLE,
    CREATE_PRODUCT,
} from "../actions/typeActions";

import { GET_PRODUCT } from "../actions/typeActions";
const inicialState = {
    allProducts: [],
    items: [],
    users: [],
    filter: {},
    category: [],
    adminCategory: [],
    subcategory: [],
    paginado: {
        desde: 0,
        hasta: 12,
    },
    product: {},
    favorites: [],
    matches: [],
    role: "none",
    shoppingCart: [],
    Cart: "",
};

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
            return { ...state, items: payload };

        case ALL_ITEMS:
            return { ...state, items: payload };

        case FILTER:
            return {
                ...state,
                items: payload,
            };
        case ALL_CATEGORY:
            return { ...state, category: payload };

        case ALL_CATEGORY_ADMIN:
            return { ...state, adminCategory: payload };

        case ALL_SUBCATEGORY:
            return { ...state, subcategory: payload };

        case ALL_USERS:
            return { ...state, users: payload };

        case SET_PAGINADO:
            return {
                ...state,
                paginado: payload,
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: payload,
            };
        case SET_SUBCATEGORY:
            return {
                ...state,
                category: payload,
            };
        case "GET_PRODUCT_ID":
            return {
                ...state,
                product: payload,
            };
        case "FIND_MATCH":
            return {
                ...state,
                matches: payload,
            };

        case CHECK_ROLE:
            // console.log(payload, "estoy en reducer")
            return { ...state, role: payload };

        case "ADD_CART": {
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, payload],
            };
        }
        case CREATE_PRODUCT:
            return {
                ...state,
                items: state.items.concat(payload),
            };

        case CREATE_CATEGORY:
            return {
                ...state,
                category: state.category.concat(payload),
            };

        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subcategory: state.subcategory.concat(payload),
            };

        case "RESET_MATCH": {
            return { ...state, matches: [] };
        }

        case "POST_CART":
            return {
                ...state,
                Cart: payload,
            };
        case "CHECK_FAV":
            console.log("estoy en CHECK_FAV:", payload);
            return {
                ...state,
                favorites: payload,
            };

        default:
            return state;
    }
};

export default reducer;
