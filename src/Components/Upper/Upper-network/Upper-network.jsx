import React from "react";
import './Upper-network.css';
import whatsapp from '../../../assets/image/upper/uper-social-network/whatsapp.png';
import telegram from '../../../assets/image/upper/uper-social-network/telegram.png';
import facebook from '../../../assets/image/upper/uper-social-network/facebook.png';
import instagram from '../../../assets/image/upper/uper-social-network/instagram.png';

function UpperNetwork () {
    return (
        <div className="upperNetwork">
            <img src={instagram} alt="Instagram Icon" className="network"/>
            <img src={telegram} alt="Telegram Icon" className="network"/>
            <img src={whatsapp} alt="Whatsapp Icon" className="network"/>
            <img src={facebook} alt="Facebook Icon" className="network"/>
        </div>
    )
}

export default UpperNetwork;