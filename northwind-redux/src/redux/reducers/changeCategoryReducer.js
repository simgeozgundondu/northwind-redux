import * as actionsTypes from "../actions/actionsTypes.js";
import initialState from "./initialState.js";

export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionsTypes.CHANGE_CATEGORY:
            return action.payload;
    
        default:
            return state;
    }
}
