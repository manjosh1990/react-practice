import React from "react";

export default function Start(props) {
    return (
    <div className="start-page">
        <h1>Quizzical</h1>
        <p>Answer five questions and test your knowledge. Good Luck!</p>
        <div className="start-btn" onClick={props.startQuizz()}>
            Start quiz            
        </div>
    </div>
    )
}