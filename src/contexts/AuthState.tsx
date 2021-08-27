import React, {createContext, ReactElement, useReducer} from 'react'
import { IAuthState, IAuthStateAction, User } from '../types'


type AuthStateProps =  {
    children: Function | ReactElement
}

const initialState : IAuthState = {
    user:undefined,
    login: () => Promise.resolve(),
    isLoggingIn: false,  
    dispatch: () => {},
    loginError:undefined
}

const reducer = (state: IAuthState, action: IAuthStateAction): IAuthState => {
    switch (action.type) {
        case 'IS_LOGGING_IN':
            return {
                ...state,
                isLoggingIn:true

            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                isLoggingIn:false
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: action.payload
            }
        case 'LOGGED_OUT':
            return {
                ...state,
                user:undefined
            }
        default:
            return state
    }
}

export const AuthContext = createContext(initialState)

const AuthState = ({children} : AuthStateProps) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (username:string, password:string) => new Promise<void>((resolve, reject) => {
        dispatch({type:'IS_LOGGING_IN'})
        if(username === 'teste' && password==='teste'){
            const userData: User = {
                token: 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ',
                name:'Usuário Teste'
            }
            dispatch({type:'LOGIN_SUCCESS', payload:userData})
            resolve()
        }
        dispatch({type:'LOGIN_ERROR', payload:{message:'Login ou senha inválido.'}})
        reject()
    })

    const logout = async () => new Promise((resolve, reject) => {
        dispatch({type:'LOGGED_OUT'})
    })


    const contextValue = {
        ...state,
        login,
        dispatch,
        logout

    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
