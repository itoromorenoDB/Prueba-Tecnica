import React from "react";
import { Card, Col } from "react-bootstrap";
import "./RetroGamesCard.css";

type RetroGamesCardProps = {
    id: number;
    imageUrl: string;
    name: string;
    overview: string;
    price: number;
}

const RetroGamesCard = (
    {
        id,
        imageUrl,
        name,
        overview,
        price, 
    }
    : RetroGamesCardProps
) => {
    return (
        <Col key={id} md={4} className="mb-4">
              <Card style={{ backgroundColor: "#495057", color: "white" }}>
                <Card.Img variant="top" src={imageUrl} alt={name} className="game-image"/>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{overview.slice(0, 75)}...</Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ${price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
    )
}

export default RetroGamesCard;
