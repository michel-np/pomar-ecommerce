import React from 'react'
import styled from 'styled-components'

interface Props {
    
}

const Button = styled.button`
    border-radius:5px;
    padding:1% 3%;
    border:0;
    text-decoration:none;
    color:#ddd;
    min-width:160px;
    min-height:45px;
    font-size:20pt;
    background-color:#7531eb;
    a {
        color:#ddd;
        &:hover {
            text-decoration:underline;
        }
    }
    &:hover {
            text-decoration:underline;
        }

`

export default Button
