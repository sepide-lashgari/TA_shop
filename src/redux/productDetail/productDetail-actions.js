import { productDetailActionType } from "./productDetailActionType"

export const fetchProductDetail = (data) => ({
    type:productDetailActionType.FETCH_PRODUCT_DETAIL,
    payload:data
})