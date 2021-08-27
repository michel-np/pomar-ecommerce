import React, {useState, useContext, SyntheticEvent, InputHTMLAttributes} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {AuthContext} from '../../contexts/AuthState'
import TextField from '../general-purposes/TextField'




interface Props {
    className?:string
}

const Login = ({className}: Props) => {
    const [username, setUserName] = useState("")
    const [password, setPassWord] = useState("")    
    const location = useLocation()
    const history = useHistory()
    const search = new URLSearchParams(location.search)
    const {
        login,
        isLoggingIn,
        loginError
    } = useContext(AuthContext)


    const handleUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange =  (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassWord(e.target.value)
    }
    const handleLogin = async (e:SyntheticEvent) => {
        console.log(username, password)
        e.preventDefault()
        await login(username, password)
            .then(() => history.push('/'))
            .catch(e => console.error(e))
    }


    return (
        <div className={className}>
            <form onSubmit={handleLogin}>
                <h1>
                    {
                    search.get("redirected")
                    ? "Faça login para continuar"
                    : "Faça login! =)"
                    }
                </h1>
                {loginError && (
                    <div className="error-container">
                        {loginError.message}
                    </div>           
                )
                }
                <TextField
                    onChange={handleUsernameChange}
                    value={username}                    
                    required={true}
                    placeholder="Username"

                />
                <TextField
                    onChange={handlePasswordChange}                    
                    value={password}
                    placeholder="Senha"
                    type="password"
                    required
                />                

                <button type="submit">ENTRAR</button>

            </form>
        </div>
    )
}

export default styled(Login)`
    form{
        width:70%;
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5%;        
        button {
            width:100%;
            margin-top:30px;
            height:45px;
            background-color: #ddd;
            font-size:16pt;
            border:0;
            color:#3b00a1;
            &:active {
                box-shadow:inset 3px 3px 2px gray;
            }
        }
        
    }
    border-radius:5px;
    margin-top:50px;    
    width:30%;
    height:70vh;
    display:flex;    
    justify-content:center;
    padding:2%;
    background-color:#7531eb;
    @media (max-width:800px){
            width:100%;
            border-radius:0;
    }

`
