import React from "react";


let FooterContactsItem = props => {
    return (
        <div className="contactItem">
            <p className="text">{props.data.firstString}</p>
            <p className="text">{props.data.secondString}</p>
        </div>
    )
}

export default FooterContactsItem;