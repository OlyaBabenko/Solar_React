import React from "react";
import './StepsBlock.css';
import Step from "./EveryStep/EveryStep";

let StepsBlock = (props) => {
    return (
        <div className="stepsBlock">
            <Step data={props.data.first}/>
            <Step data={props.data.second}/>
            <Step data={props.data.third}/>
            <Step data={props.data.fourth}/>
            <Step data={props.data.fifth}/>
        </div>
    )
}

export default StepsBlock;