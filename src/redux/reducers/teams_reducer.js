import {GET_TEAMS} from "../types";

const initialState = {
    data: [],
    isLoading: true,
    isSuccess : false,
    isError : false,
}

export const teams_reducer = (state=initialState,action) => {
    switch (action.type){
        case GET_TEAMS :
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
