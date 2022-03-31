import React from 'react'
import { useParams } from 'react-router-dom';

export default function FoodList(
    {
        recipes
    }
) {
    const { id } = useParams();
    const item = recipes.recipes.find(element => element.idMeal === id)
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
    return (
                <div>
                    <td>{item.strMeal}</td>
                    <td><img src={item.strMealThumb} alt="logo" width="100px"/></td>
                    <td>{item.strTags}</td>
                    <td>{ingredientIterator(item).map(( item, index ) => <p key={index}>{item.ingredient} {item.quantity}</p>)}</td>
                    <td>{item.strInstructions}</td>
                </div>
    )
}