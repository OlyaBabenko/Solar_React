import React from "react";
import image from '../../../../assets/image/green-t/image-house.jpg';
import './Right.css';

function Right () {
    return (
        <div className="right">
            <p className="titleH3 rightText">«Зеленый тариф» — это особые тарифные условия, которые позволяют частным домохозяйствам  не только потреблять, но и продавать выработанное домашними солнечными электростанциями электричество в электросеть общего пользования.</p>
            <img src={image} alt="Image" className="rightImage"/>
        </div>
    )
}

export default Right;