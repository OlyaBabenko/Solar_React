import React from 'react';
import InfoSectionFirst from "./Info-section-first/Info-section-first";
import './Info.css';


function Info (props) {
    return (
        <div className="info">
            <InfoSectionFirst name={props.data.infoSection.section1}/>
            <InfoSectionFirst name={props.data.infoSection.section2}/>
            <InfoSectionFirst name={props.data.infoSection.section3}/>
            <InfoSectionFirst name={props.data.infoSection.section4}/>
        </div>
    )
}

export default Info;