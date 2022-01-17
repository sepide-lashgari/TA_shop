import { productActiontype } from "./productActiontype";

export const fillProduct=(data)=>({
    type:productActiontype.FILL_PRODUCT,
    payload:data
})