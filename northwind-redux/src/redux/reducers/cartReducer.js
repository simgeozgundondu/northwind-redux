import * as actionsTypes from "../actions/actionsTypes.js";
import initialState from "./initialState.js";

export default function cartReducer(state=initialState.cart,action){
    switch(action.type) {
        case actionsTypes.ADD_TO_CART:
            var addedItem=state.find(c =>c.product.id===action.payload.product.id);
            if(addedItem){
                var newState=state.map(cartItem => {
                    if(cartItem.product.id===action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity})
                    }
                    return cartItem;
                })
                return newState;
                
            }else{
                return [...state,{...action.payload}]//state in kopyasını al ve state e o actionın payloadını ekle,reduxta push işlemi yapmıyoruz
            }

        case actionsTypes.REMOVE_FROM_CART:
            const newState2=state.filter(cartItem=>cartItem.product.id!==action.payload.id);
            return newState2;
    
        default:
            return state;
    }
}



  