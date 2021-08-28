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
    main {  
        display:flex;
        justify-content:space-between;
        .shopping-cart-item-container {
            width:80%;
        
        }
        .summary-container {
            width:30%;
    
            .checkout-button {
                border:0;
                background-color:#7531eb;
                margin-top:50px;
                width:100%; 
                height:50px;
                font-size:15pt;
                border-radius:5px;
                color: white;   
                font-weight:700;  
                &:hover {
                    text-decoration:underline;
                }
            }
            
        }
    }
    
    
        
    

`
