import * as actionsTypes from "../actions/actionsTypes.js";
import initialState from "./initialState.js";

export default function changeCategory(state=initialState.categories,action){
    switch (action.type) {
        case actionsTypes.GET_CATEGORY_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }
}
