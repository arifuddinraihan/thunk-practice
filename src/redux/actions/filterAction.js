import { TOGGLE_BRANDS } from "../actionTypes/actionTypes"

export const toggleBrand = (brandName) => {
    return {
        type: TOGGLE_BRANDS,
        payload: brandName,
    }
}