import React from "react"
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import SwiperCore, {Navigation} from "swiper";
import "./Carousel.css"
import useAxios from "../../hooks/useAxios"

SwiperCore.use([Navigation]);

const Carousel = () => {
    const { data, error, loading } = useAxios("carousel");
    console.log("data")
    return(
        <Swiper navigation={true} className="mySwiper">
            {data.map(item=>(
                <SwiperSlide>
                    <img src={item} alt=""/>
                </SwiperSlide>
            ))}
            
        </Swiper>
    )
}

export default Carousel