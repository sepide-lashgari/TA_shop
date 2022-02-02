import { productDetailActionType } from "./productDetailActionType"
const INITIALSTATE = {
    product:{}
}

export const productDetailReducer = (state=INITIALSTATE,action) => {
    switch(action.type){
        case (productDetailActionType.FETCH_PRODUCT_DETAIL):
        return{
            ...state,
            product:action.payload
        }
        default : return state
    }
}

