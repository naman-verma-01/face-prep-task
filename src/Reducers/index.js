
import * as actionTypes from "./types";
import { combineReducers } from "redux";

const initial_user_state = {
    authStatus: false,
}

const user_reducer = (state = initial_user_state, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH_STATUS:
            return {
                ...state,
                authStatus: action.payload.authStatus,
            }
        
        default: return state
    }
}





const rootReducer = combineReducers({
    user: user_reducer
})

export default rootReducer