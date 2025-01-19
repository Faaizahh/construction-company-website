import React from "react";
import Card from "../Card/Card.jsx";
import cards from "../../card";
import "./CardWrapper.css";

function createCard(card) {
  return <Card key={card.id} img={card.img} h1={card.h1} ul={card.ul} />;
}

function CardWrapper() {
  return <div id="wrapper">{cards.map(createCard)}</div>;
}

export default CardWrapper;
