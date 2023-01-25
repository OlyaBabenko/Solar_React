import React from "react";
import './Services-block-text.css';
import ServicesBlockTextFirst from "./Services-block-text-first/Services-block-text-first";

function ServicesBlockText (props) {
    return (
        <div className="servicesBlockText">
            <ServicesBlockTextFirst data={props.data.section1}/>
            <ServicesBlockTextFirst data={props.data.section2}/>
            <ServicesBlockTextFirst data={props.data.section3}/>
            <ServicesBlockTextFirst data={props.data.section4}/>
        </div>
    )
}

export default ServicesBlockText;