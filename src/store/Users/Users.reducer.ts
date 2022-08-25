import { actions } from './Users.actions';

const INITIAL_STATE = {
    currentUser: {}
}

type Action = {
    type: keyof typeof actions,
    payload?: any
}

export default function usersReducer(state: any = INITIAL_STATE, action: Action){
    
    switch(action.type){
        case actions.SET_CURRENT_USER:
            return { ...state, currentUser: action.payload.currentUser }
        default:
            return state
    }
}