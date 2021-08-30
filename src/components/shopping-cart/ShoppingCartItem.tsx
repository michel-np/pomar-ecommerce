import React from 'react'
import styled from 'styled-components'
import {IShoppingCartItem} from '../../types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'

interface ShoppingCartItemProps {
    className?:string;
    cartItem:IShoppingCartItem;
    onIncreaseAmount: Function
    onRemoveItem: Function
    onDecreaseAmount: Function
    

}

const ShoppingCartItem = ({cartItem,
    className, 
    onIncreaseAmount, 
    onRemoveItem, 
    onDecreaseAmount
    }: ShoppingCartItemProps) => {


    const decreaseAmount = () => {
        if(cartItem.amount === 0) return
        onDecreaseAmount(cartItem.fruit.id)
    }

    return (
        <div className={className}>
            <div  className="item-info">
                <img src={cartItem.fruit.pictureUrl} alt={`Foto de ${cartItem.fruit.name}`}/>
                <span>{cartItem.fruit.name}</span>
            </div>
            <div className="amount-control">
                <span>Quantidade:</span>
                <div className="control">
                    <FontAwesomeIcon  color="#7531eb" icon={faPlus}  onClick={()=> onIncreaseAmount(cartItem.fruit.id)}/>
                    {cartItem.amount}
                    <FontAwesomeIcon color="#7531eb" onClick={decreaseAmount} icon={faMinus}/>
                </div>
            </div>
            <div className="trash-can">
                    <FontAwesomeIcon onClick={() => onRemoveItem(cartItem.fruit.id)} size="2x" color="#7531eb" icon={faTrash}/>
            </div>

            
        </div>
    )
}
        


export default styled(ShoppingCartItem)`
    margin-bottom:10px;
    border-radius:5px;
    padding:2%;
    border:2px solid #7531eb;    
    height:40px;
    width:80%;
    * {
        display:flex;
        align-items:center;
    }
    display:flex;
    .item-info {      
        width:50%;
        align-items:center;
        gap:10px;
        img {
            max-width:60px
        }
        max-width:90%;
    }
    .amount-control {        
        gap:5px;

        
        .control {
            gap:10px;
            border:3px solid gray;
            border-radius:5px;
            padding:4px;
            font-size:20px;
        }
    }
    .trash-can {
        width:25%;
        justify-content:center;

    }
`

