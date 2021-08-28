import React from "react";
import styled from "styled-components";
import AddToCartIcon from '../../assets/svgs/add-to-cart.svg'


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
}

const AddToCartButton = ({label, onClick, disabled}:Props) => {
    return <>
        <Button disabled={disabled} onClick={onClick}>
            <span>{disabled ? 'Item já no carrinho' : label}</span>
           {!disabled &&  <img src={AddToCartIcon} alt="button"/>}
        
        </Button>
    </>
}


export default AddToCartButton;