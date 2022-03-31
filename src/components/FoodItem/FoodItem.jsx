import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function FoodList({ recipes }) {
    const { id } = useParams();
    const item = recipes.recipes.find((element) => element.idMeal === id);
    const ingredientIterator = (thing) => {
        let ingQuant = [];
        for (let i = 0; i < 20; i++) {
            if (thing[`strIngredient${i}`] !== null) {
                ingQuant.push({
                    ingredient: thing[`strIngredient${i}`],
                    quantity: thing[`strMeasure${i}`],
                });
            } else {
                break;
            }
        }
        return ingQuant;
    };
    return (
        <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={item.strMealThumb} style={{ height: "500px", width: "100%", margin: "0 auto" }}/>
            <Card.Body>
                <Card.Title>{item.strMeal}</Card.Title>
                <Card.Text>
                    {ingredientIterator(item).map((item, index) => (
                        <p key={index}>
                            {item.ingredient} {item.quantity}
                        </p>
                    ))}
                </Card.Text>
                <Card.Text>{item.strInstructions}</Card.Text>
                <Card.Text>{item.strTags}</Card.Text>
            </Card.Body>
        </Card>
    );
}
