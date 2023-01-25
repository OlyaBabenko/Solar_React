import React from "react";
import './Services.css';
import ServicesBlock from "./Services-block/Services-block";

function Services (props) {
    return (
        <div className="services">
            <h2 className="titleH2 servicesTitle">УСЛУГИ</h2>
            <ServicesBlock data={props.data}/>
        </div>
    )
}

export default Services;
