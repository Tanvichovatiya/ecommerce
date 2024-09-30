import React, { useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "../assets/mockData";
import { addTocart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const { id } = useParams();
  const product = mockData[id];
  const [img, setimg] = useState(product.images[0]);
  const dispatch=useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleaddToCart=(e,product)=>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(addTocart(product));
    alert("product added successfully");

}
  return (
    <div>
      <div className="grid grid-cols-2  gap-4">
        <div className=" ml-5 mt-8 w-[97%]">
          <img
            src={img}
            alt=""
            className="shadow-md mb-4 w-[600px] border  h-[550px]"
          />
          <div className="w-full grid grid-cols-3 gap-1 mb-5">
            <img
              src={product.images[1]}
              onClick={() => setimg(product.images[1])}
              alt=""
              className="w-[150px] h-[200px] border"
            />
            <img
              src={product.images[2]}
              onClick={() => setimg(product.images[2])}
              alt=""
              className="w-[150px] h-[200px] border"
            />
            <img
              src={product.images[3]}
              onClick={() => setimg(product.images[3])}
              alt=""
              className="w-[150px] h-[200px] border "
            />
          </div>
        </div>

        <div className="w-[100%] mr-5 ">
          <h2 className="mt-20 font-bold text-[30px]">{product.name}</h2>
          <p className="mt-5 text-[20px] font-semibold">{product.price}</p>
          <p className="mt-5 text-[15px] "> Provide accurate sizing information and details about the fit. You can also include whether the clothing runs small, large, or true to size</p>
          <button className="mt-10 sm:mt-4 sm:mb-3 bg-red-700 px-4 py-3 rounded-full" onClick={(e)=> handleaddToCart(e,product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
