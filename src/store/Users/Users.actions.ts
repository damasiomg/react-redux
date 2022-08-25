import { User } from '../../types';

export const actions = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    SET_LOADING_STATE: 'SET_LOADING_STATE'
}

export function setUser(user: User | null){
    let userToForm = {};
    if(user?.id){
        userToForm = {
            id: user.id,
            firstname: user.name.firstname,
            lastname: user.name.lastname,
            email: user.email,
            password: user.password
        }
    }
    return { type: actions.SET_CURRENT_USER, payload: { currentUser: userToForm } }
}

export function setLoadingState(isLoading: boolean){
    return { type: actions.SET_LOADING_STATE, payload: { isLoading } }
}