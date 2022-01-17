import { productActiontype } from "./productActiontype";

const INITIALSTATE={
    product:[]
}
export const productReducer=(state=INITIALSTATE,action)=>{
    switch(action.type){
        case productActiontype.FILL_PRODUCT:
        return{
            ...state,
            product:action.payload
        }
    }

}