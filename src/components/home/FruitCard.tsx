import React from 'react'
import styled from 'styled-components'

interface Props {
    className?:string;
    id:number;
    name:string;
    pictureUrl:string;
    unitPrice:number;
}

const ProductCard = ({className, id, name, pictureUrl, unitPrice}: Props) => {


    return (
        <div className={className}>
            <div className="thumbnail">
                <img src={pictureUrl}  />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <span>{unitPrice.toLocaleString()}</span>
            </div>

            
        </div>
    )
}

export default styled(ProductCard)`
    width:50%;
    min-width:200px;
    background-color:white;
    height:250px;
    border-radius:5px;
    justify-content:center;
    .thumbnail {
        display:flex;
        justify-content:center;
        width:100%;
        img {
            object-fit:fill;
            width:80%;
            height:auto;            
        }
    }
    transition:box-shadow 200ms ease-in;
    &:hover{
        box-shadow: 5px 5px 5px gray;
    }
`
