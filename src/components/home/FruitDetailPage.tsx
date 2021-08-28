import React, {useContext} from 'react'
import styled from 'styled-components';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import {fetchFruitById} from '../../providers/fruitsList'
import {Fruit} from '../../types'
import AddToCartButton from '../../components/general-purposes/AddToCartButton'
import {formatPrice} from '../../utils'
import {ShoppingContext} from '../../contexts/ShoppingState'


interface Props {
    className?:string    
}

const FruitDetailPage = ({className,...props}: Props) => {
    const {id} = useParams<{id:string}>()
    const [fruit, setFruit] = React.useState<Fruit | null | undefined>(null)  
    const [alreadyInCart, setAlreadyInCart] = React.useState<boolean>(false)
    const history = useHistory()
    const {addItemToCart, shoppingCart} = useContext(ShoppingContext)


    const getFruit = () => fetchFruitById(+id)
    .then(fr => setFruit(fr))
    .catch(e => console.error(e))


    const checkIfItemAlreadyAdded = (id:number) =>{
        const itemAlreadyInCart = shoppingCart.some(item => item.fruit.id === id)
        if(itemAlreadyInCart){
            setAlreadyInCart(true)
        }

    }
    

    React.useEffect(() => {
        checkIfItemAlreadyAdded(+id)
    })


    const handlePurchase = () => {
        if(!fruit) return
        addItemToCart(fruit)
        .then(() => history.push('/shopping-cart'))
        .catch(e => {
            console.error(e)
            setAlreadyInCart(true)
        })

    }

    React.useEffect(() => {
        getFruit()
    })
    return (
        <div className={className}>
            {fruit && <>
                <section className="picture-section">
                <img src={fruit?.pictureUrl} alt={`foto de ${fruit?.name}`} />
            </section>
            <section className="fruit-info">
                <h1>{fruit?.name}</h1>
                <p>{formatPrice(fruit.unitPrice)}</p>     
                <AddToCartButton disabled={alreadyInCart} onClick={handlePurchase} label="Comprar" />           
            </section>
        </>}
            
        </div>
    )
}

export default styled(FruitDetailPage)`
    width:70%;
    padding:5%;
    display:flex;        
    .picture-section {
        display:flex;
        justify-content:center;
        background-color:pink;        
        width:60%;
        img {       
            max-width:100%;                 
            
        }
    }
    .fruit-info {
        padding:50px;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        background-color: #ece6f8;        
        width:40%;
    }
`