import React from "react";
import './Footer.css';
import FooterContacts from "./FooterContacts/FooterContacts";
import FooterApplication from "./FooterApplication/FooterAplication";
import logo from '../../assets/image/upper/upper-logo.png'
import instagram from '../../assets/image/upper/uper-social-network/instagram.png';
import telegram from '../../assets/image/upper/uper-social-network/telegram.png';
import whatsapp from '../../assets/image/upper/uper-social-network/whatsapp.png';
import facebook from '../../assets/image/upper/uper-social-network/facebook.png';

let Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footerBlock">
                <FooterApplication data={props.data.application}/>
                <FooterContacts data={props.data.contacts}/>
            </div>
            <div className="footerLogoAndNetwork">
                <div className="footerLogo">
                    <a href="#upper"><img src={logo} alt="logo"/></a>
                </div>

                <div className="footerNetworks">
                    <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="instagram"/></a>
                    <a href="https://web.telegram.org/" target="_blank"><img src={telegram} alt="telegram"/></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><img src={whatsapp} alt="whatsapp"/></a>
                    <a href="https://uk-ua.facebook.com/" target="_blank"><img src={facebook} alt="facebook"/></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;