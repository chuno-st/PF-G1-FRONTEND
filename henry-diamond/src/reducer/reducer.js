import { FILTER, ALL_ITEMS, ALL_CAREGORY, ALL_SUBCATEGORY } from "../actions/typeActions";

const inicialState = {
    items: [],
    category: [],
    subcategory: [],
};

const reducer = (state = inicialState, { type, payload }) => {
    switch (type) {
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
      


        default:
            return state;
    }
};

export default reducer;
