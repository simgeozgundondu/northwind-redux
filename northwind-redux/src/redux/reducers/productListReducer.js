import * as actionsTypes from "../actions/actionsTypes.js";
import initialState from "./initialState.js";

export default function productListReducer(state=initialState.products,action){
    switch (action.type) {
        case actionsTypes.GET_PRODUCT_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }
}