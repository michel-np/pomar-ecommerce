import styled from 'styled-components'

const Button = styled.button`
    border-radius:5px;
    padding:1% 3%;
    border:0;
    text-decoration:none;
    color:#ddd;
    min-width:160px;
    min-height:45px;
    font-size:1em;
    background-color:${({theme}) => theme.main};
    &:active {
                box-shadow:inset 3px 3px 2px gray;
    }
    a {
        color:#ddd;
        text-decoration:none;
        &:hover {
            text-decoration:underline;
        }
    }
    &:hover {
        text-decoration:underline;
    }
    &:disabled {
        opacity:0.5
    }

`

export default Button
