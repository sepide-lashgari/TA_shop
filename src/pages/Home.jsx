import React from "react"
import Carousel from "../components/Carousel/Carousel";
import Category from "../components/category/Category";
import ProductsSlider from "../components/products-slider/ProductsSlider";


const Home = () => {


    return(
        <div>

           <Carousel/>
           <Category/>
           <ProductsSlider/>
           

        </div>
    )
}

export default Home