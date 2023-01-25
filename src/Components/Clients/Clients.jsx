import React from "react";
import ClientsBlock from "./Clients-block/Clients-block";
import './Clients.css'

function Clients (props) {
    return (
        <div className="clients">
            <h2 className="titleH2 clientsTitle">НАШИ КЛИЕНТЫ</h2>
            <ClientsBlock data={props.data}/>
        </div>
    )
}

export default Clients;