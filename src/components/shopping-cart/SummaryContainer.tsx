import React, {useCallback, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { ShoppingContext } from '../../contexts/ShoppingState'
import {ShoppingCart} from '../../types'
import {formatPrice, sumCartPrices} from '../../utils'

type Props = {
    className?:string
    shoppingCart:ShoppingCart
}

const SummaryContainer = ({className, shoppingCart}:Props) => {
    const [checkoutPrice, setCheckoutPrice] = useState(0)
    const newCart = [...shoppingCart]    
    
    const getTotalValue = useCallback((): void => {
        const priceSum =sumCartPrices(newCart)
        setCheckoutPrice(priceSum)
    },[newCart])
    

    
    useEffect(() => {        
        getTotalValue()
    },[newCart, getTotalValue])

    return (
        <div className={className}>
            <h1>Total</h1>
            <hr/>
            <h2>{checkoutPrice ? formatPrice(checkoutPrice) : "R$ 0,00"}</h2>
        </div>
    )
}

export default styled(SummaryContainer)`
    background-color: #ece6f8;
    width:100%;
    border-radius:5px;    
    padding:5%;

`
