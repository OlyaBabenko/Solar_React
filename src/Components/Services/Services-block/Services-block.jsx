import React from "react";
import ServicesBlockText from "./Sevices-block -text/Services-block-text";
import image from '../../../assets/image/services/services-img.jpg';
import './Services-block.css';

function ServicesBlock (props) {
    return (
        <div className="servicesBlock">
            <ServicesBlockText data={props.data}/>
            <img src={image} alt="Image" className="servicesBlockImage"/>
        </div>
    )
}

export default ServicesBlock;