import React from "react";
import GreenTariffBlock from "./Green-tariff-block/Green-tariff-block";
import './Green-tariff.css';

function GreenTariff (props) {
    return (
        <div className="greenTariff">
            <h2 className="titleH2 greenTariffTitle">ЗЕЛЕНЫЙ ТАРИФ</h2>
            <GreenTariffBlock data={props.data}/>
        </div>
    )
}

export default GreenTariff;