import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'
import {AuthContext} from '../../contexts/AuthState'
import {ShoppingContext} from '../../contexts/ShoppingState'
import ShoppingCartItem from './ShoppingCartItem'
import SummaryContainer from './SummaryContainer'
import {Link} from 'react-router-dom'
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

                {shoppingCart.length > 0 
                ?
                <button 
                    disabled={shoppingCart.length === 0} 
                    onClick={emptyCart} 
                    className="empty-cart-button"
                    >
                        ESVAZIAR CARRINHO
                </button>
                 :
                 null}
                
            </div>
        
            <div className="summary-container">
                <SummaryContainer shoppingCart={shoppingCart}/>
                <button disabled={shoppingCart.length === 0} className="checkout-button" >
                    {shoppingCart.length > 0 ? <Link to="/purchase-success"> 
                    
                        FINALIZAR COMPRA
                    </Link>
                :"CARRINHO VAZIO"}
                </button>
            </div>        
        </main>
    </div>
    )
}

export default styled(ShoppingCart)`
        width: 70%;
        display: flex;
        flex-direction: column;
        button {
        border: 0;
        background-color: #7531eb;
        color: white;
        border-radius: 5px;
        &:hover {
            text-decoration: underline;
        }
        &:disabled {
            opacity: 0.5;
        }
        }
        main {
        display: flex;
        justify-content: space-between;
        .shopping-cart-item-container {
            width: 80%;
            .empty-cart-button {
            height: 35px;
            width: 30%;
            font-size: 14pt;
            }
        }
        .summary-container {
            width: 30%;

            .checkout-button {
            margin-top: 50px;
            width: 100%;
            height: 50px;
            font-size: 15pt;
            font-weight: 700;
            a {
                color: white;
                text-decoration: none;
            }
            &:hover {
                text-decoration: underline;
            }
            }
        }
        }
        @media (max-width: 1000px) {
        align-items: center;
        width: 100vw;
        gap: 5%;
        main {
            padding: 5%;
            width:90%;
            flex-direction: column;
            align-items: flex-start;
            .shopping-cart-item-container {
                width:90%;
            .empty-cart-button {
                width: 100%;
                margin-bottom: 20px;
            }
            }
            .summary-container {
                width:80%;
            }
        }
        }
    }
    
    
        
    

`
