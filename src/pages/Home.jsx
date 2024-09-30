import React, { useEffect, useState } from "react";
import mockData, { categories } from "../assets/mockData";
import Infosection from "../component/infoSection";
import Categorysection from "../component/categoryection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import Shop from "./shop";
import hero1 from "../assets/image2/hero1.jpeg";
import hero2 from "../assets/image2/hero2.avif";
import hero3 from "../assets/image2/hero3.jpeg";
import ImageSlider from "../component/heroimage";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const images = [hero1, hero2, hero3];
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <>
   <div className="w-[95%] mx-auto mt-[2%] h-auto ">
   <img src={hero2} alt="" className="w-[90%] mx-auto h-[70%]" />
   </div>
       <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 "> 
       

      
        {/* <ImageSlider/> */}
        <Infosection />
        <Categorysection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center ">Top Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer  ">
            {products.products.slice(0, 5).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
        <Shop />
    </div>
    </>
  );
};
export default Home;
