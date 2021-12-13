import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, {
    Pagination,Navigation
} from 'swiper';
import item1 from "../../assets/images/1.jpg"

const Carousel = () => {

// install Swiper modules
    SwiperCore.use([Pagination,Navigation]);

        return (
            <>
                <Swiper pagination={{
                    "type": "progressbar"
                }} navigation={true} className="mySwiper">
                    <SwiperSlide>
                        <img className="col-12" src={item1} alt=""/>

                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </>
        )
};

export default Carousel;