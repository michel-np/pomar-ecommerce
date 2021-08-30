import React, {useContext} from 'react'
import {Route, RouteProps, Redirect} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthState'
import {getUser} from '../utils'
import Page from '../components/Page'

interface PrivateRouteProps extends RouteProps {
    component: React.FC;
    children?: never[]
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component,...props}) => {
    const user = getUser()
        
    return <Route render={props =>(
        user ?
        <Page component={Component} /> : <Redirect to="/login" />
    )} />
}

export default PrivateRoute
