import React from "react";
import Mencategory from "../assets/image2/men.jpeg";
import Womencategory from "../assets/image2/women.jpeg";
import Kidcategory from "../assets/image2/Kid.jpeg";

const Categorysection=()=>{
    const categories=[
        {
             title:"Women",
             imageurl:Womencategory,  
        },
        {
            title:"Men",
            imageurl:Mencategory,
        },
        {
            title:"Kid",
            imageurl:Kidcategory   
        },
    ]
    return <>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  gap-6 cursor-pointer">
       {categories.map((category,index)=>(
        <div key={index} className="relative h-64   transform transition-transform duration-300 hover:scale-105 ">
            <img src={category.imageurl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
            <div className="absolute top-20 left-12">
                <p className="text-xl font-vold">{category.title}
                </p>
                <p className="text-gray-600">View All</p>
            </div>
            </div>
       ))}
    </div>
    </>
}
export default Categorysection;