import React, {createContext, ReactElement, useReducer, useCallback} from 'react'
import { IAuthState, IAuthStateAction, User } from '../types'
import {getUser} from '../utils';

type AuthStateProps =  {
    children: Function | ReactElement
}

const initialState : IAuthState = {
    user:undefined,
    login: () => Promise.resolve(),
    logout:() => Promise.resolve(),
    isLoggingIn: false,  
    isLoggedIn:false,
    dispatch: () => {},
    loginError:undefined,
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
                isLoggingIn:false,
                isLoggedIn:true,
                loginError: undefined
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: action.payload
            }
        case 'LOGGED_OUT':
            return {
                ...state,
                user:undefined,
                isLoggedIn:false
            }
        default:
            return state
    }
}

export const AuthContext = createContext(initialState)

const AuthState = ({children} : AuthStateProps) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    React.useEffect(() => {
        const userData = getUser()
        if(userData){
            dispatch({type:'LOGIN_SUCCESS', payload:userData})
        }
    }, [])
    

    const login = async (username:string, password:string) => new Promise<void>((resolve, reject) => {
        dispatch({type:'IS_LOGGING_IN'})
        if(username === 'teste' && password==='teste'){
            const userData: User = {
                token: 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ',
                name:'Usuário Teste'
            }
            localStorage.setItem('user', JSON.stringify(userData))
            dispatch({type:'LOGIN_SUCCESS', payload:userData})
            resolve()
        }
        dispatch({type:'LOGIN_ERROR', payload:{message:'Login ou senha inválido.'}})
        reject()
    })

    const logout = useCallback(async () => new Promise<void>((resolve) => {        
        localStorage.removeItem('user')
        dispatch({type:'LOGGED_OUT'})
        resolve()
    }),[])

    


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
