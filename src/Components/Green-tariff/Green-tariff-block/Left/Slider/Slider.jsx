import React from "react";
import image from '../../../../../assets/image/green-t/image-roof.jpg';
import './Slider.css';
import arrowLeft from '../../../../../assets/image/green-t/arrow-left.png';
import arrowRight from '../../../../../assets/image/green-t/arrow-right.png';

function Slider (props) {
    return (
        <div className="slider">
            <img src={image} alt="icon" className="sliderImage"/>
            <div className="sliderRight">
                <p className="sliderText textSmall">{props.data.slider.section1.info}</p>
                <div className="sliderArrow">
                    <img src={arrowLeft} alt="Arrow Left" className="arrow"/>
                    <img src={arrowRight} alt="Arrow right" className="arrow"/>
                </div>
            </div>
        </div>
    )
}

export default Slider;