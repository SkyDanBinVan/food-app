import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import recipies from "../../data/recipies.json"
export default function Foodcards() {

    return (
        <CardGroup>
            {recipies.recipies.map(( item, index ) => 
            <Card key={index}>
                <Card.Img variant="top" src={item.strMealThumb} width="100px"/>
                <Card.Body>
                    <Card.Title>{item.strMeal}</Card.Title>
                    <Card.Text>
                        {item.strArea} {item.strTags}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Last updated 3 mins ago
                    </small>
                </Card.Footer>
            </Card>)}
        </CardGroup>
    );
}
