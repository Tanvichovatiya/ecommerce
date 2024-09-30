import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import notAvailable from "../assets/image2/not available.jpeg"

const FilterData=()=>{
    const filterproducts=useSelector(state =>state.product.filterData)
    return (
        <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
            {filterproducts.length > 0 ? 
           <>
        <h2 className="text-2xl font-bold mb-6 text-center ">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer  ">
            {
                filterproducts.map((product)=>(
                <ProductCard product={product} key={product.id}/>
                ))
            }
        </div>
        </> :
         <div className="flex justify-center"> 
         <img src={notAvailable} alt="" />
            </div>}
    </div>
    )
}
export default FilterData;