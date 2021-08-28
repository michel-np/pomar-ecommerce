import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'
import {AuthContext} from '../../contexts/AuthState'
import {ShoppingContext} from '../../contexts/ShoppingState'
import ShoppingCartItem from './ShoppingCartItem'
import SummaryContainer from './SummaryContainer'

interface Props {
    className?:string
}

const ShoppingCart = ({className}: Props) => {
    const {
        shoppingCart, 
        removeItemFromCart,
        emptyCart,
        increaseItemCount,
        decreaseItemCount,        
    } = useContext(ShoppingContext)

     const handleItemRemoval = (itemId:number) => 
        removeItemFromCart(itemId).then(() => {
            console.log('it worked')
        })
     const handleAmountIncrease = (itemId:number) => {
        increaseItemCount(itemId)


     }
     const handleAmountDecrease = (itemId:number) => {
        decreaseItemCount(itemId)
     }  
    
     


    return (
        <div className={className}>
        <h1>Carrinho de compras</h1>
        <main>           
            <div className="shopping-cart-item-container">
                {shoppingCart && shoppingCart.map(cartItem =>(
                    <ShoppingCartItem
                        key={cartItem.fruit.id}
                        cartItem={cartItem}
                        onIncreaseAmount={handleAmountIncrease}
                        onDecreaseAmount={handleAmountDecrease}
                        onRemoveItem={handleItemRemoval}
                    />
                ))} 
                <button 
                    disabled={shoppingCart.length === 0} 
                    onClick={emptyCart} className="empty-cart-button"
                    >
                        {shoppingCart.length === 0 ?'CARRINHO VAZIO' : 'ESVAZIAR CARRINHO'}
                </button>
            </div>
        
            <div className="summary-container">
                <SummaryContainer shoppingCart={shoppingCart}/>
                <button className="checkout-button" >FINALIZAR COMPRA</button>
            </div>        
        </main>
    </div>
    )
}

export default styled(ShoppingCart)`
    width:70%;
    display:flex;
    flex-direction:column;
    button {
        border:0;
        background-color:#7531eb;
        color: white;   
        border-radius:5px;
        &:hover {
            text-decoration:underline;
        }
        &:disabled {
            opacity:0.5
        }
    }
    main {  
        display:flex;
        justify-content:space-between;
        .shopping-cart-item-container {
            width:80%;
            .empty-cart-button {
                height:35px;
                width:30%;
                font-size:14pt
            }
        
        }
        .summary-container {
            width:30%;
    
            .checkout-button {                
                margin-top:50px;
                width:100%; 
                height:50px;
                font-size:15pt;
                font-weight:700;                  
            }
            
        }
    }
    
    
        
    

`
