import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {formatPrice} from '../../utils'


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
                <Link to={`/${id}`}>                 
                <div className="thumbnail">
                    <img src={pictureUrl} alt={`foto de ${name}`} />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <span>{formatPrice(unitPrice)}</span>
                </div>

                </Link>
            </div>
   
    )
}

export default styled(ProductCard)`
   
    width:70%;
    min-width:200px;
    background-color:white;    
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
    .info{
       margin:2% 10%;

    }
    transition:box-shadow 200ms ease-in;
    &:hover{
        box-shadow: 5px 5px 5px gray;
    }

`
