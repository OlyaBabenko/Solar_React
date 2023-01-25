import React from "react";
import './FooterContacts.css';
import FooterContactsItem from "./FooterContactsItem/FooterContactsItem";

let FooterContacts = props => {
    return (
        <div className="footerContacts">
            <h2 className="titleH2">{props.data.title}</h2>
            <div className="contactItems">
                <FooterContactsItem data={props.data.centralOffice}/>
                <FooterContactsItem data={props.data.agencyInKharkiv}/>
                <FooterContactsItem data={props.data.agencyInOtherCities}/>
                <FooterContactsItem data={props.data.numbers}/>
                <FooterContactsItem data={props.data.workTime}/>
            </div>
        </div>
    )
}

export default FooterContacts;