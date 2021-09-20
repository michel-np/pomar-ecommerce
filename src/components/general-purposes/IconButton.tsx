import React, { ReactElement } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from "@fortawesome/fontawesome-common-types";


const Button = styled.button`
    background-color:#7531eb;
    border:0;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:5%;
    gap:5%;
    
    span{
        font-size:20pt;
        color:white;
    } 
    img {
        height:30px;               
        filter:white;
    }
    &:disabled {
        opacity:.5
    }    
    

`

type Props = {
    label:string      
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled:boolean
    disabledLabel:string
    icon?:IconDefinition
}

const IconButton = ({label, onClick, disabled, disabledLabel, icon}:Props) => {

    const renderIcon = ():ReactElement => {
        if(!disabled && icon) {
            return  <FontAwesomeIcon icon={icon} color="white" size="2x"/>
        }
        return <></>
    }

    return <>
        <Button disabled={disabled} onClick={onClick}>
            <span>
                {disabled ? disabledLabel : label}
                </span>
            {renderIcon()}
        
        </Button>
    </>
}


export default IconButton;
