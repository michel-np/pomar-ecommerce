import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {fetchFruits} from '../../providers/fruitsList'
import {useLocation} from 'react-router-dom'
import FruitCard from './FruitCard'
import {Fruit} from '../../types'

interface Props {
    className?:string
}


const Home = ({className}: Props) => {
    const [fruits, setFruits] = useState<Fruit[]>([])
    const location = useLocation()

    const query = new URLSearchParams(location.search)
    const search  = query.get("search")


    const fetchAllFruits = async () => {
        await fetchFruits()
        .then((response) => {
            if (search?.length){
                const fruits = response.filter(fruit => 
                    fruit?.name.toLowerCase().includes(search.toLowerCase())
                )
                return setFruits(fruits)
            }
            setFruits(response)
        }).catch(err => console.error(err))
    }

    useEffect(() => {
        fetchAllFruits()
    },[search])

    return <>
        <main className={className}>
            {fruits && fruits.map(fruit => (
                <FruitCard
                    id={fruit.id}
                    name={fruit.name}
                    unitPrice={fruit.unitPrice}
                    pictureUrl={fruit.pictureUrl}
                />
            ))}
        </main>
    
    </>
    
}

export default styled(Home)`
    background-color:#ddd;
    display:grid;
    align-items:center;
    justify-items:center;
    gap:30px;
    grid-template-columns: 1fr 1fr 1fr;        
    border-radius:5px;
    margin:2%;    
    padding:2%;
    width:80%;
    @media (max-width:800px) {
        grid-template-columns:1fr 1fr;
    }
    @media (max-width:500px) {
        grid-template-columns:1fr;
    }
`
