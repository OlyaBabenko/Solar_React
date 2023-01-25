import React from 'react';
import logo from '../../assets/image/upper/upper-logo.png';
import UpperButton from "./Upper-button/Upper-button";
import UpperNetwork from "./Upper-network/Upper-network";
import './Upper.css'

let Upper = () => {
    return (
        <div className="upper" id="upper">
            <img src={logo} alt='Logo' className="upper-logo"/>
            <p className="text upperText">Зеленый тариф для дома и бизнеса</p>
            <h1 className="title upperTitle">Солнечная электростанция</h1>
            <h2 className="discriptor">с доходом от 1000 $ в месяц</h2>
            <UpperButton/>
            <UpperNetwork/>
        </div>
    )
}

export default Upper;
