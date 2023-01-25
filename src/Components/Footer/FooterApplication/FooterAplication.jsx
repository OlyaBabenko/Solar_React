import React from "react";
import './FooterApplication.css';
import arrow from '../../../assets/image/upper/upper-button.png'

let FooterApplication = props => {
    return (
        <div className="footerApplication">
            <h2 className="titleH2">{props.data.title}</h2>
            <div className="footerInput">
                <input type="text" placeholder={props.data.formName}/>
                <input type="text" placeholder={props.data.formNumber}/>
            </div>
            <div className="footerButton">
                <img src={arrow} alt="button" className="footerButtonImg"/>
                <p className="text">оставить заявку</p>
            </div>
        </div>
    )
}

export default FooterApplication;