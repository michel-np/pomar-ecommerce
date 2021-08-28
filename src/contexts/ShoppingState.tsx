import React, {createContext, ReactElement, useReducer, useCallback, useEffect} from 'react'
import {Fruit, IShoppingCartItem,IShoppingState,ShoppingCart,ShoppingCartAction} from '../types'


type ShoppingStateCartProps =  {
    children: Function | ReactElement
}

const initialState: IShoppingState = {
    shoppingCart:[],
    addItemToCart:() => Promise.resolve(),
    removeItemFromCart: () => Promise.resolve(),
    emptyCart: () => Promise.resolve(),
    increaseItemCount: () => undefined,
    decreaseItemCount:() => undefined
}


const reducer = (state: IShoppingState, action: ShoppingCartAction):IShoppingState => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                shoppingCart:action.payload
            }
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                shoppingCart:action.payload
            }
        case 'INCREASE_ITEM_COUNT': 
            return {
                ...state,
                shoppingCart:action.payload
            }
        case 'DECREASE_ITEM_COUNT' :            
            return {
                ...state,
                shoppingCart: action.payload
            }
        case 'EMPTY_SHOPPING_CART':
            return {
                ...state,
                shoppingCart:[]
            }
            

        default:
            return state
    
    }

}

export const ShoppingContext = createContext(initialState)


const ShoppingCartState = ({children}:ShoppingStateCartProps) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
   
    
    const addItemToCart = useCallback((fruit:Fruit) => new Promise<void>((resolve, reject) => {
        try {
            const {shoppingCart} = state
            const itemAlreadyAdded = shoppingCart.some(item => item.fruit.id === fruit.id)
            if (itemAlreadyAdded) throw new Error()
            const newCart = [...shoppingCart, {fruit, amount:1}]
            dispatch({type:'ADD_ITEM_TO_CART', payload:newCart})
            resolve()
        } catch (error) {
            reject('Este item já está no carrinho')
        }
    }),[state])

    const removeItemFromCart = useCallback(
        (id:number) => new Promise<void>((resolve) => {      
            const {shoppingCart} = state;            
            const newShoppingCart = shoppingCart.filter(item => item.fruit.id !== id)
            dispatch({type:'REMOVE_ITEM_FROM_CART', payload:newShoppingCart})
            resolve()
        }),
        [state],
    )

    const emptyCart = useCallback(() => new Promise<void>((resolve, reject) =>{
        dispatch({type:'EMPTY_SHOPPING_CART'})
    }),[])

    

    const increaseItemCount = useCallback((itemId:number) => {
        const {shoppingCart} = state
        const cart = shoppingCart;
        const itemIndex = cart.findIndex(x => x.fruit.id === itemId)
        cart[itemIndex].amount +=1
        
        dispatch({type:'INCREASE_ITEM_COUNT', payload:cart})
        
    },[state])

    const decreaseItemCount = useCallback((itemId:number) => {
        const {shoppingCart} = state
        const cart = shoppingCart;
        const itemIndex = cart.findIndex(x => x.fruit.id === itemId)
        cart[itemIndex].amount -= 1
        
        dispatch({type:'DECREASE_ITEM_COUNT', payload:cart})
    },[state])

    const contextValue = {
        ...state,        
        addItemToCart,
        removeItemFromCart,
        emptyCart,
        increaseItemCount,
        decreaseItemCount,
    }
    

    return (
        <ShoppingContext.Provider value={contextValue}>
            {children}
        </ShoppingContext.Provider>

    )
}

export default ShoppingCartState