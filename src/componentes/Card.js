import React from "react";
import "./Card.css"


const Card = (props) => {
    return(
        <div key={props.id} className="wrapper">
            <div className="card">
                <div className="cardBody">
                    <h2 className="cardTitle">{props.title}</h2>
                    <img src={props.img} className="cardImg"/>
                    <p className="cardDescription">{props.description}</p>
                    <button className="cardBtn">Ver mas</button>
                </div>
            </div>
        </div>
    )
}

export default Card;