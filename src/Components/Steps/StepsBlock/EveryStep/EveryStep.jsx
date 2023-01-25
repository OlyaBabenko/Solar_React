import React from "react";
import './EveryStep.css';

let Step = (props) => {
    return (
        <div className="step">
            <p className="textSmall stepNumber">{props.data.number}</p>
            <h3 className="titleH3">{props.data.name}</h3>
            <p className="textSmall">{props.data.description}</p>
        </div>
    )
}

export default Step;