import React from "react";
import { FaShippingFast} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
const Infosection=()=>{
    const Infoitem=[
        {
            icon:<FaShippingFast/>,
            title:"Free Shipping",
            description:"Get your orders delivered with no extra cost"
        },
        {
            icon:<FaTimeline/>,
            title:"Support 24/7",
            description:"we are here to assist you anytime",
        },
        {
            icon:<FaMoneyBill1Wave/>,
            title:"100% money return",
            description:"Full refund if you not satisfied",
        },
        {
            icon:<FaLock/>,
            title:"Payment secure",
            description:"your payment information is safe",
        },
        {
            icon:<FaTag/>,
            title:"Discount",
            description:"Enjoy the best prices on our products"
        }
    ];
    return <>

    <div className="bg-white pb-8 pt-12 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Infoitem.map((item,index)=>(
               <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md
               transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                {item.icon}
                <h3 className="text-red-700 font-semibold ">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
    </>
}
export default Infosection;