import React from "react";
import Right from "./Right/Right";
import Left from "./Left/Left";
import './Green-tariff-block.css';

function GreenTariffBlock (props) {
    return (
        <div className="greenTariffBlock">
            <Left data={props.data}/>
            <Right/>
        </div>
    )
}

export default GreenTariffBlock;