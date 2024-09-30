import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate=useNavigate();
  const onSend=(e)=>{
    e.preventDefault();
    navigate('/Home');
  }
  return (
    <>
      <div className="mt-10  mb-4 mx-auto  ">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4   md:gap-2 ">
          <div className="flex  ml-7 ">
            <span className="text-lg p-3 bg-teal-800 rounded  ">
              <FaLocationDot />
            </span>
            <p className="text-lg ml-2 ">
              43 Raymouth Rd. Baltemoer, London 3910
            </p>
          </div>
          <div className="flex ml-7 ">
            <span className="text-lg p-3  bg-teal-800 rounded ">
              {" "}
              <MdEmail />
            </span>
            <p className="text-lg ml-2 ">info@yourdomain.com</p>
          </div>
          <div className="flex  ml-7  ">
            <span className="text-lg p-3 bg-teal-800 rounded ">
              {" "}
              <FaPhoneAlt />
            </span>
            <p className="text-lg ml-2 ">+1 294 3925 3939</p>
          </div>
        </div>

       
      </div>

      <div className=" w-96 flex flex-col items-center justify-center mx-auto">
       <form className="border border-black" method="post">
        <h3 className="text-center font-semibold mt-3 mb-5">Contact Form</h3>
        <div className="text-center">
            <label htmlFor="fname" className="text-lg font-semibold"  >First Name :</label> 
            <input type="text" name="fname"  className="border-2  border-gray-500 pt-1 pb-1 pr-8 pl-8 ml-3 sm:pr-0 sm:pl-0" required/>
         </div>
         <div className="text-center mt-5" >  
            <label htmlFor="lname" className="text-lg ml-2 font-semibold">Last Name :</label>
            <input type="text" name="lname" className="border-2  border-gray-500 pt-1 pb-1 pr-8 pl-8 sm:pr-0 sm:pl-0 ml-3 " required />
           
        </div>

        <div className="mt-5 text-center">
            <label htmlFor="email" className="text-lg font-semibold">Email Address :</label>
            <input type="email" name="email" placeholder="Enter your Email" className="border-2 border-gray-500 pt-1  pb-1" required/>
        </div>

        <div className="text-center mt-5 ">
            <button className="bg-teal-700 p-2 mt-5 text-lg hover:bg-teal-800 "
             onClick={(e)=>onSend(e)} >Send Message</button>
        </div>

       </form>
      </div>
    </>
  );
};
export default Contact;
