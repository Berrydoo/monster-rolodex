import React from "react";

import "./card.styles.css";

const Card = (props) => {
    const imgUrl = `https://robohash.org/${props.person.id}?size=200x200`;

    return (
        <div className="card-container">
            <img src={imgUrl} alt={props.person.name} />
            <h1>{props.person.name}</h1>
            <p>{props.person.email}</p>
        </div>
    );
};

export default Card;
