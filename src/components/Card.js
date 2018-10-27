import React from "react";
import "./Card.css";

const Card = props => (
  <img id={props.id} onClick={props.onClick} className="Card" src={props.src} alt="temp" height="256" width="256" />
)

export default Card;
