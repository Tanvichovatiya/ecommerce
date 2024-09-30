import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTocart } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const ProductCard=({product})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleaddToCart=(e,product)=>{
        e.stopPropagation();
        e.preventDefault();
        dispatch(addTocart(product));
        alert("product added successfully");

    }
    return <>
    <div className="container bg-white shadow-md rounded relative  py-4     transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img  src={product.image} alt=""   className="w-full h-24  mb-4 object-contain "
      />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="font-gray=500"> {product.price}</p>
        <div className="flex items-center mt-2">
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
             <FaStar className="text-yellow-500"/>
             <FaStar className="text-yellow-500"/>
        </div>
        <Link to={`/${product.id}`} className="text-blue-500  mt-8 hover:underline">
              View Details
            </Link>
        <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full  transition-all hover:w-32 hover:bg-red-700
         " onClick={(e)=> handleaddToCart(e,product)}>
            <span className="group-hover:hidden " >+</span>
            <span className="hidden group-hover:block" >Add to cart</span>
            
        </div>
    </div>
    
    </>
}
export default ProductCard;