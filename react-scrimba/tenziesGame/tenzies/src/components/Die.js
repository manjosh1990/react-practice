import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    let dots = []
    let html = null
    switch (props.value) {
        case 4:
        case 6:
            let split = props.value/2    
            for (let i = 0; i < split; i++) {
                dots.push(<div key={i} className="dot"></div>)
            }
            html = (
                <>
                    <div className="column">
                        {dots}
                    </div>
                    <div className="column">
                        {dots}
                    </div>
                </>

            )
            break
        case 5:
            for (let i = 0; i < props.value - 3; i++) {
                dots.push(<div key={i} className="dot"></div>)
            }
            html = (
                <>
                    <div className="column">
                        {dots}
                    </div>
                    <div className="column-5">
                        <div key={5} className="dot"></div>
                    </div>
                    <div className="column">
                        {dots}
                    </div>
                </>

            )
            break
        default:
            for (let i = 0; i < props.value; i++) {
                dots.push(<div key={i} className="dot"></div>)
            }
    }
    let class_name = "die-face face-" + props.value;
    return (
        <div className={class_name} style={styles} onClick={props.holdDice}>
            {html? html : dots} 
        </div>
    )
}