import React from 'react'
import recipies from "../../data/recipies.json"
// import { useEffect, useState } from 'react'
// import axios from "axios"

export default function FoodList() {
    // const [recipiesList, setRecipiesList] = useState([])

    // useEffect(() => {
    //     recipeArray(5)
    //     .then(res => setRecipiesList(res))
    // })
    // const recipeArray = async (count) => {
    //     let recipies = []
    //     for (let i = 0; i < count; i++) {
    //         const res = await axios("http://www.themealdb.com/api/json/v1/1/random.php")
    //         recipies.push(res.data.meals[0])
    //     }
    //     return recipies
    // }
    let headers = [
        "Title",
        "Image",
        "Description",
        "Ingredients",
        "Recipe"

    ]
    const ingredientIterator = (thing) => {
        let ingQuant = []
        for (let i = 0; i < 20; i++) {
            if (thing[`strIngredient${i}`] !== null) {
                ingQuant.push({ingredient : thing[`strIngredient${i}`], quantity : thing[`strMeasure${i}`]})
            } else {
                break
            }
        }
        return ingQuant
    }
    
    const TableHeadItem = ({ item, index }) => <th key={index}>{item}</th>;
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((item, index) => <TableHeadItem item={item} key={index}/>)}
                </tr>
            </thead>
            <tbody>
                {recipies.recipies.map(( item, index ) => <tr key={index}>
                    <td>{item.strMeal}</td>
                    <td><img src={item.strMealThumb} alt="logo" width="100px"/></td>
                    <td>{item.strTags}</td>
                    <td>{ingredientIterator(item).map(( item, index ) => <p key={index}>{item.ingredient} {item.quantity}</p>)}</td>
                    <td>{item.strInstructions}</td>
                </tr>)}
            </tbody>
        </table>
    )
}