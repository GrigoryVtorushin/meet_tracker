
export interface IUserAuth {
    email: string,
    password: string,
}

export interface IUser {
    email: string,
    id: string,
    role: string,
    is_banned: boolean
}