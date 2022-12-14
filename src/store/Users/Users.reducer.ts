import { actions } from './Users.actions';

import { UserState } from '../../types';

const INITIAL_STATE = {
    currentUser: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    },
    isLoading: true
}

type Action = {
    type: keyof typeof actions,
    payload?: any
}

export default function usersReducer(state: UserState = INITIAL_STATE, action: Action){
    switch(action.type){
        case actions.SET_CURRENT_USER:
            return { ...state, currentUser: action.payload.currentUser }
        case actions.SET_LOADING_STATE:
            return { ...state, isLoading: action.payload.isLoading }
        default:
            return state
    }
}