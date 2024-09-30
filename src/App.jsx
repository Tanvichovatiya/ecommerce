import { HashRouter,Routes,Route} from "react-router-dom"
import Footer from "./component/footer"
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import React from "react"
import Shop from "./pages/shop"
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"
import { useState } from "react"
import Order from "./pages/order"
import FilterData from "./pages/FilterData"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"
import LoginPage from "./pages/Login"


function App() {
  const [order,setorder]=useState(null)

  return (
   <>
   
   <HashRouter>
   <Navbar/>
   <Routes>

    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/Login" element={<LoginPage/>}></Route>

    <Route path="/Shop" element={<Shop/>}></Route>
    <Route path="/Contact" element={<Contact/>} ></Route> 

    <Route path="/cart" element={<Cart/>}></Route>
     <Route path="/checkout" element={<Checkout setorder={setorder}/>} ></Route> 
     <Route path="/order-conformation" element={<Order order={order}/>} ></Route> 
     <Route path="/filter-data" element={<FilterData/>} ></Route> 
     <Route path="/Productdetail" element={<ProductDetail/>} ></Route> 
     <Route path="/:id" element={<ProductDetail/>} />


   </Routes>
   <Footer/>
   </HashRouter>
   </>
  )
}

export default App