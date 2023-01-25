import React from 'react';
import button from '../../../assets/image/upper/upper-button.png';
import './Upper-button.css';

function UpperButton () {
    return (
        <div className="upperButton">
            <img src={button} alt="icon" className="upperButtonImg"/>
            <p className="text upperButtonText">записаться на консультацию</p>
        </div>
    )
}

export default UpperButton;