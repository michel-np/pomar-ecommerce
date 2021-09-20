import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../../contexts/AuthState'
import { ShoppingContext } from '../../contexts/ShoppingState'
import ShoppingCartItem from './ShoppingCartItem'
import PurchaseSummary from './PurchaseSummary'
import { Link, useHistory } from 'react-router-dom'
import Button from '../general-purposes/Button'
interface Props {
    className?: string
}

const ShoppingCart = ({ className }: Props) => {
    const {
        shoppingCart,
        removeItemFromCart,
        emptyCart,
        increaseItemCount,
        decreaseItemCount,
    } = useContext(ShoppingContext)
    const history = useHistory();

    const handleItemRemoval = (itemId: number) => 
        removeItemFromCart(itemId)
    const handleAmountIncrease = (itemId: number) => {
        increaseItemCount(itemId)


    }
    const handleAmountDecrease = (itemId: number) => {
        decreaseItemCount(itemId)
    }


    useEffect(() => {
        if(shoppingCart.length === 0) {
            history.push('/')
        }
    },[shoppingCart])

    return (
        <div className={className}>
            <h1>Carrinho de compras</h1>
            <main>
                <div className="shopping-cart-item-container">
                    {shoppingCart && shoppingCart.map(cartItem => (
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
                        <Button
                            disabled={shoppingCart.length === 0}
                            onClick={emptyCart}
                        >
                            ESVAZIAR CARRINHO
                        </Button>
                        :
                        null}
                </div>
                <div className="summary-container">
                    <PurchaseSummary shoppingCart={shoppingCart} />
                    <Button disabled={shoppingCart.length === 0} >
                        {shoppingCart.length > 0 ? <Link to="/purchase-success">
                            FINALIZAR COMPRA
                        </Link>
                            : "CARRINHO VAZIO"}
                    </Button>
                </div>
            </main>
        </div>
    )
}

export default styled(ShoppingCart)`
        width: 70%;
        display: flex;
        flex-direction: column;
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
                display:flex;
                flex-direction:column;
                gap:30px;
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
