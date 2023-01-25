import React from "react";
import './Steps.css';
import StepsBlock from "./StepsBlock/StepsBlock";
import image from "../../assets/image/steps/steps-image.png";


let Steps = (props) => {
    return (
        <div className="steps">
            <div className="stepsLeft">
                <h2 className="titleH2 titleForSteps">{props.data.title}</h2>
                <StepsBlock data={props.data.fiveSteps}/>
            </div>
            <img src={image} alt="image" className="stepsImage"/>
        </div>
    )
}

export default Steps;