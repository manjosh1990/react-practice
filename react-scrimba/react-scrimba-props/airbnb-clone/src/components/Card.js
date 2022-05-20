import React from "react";
//import starImage from "../images/star.png";
function Card(props) {

    let badgeText;
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.card.location === "Online") {
        badgeText = "Online"
    }
    console.log(props.card  )
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.card.coverImg} alt="cardImage" className="card--image"></img>
            <div className="card--stats">
                <img src="/images/star.png" alt="starImage" className="card--star"></img>
                <span>{props.card.stats.rating}</span>
                <span className="grey">({props.card.stats.reviewCount}) . </span>
                <span className="grey">{props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><span className="bold">From ${props.card.price} </span>/ person</p>
        </div>
    )
}

export default Card;