import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import './Clients-block.css';
import './slider.css'
import firstImg from '../../../assets/image/our-clients/our-client1.jpg';
import secondImg from '../../../assets/image/our-clients/client2.jpg';
import thirdImg from '../../../assets/image/our-clients/client3.jpg';
import button from '../../../assets/image/our-clients/button.png';

function Client(props) {
    return (
        <div className="client">
            <img src={props.img} alt="image" className="clientImg"/>
            <div className="clientInfoBlock">
                <h3 className="titleH3 clientSubtitle">{props.data.title}</h3>
                <div className="clientInfo">
                    <p className="textSmall clientInfoItem">{props.data.location}</p>
                    <p className="textSmall clientInfoItem">{props.data.income}</p>
                    <p className="textSmall clientInfoItem">{props.data.mounted}</p>
                    <p className="textSmall clientInfoItem">{props.data.serviceTime}</p>
                </div>
                <div className="clientButtonBlock">
                    <img src={button} alt="button" className="clientButton"/>
                    <p className="text clientConsultation">записаться на консультацию</p>
                </div>

            </div>

        </div>
    )
}

function ClientsBlock(props) {
    return (
        <section className="clientsBlock">

            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                className="mySwiper">

                <SwiperSlide>
                    <Client data={props.data.firstClient} img={firstImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Client data={props.data.secondClient} img={secondImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Client data={props.data.thirdClient} img={thirdImg}/>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default ClientsBlock;