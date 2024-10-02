import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector} from "react-redux";

import { setSearchTerwm } from "../redux/productSlice";
setSearchTerwm

const Navbar=()=>{
    const [isModalOpen,setIsModalOpen]=useState(false)
    const dispatch =useDispatch()
    const navigate=useNavigate()
  
    const [search,setSearch]=useState()
    const handleSearch=(e)=>{
        e.preventDefault()
        dispatch(setSearchTerwm(search))
        navigate('/filter-data')
    }

const products=useSelector(state => state.cart.products)
    return <>
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 flex items-center justify-between">
            <div className="font-bold text-lg">
                <Link to="/">e-shop</Link>
            </div>
            <div className="relative flex-1 mx-4 " > 
                <form onSubmit={handleSearch}>
                    <input type="text"  className="w-full border py-2 px-4" placeholder="Search product" onChange={(e)=>setSearch(e.target.value)} />
                    <FaSearch className="absolute top-3 right-3 text-red-500"/>
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/cart" className="relative">
                <FaShoppingCart className="text-lg"/>
                    {products.length > 0 && (
                        <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full text-white flex justify-center items-center ">
                            {products.length}
                        </span>
                    )}
                
                </Link>
                <button className="hidden md:block px-5 py-2 rounded-full bg-red-700 hover:bg-red-800 "  onClick={()=>navigate('/Login')}>
                    Login
                </button>
                <button className="block md:hidden " onClick={()=>setIsModalOpen(true)}>
                    <FaUser/>
                </button>
            </div>
        </div>
        <div className="flex items-center justify-center  space-x-10 py-4 text-sm font-bold">
            <Link to="/Home"  className="hover:underline">Home</Link>
            <Link to="/Shop" className="hover:underline">Shop</Link>
            <Link to="/Contact"className="hover:underline">Contact</Link>

        </div>
      
    </nav>
    </>
}
export default Navbar;