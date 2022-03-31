import React from "react";
import { CardGroup, Card, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function Foodcards(
    {
        recipes
    }
) {
    return (
        <Row xs={1} md={3} className="g-4">
            {recipes.recipes.map(( item, index ) => 
            <LinkContainer key={index} to={`/recipes/${item.idMeal}`}>
            <Card>
                <Card.Img variant="top" src={item.strMealThumb}/>
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
        </Row>
    );
}
