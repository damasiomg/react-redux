export const actions = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export function setUser(item: any){
    return { type: actions.SET_CURRENT_USER, payload: { currentUser: item } }
}