import {searchActionType} from "./searchActionType";

const INTIIALSTATE = {
    search : []
}

export const searchReducer = (state=INTIIALSTATE,action) => {
    switch (action.type) {
        case (searchActionType.FETCH_SEARCH):return{
            ...state,
            search: action.payload
        }
        default : return state
    }
}

