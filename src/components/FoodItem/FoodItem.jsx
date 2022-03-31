import React from 'react'

export default function FoodList(
    {
        item
    }
) {
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