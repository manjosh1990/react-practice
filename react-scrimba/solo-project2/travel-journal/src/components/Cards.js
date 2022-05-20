import React from "react";
function Card(props) {
    console.log(props.card)
    return (
        <div className="container">
            <div className="card--imageContainer">
                <img src={props.card.imageUrl} alt="thumbnail" className="card--image"></img>
            </div>
            <div className="content">
                <div className="card--location">
                    <div className="location">
                        <img src="/images/location.PNG" alt="locationIcon" className="location--icon"></img>
                    </div>
                    <h4 className="card-location-title">{props.card.location.toUpperCase()}</h4>
                    <a className ="card-location-link" target="_blank" href={props.card.googleMapsUrl} rel="noreferrer">View on Google Maps</a>
                </div>
                <div className="description">
                    <h1 className="location-name">{props.card.title}</h1>
                    <h3 className="location-date">{props.card.startDate} - {props.card.endDate}</h3>
                    <p className="location-description">{props.card.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;