import fruitCatalog from '../mock_data/fruits_catalog.json'
import { Fruit } from '../types'



export const fetchFruits = async (): Promise<Fruit[]> =>
    new Promise((resolve, reject) => {
        try {
            resolve(fruitCatalog)
        } catch (error) {
            reject(error)
        }

    })


export const fetchFruitById = async (fruitId: number): Promise<Fruit | undefined> =>
    new Promise((resolve, reject) => {
        try {
            resolve(fruitCatalog.find(x => x.id === fruitId))
        } catch (error) {
            reject(error)
        }
    })
