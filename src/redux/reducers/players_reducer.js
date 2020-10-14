import {GET_PLAYERS} from "../types";

const initialState = {
    data: [],
    isLoading: true,
    isSuccess : false,
    isError : false,
}


export const players_reducer = (state=initialState,action) => {
    switch (action.type){
        case GET_PLAYERS :
            return {
                ...state,
                data:action.payload,
                isLoading : false,
                isSuccess: true,
                isError: false,
            }
        default:
            return state;
    }
}
