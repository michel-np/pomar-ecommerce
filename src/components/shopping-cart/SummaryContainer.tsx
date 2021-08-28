import React, {useCallback, useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { ShoppingContext } from '../../contexts/ShoppingState'
import {ShoppingCart} from '../../types'
import {formatPrice} from '../../utils'

type Props = {
    className?:string
    shoppingCart:ShoppingCart
}

const SummaryContainer = ({className, shoppingCart}:Props) => {
    const [checkoutPrice, setCheckoutPrice] = useState(0)
    const newCart = [...shoppingCart]    
    
    const getTotalValue = useCallback((): void => {
        const priceSum = newCart.reduce((acc, current)=>{
            acc = (current.amount * current.fruit.unitPrice) + acc
            return acc
        },0)
        setCheckoutPrice(priceSum)
    },[newCart])
    

    
    useEffect(() => {        
        getTotalValue()
    },[newCart, getTotalValue])

    return (
        <div className={className}>
            <h1>Resumo</h1>
            <hr/>
            {checkoutPrice && <h2>{formatPrice(checkoutPrice)}</h2>}
        </div>
    )
}

export default styled(SummaryContainer)`
    background-color: #ece6f8;
    width:100%;
    border-radius:5px;    
    padding:5%;

`
