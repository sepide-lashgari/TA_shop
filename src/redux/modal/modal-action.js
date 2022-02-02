import { modalActiontype } from "./modal-Actiontype";

export const modalAction=(data)=>({
    type:modalActiontype.SHOW_MODAL,
    payload:data

})