import useAxios from "../../hooks/useAxios";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import SwiperCore, {Navigation} from "swiper";
SwiperCore.use([Navigation]);

const ProductsSlider =()=>{
    const { data, error, loading } = useAxios("products");
return(
<div>
<Swiper slidesPerView={3} navigation={true} className="mySwiper">
            {data?.items?.map(item=>(
                <SwiperSlide>
                    <img src={item.images[0]} alt=""/>
                </SwiperSlide>
            ))}
            </Swiper>

</div>
)}
export default ProductsSlider