import React from "react";
import Tabs from "./Tabs/Tabs";
import Slider from "./Slider/Slider";
import Info from "./Info/Info";
import './Left.css';

function Left (props) {
    return (
        <div className="left">
            <Tabs data={props.data}/>
            <Slider data={props.data}/>
            <Info data={props.data}/>
        </div>
    )
}

export default Left;