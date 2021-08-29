import { ShoppingCart } from "./types"


export const getUser = () => {
    const userData: string | null = localStorage.getItem('user')
    console.log('GetUser', userData)
    if (userData) {
        return JSON.parse(userData)
    }

}

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

}

export const sumCartPrices = (cart:ShoppingCart) => cart.reduce((acc, current)=>{
    acc = (current.amount * current.fruit.unitPrice) + acc
    return acc
},0)

