import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptycart from "../assets/image2/emptycart.jpeg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../component/Modal";
import ChangeAddress from "../component/ChangeAddress";
import { decreasequantity, increasequantity, removeFromcart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("nirmala road");
  const [isModelOpen , setisModelOpen]=useState(false);
   const dispatch=useDispatch()
   const navigate=useNavigate()
   
  return (
    <>
      <div className="container mx-auto py-8 px-4  min-h-96 md:px-16 lg:px-24 ">
        {cart.products.length > 0 ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Shopping cart</h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
              <div className="md:w-2/3">
                <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                  <p>PRODUCTS</p>
                  <div className="flex space-x-8 ">
                    <p className="px-2">Price</p>
                    <p className="px-3">Quantity</p>
                    <p>SubTotal</p>
                    <p>Remove</p>
                  </div>
                </div>
                <div>
                  {cart.products.map((product,id) => (
                    <div
                      key={id}
                      className="
                    flex items-center justify-between p-3 border-b"
                    >
                      <div className="md:flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt=""
                          className="w-16 h-16 object-contain rounded"
                        />
                        <div className="flex-1 ml-4">
                          <h3 className="text-lg font-semibold">
                            {product.name}
                          </h3>
                        </div>
                      </div>
                      <div className="flex space-x-12 items-center">
                        <p>{product.price}</p>
                        <div className="flex items-center justify-center border">
                          <button className="text-xl font-bold px-1.5 border-r" onClick={()=>dispatch(decreasequantity(product.id))}>
                            -
                          </button>
                          <p className="text-xl px-2">{product.quantity}</p>
                          <button className="text-xl px-1 border-l" onClick={()=>dispatch(increasequantity(product.id))}>+</button>
                        </div>
                        <p>{product.quantity * product.price}</p>
                        <button className="text-red-500 hover:text-red-700" onClick={()=>dispatch(removeFromcart(product.id))}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-sm  font-semibold mb-5">Cart Total</h3>
                <div className="flex justify-between mb-5 border-b pb-1">
                  <span className="text-sm">Total items:</span>
                  <span>{cart.totalQuantity}</span>
                </div>

                <div className="mb-4 border-b pb-2">
                  <div>
                    <p>Shipping :</p>
                    <p className="pb-2">Shipping to{""}
                    <span className="text-sm font-bold">{address}</span></p>
                    <button className="text-blue-500 hover:underline mt-1 ml-2" onClick={()=>setisModelOpen(true)}>change addresss</button>
                  </div>
                  <div className="flex justify-beetween mb-4">
                    <span>Total Price:</span>
                    <span>{cart.totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-red-600 text-white py-2 hover:bg-red-700" onClick={()=>navigate('/checkout')}>Proced to checkout</button>
                </div>
              </div>
            </div>
          <Modal isModelOpen={isModelOpen} setisModelOpen={setisModelOpen} 
         children={<ChangeAddress setAddress={setAddress} setisModelOpen={setisModelOpen}/>}
          > </Modal>
           </div>
        ) : (
          <div className="flex  justify-center ">
            <img src={emptycart} className="h-96"></img>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
