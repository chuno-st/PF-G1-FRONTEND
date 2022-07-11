import { FILTER, ALL_ITEMS, /*URL*/ } from "../actions/typeActions";

const inicialState = {
    items: [],
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

        default:
            return state;
    }
};

export default reducer;
