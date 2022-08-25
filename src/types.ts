export interface Name {
    firstname: string,
    lastname: string
}

export interface User {
    id?: number,
    name: Name,
    email: string,
    password: string
}

export interface FormUser{
    id?: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string   
}

export interface UserState{
    currentUser: FormUser,
    isLoading: Boolean
}