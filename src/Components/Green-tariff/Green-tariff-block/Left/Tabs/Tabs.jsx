import React from "react";
import './Tabs.css';

function Tabs (props) {
    return (
        <div className="tabs">
            <p className="text tabText">{props.data.slider.section1.name}</p>
            <p className="text tabText">{props.data.slider.section2.name}</p>
            <p className="text tabText">{props.data.slider.section3.name}</p>
        </div>
    )
}

export default Tabs;