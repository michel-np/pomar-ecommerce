import React, {useContext} from 'react'
import {Route, RouteProps, Redirect} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthState'

const PrivateRoute = (props: RouteProps) => {
    const {user} = useContext(AuthContext)
    
    const renderRoute = () => {
        if(user){
            return <Route {...props}/>
        }
        return <Redirect to="/login"/>
    }
    return <>
    {renderRoute()}    
    </>
}

export default PrivateRoute
