import { TOGGLE_BRANDS, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const initialState = {
    filters: {
        brands: [],
        stock: false,
    },
    keywords: ""
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BRANDS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brands: [...state.filters.brands, action.payload],
                }
            };
        case TOGGLE_STOCK:
            return {};
        default:
            return state;
    }
};