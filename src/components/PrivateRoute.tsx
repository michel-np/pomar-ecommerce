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
    console.log(user)       
        
    return <Route render={props =>(
        user ?
        <Page component={Component} /> : <Redirect to="/login" />
    )} />
    
    // return <>
    // <Route {...props} render={props => (
    //     user ? <Component/> : <Redirect to="/login"/>
    // )}/>
        {/* {user ? 
            <Component />
        :    
        <Redirect to="login" />
    }
    </Route> */}
    {/* {user 
        ? <Route {...props}/>
        : <Redirect to="/login"/>
    } */}
    // </>
}

export default PrivateRoute
