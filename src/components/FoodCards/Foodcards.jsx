import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import recipes from "../../data/recipes.json"
export default function Foodcards() {

    return (
        <CardGroup>
            {recipes.recipes.map(( item, index ) => 
            <LinkContainer key={index} to={`/recipes/${item.idMeal}`}>
            <Card>
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
            </Card>
            </LinkContainer>)}
        </CardGroup>
    );
}
