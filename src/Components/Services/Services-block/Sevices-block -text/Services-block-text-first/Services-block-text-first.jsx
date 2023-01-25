import React from "react";
import './Services-block-text-first.css';

function ServicesBlockTextFirst (props) {
    return (
        <div className="servicesBlockTextSection">
            <h3 className="titleH3 servicesBlockTextSectionTitle">{props.data.name}</h3>
            <p className="textSmall">{props.data.info}</p>
        </div>
    )
}

export default ServicesBlockTextFirst;