import React, {useContext}  from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../contexts/AuthState'
import SearchBar from './home/SearchBar';
import { useHistory } from 'react-router';
import {faShoppingCart, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { ShoppingContext } from '../contexts/ShoppingState';

export interface NavbarProps {  
    className?:string      
    noHeader?:boolean
    backgroundColor?: string
}

const NavBar = ({className, noHeader, backgroundColor}: NavbarProps) => {
    const history = useHistory()
    const {user, logout} = useContext(AuthContext)
    const {shoppingCart} = useContext(ShoppingContext);


    return (
        <div className={className}>
            <span onClick={() => history.push('/')} className="store-name">Pomar Framework</span>
            {!noHeader && <div>
                <SearchBar/>
                {!!shoppingCart.length && <Link to="/shopping-cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>}
                {user
                    ?
                        <>
                        <div style={{color:'#ddd', fontSize:'12pt' }}>{`${user?.name}`}</div> 
                        <button className="sign-out-button" onClick={() => logout()}>
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                        </button>
                        </>
                    :
                    <Link to="/login">Login</Link>

                }
            </div>}
        </div>
    )
}

export default styled(NavBar)`
    width:90%;
    height:60px;
    background-color: ${props => props.backgroundColor || props.theme.main};
    position:sticky;
    top:0;
    display:flex; 
    justify-content:space-between;   
    padding:0 5%;
    align-items:center;
    .store-name {
        color:#ddd;
        font-size:20pt;

    }
    div {
        display:flex;
        align-items:center;
        gap:40px;
        a, a:visited, span {
            color:#ddd;            
            font-size:1.5em;
            text-decoration:none;
        }                    
    }
    .sign-out-button {
        border:0;
        background:none;
        color:#ddd;
        font-size:20pt;

    }
    



`
