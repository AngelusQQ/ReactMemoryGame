import React from "react";
import "./Card.css";

const Card = props => {
  return (!props.hidden ?
    <img id={props.id} onChange={props.onChange} onClick={props.onClick} className="Card" src={props.blanksrc} alt={props.alt} height="256" width="256" />
  :
    <img id={props.id} onChange={props.onChange} onClick={props.onClick} className="Card" src={props.src} alt={props.alt} height="256" width="256" />
  )
}
export default Card;
