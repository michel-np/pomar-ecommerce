export interface IAuthState {
    user: User | undefined;
    login: (username: string, password: string) => Promise<void>
    isLoggingIn: boolean
    dispatch: (action: IAuthStateAction) => void
    loginError: LoginError | undefined

}

type LoginError = {
    message: string
}

export type User = {
    token: string
    name: string
}

export type IAuthStateAction =
    | { type: 'LOGIN' }
    | { type: 'LOGIN_ERROR', payload: LoginError | undefined }
    | { type: 'LOGIN_SUCCESS', payload: User | undefined }
    | { type: 'IS_LOGGING_IN' }
    | { type: 'LOGGED_OUT' }


export type Fruit = {
    id: number,
    name: string,
    unitPrice: number,
    pictureUrl: string
}