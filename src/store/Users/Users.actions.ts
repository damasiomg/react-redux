import { User } from '../../types';

export const actions = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
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