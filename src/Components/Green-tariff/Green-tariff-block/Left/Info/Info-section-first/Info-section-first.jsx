import React from "react";
import './Info-section-first.css';

function InfoSectionFirst (props) {
    return(
        <div className="infoSection">
            <h3 className="titleH3 infoSectionTitle">{props.name.name}</h3>
            <p className="textSmall infoSectionText">{props.name.info}</p>
        </div>
    )
}

export default InfoSectionFirst;