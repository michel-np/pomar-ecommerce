export interface IAuthState {
    user: User | undefined;
    login: (username: string, password: string) => Promise<void>
    isLoggingIn: boolean
    isLoggedIn: boolean
    dispatch: (action: IAuthStateAction) => void
    loginError: LoginError | undefined
    logout: () => Promise<void>

}

type LoginError = {
    message: string
}

export type User = {
    token: string
    name: string
}

export type IAuthStateAction =
    | { type: 'LOGIN' }
    | { type: 'LOGIN_ERROR', payload: LoginError | undefined }
    | { type: 'LOGIN_SUCCESS', payload: User | undefined }
    | { type: 'IS_LOGGING_IN' }
    | { type: 'LOGGED_OUT' }


export type Fruit = {
    id: number,
    name: string,
    unitPrice: number,
    pictureUrl: string
}

export interface IShoppingCartItem {
    fruit: Fruit;
    amount: number;
}

export type ShoppingCart = IShoppingCartItem[]

export interface IShoppingState {
    shoppingCart: ShoppingCart;
    addItemToCart: (fruit: Fruit) => Promise<void>;
    removeItemFromCart: (item: number) => Promise<void>;
    emptyCart: () => Promise<void>
    increaseItemCount: (itemId: number) => void
    decreaseItemCount: (itemId: number) => void

}


export type ShoppingCartAction =
    | { type: 'INCREASE_ITEM_COUNT', payload: ShoppingCart }
    | { type: 'DECREASE_ITEM_COUNT', payload: ShoppingCart }
    | { type: 'ADD_ITEM_TO_CART', payload: ShoppingCart }
    | { type: 'REMOVE_ITEM_FROM_CART', payload: ShoppingCart }
    | { type: 'EMPTY_SHOPPING_CART' }