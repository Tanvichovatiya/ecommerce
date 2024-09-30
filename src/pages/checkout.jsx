import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setorder}) => {
  const [billingToggle, setbillingToggle] = useState(true);
  const [shippingToggle, setshippingToggle] = useState(false);
  const [paymentToggle, setpaymentToggle] = useState(false);
  const [paymentMethod, setpaymentMetod] = useState("cod");
  const [shippingInfo,setshippingInfo]=useState({
    address:'',
    city:'',
    zip:''

  })
  const navigate=useNavigate()
  const handleorder=()=>{
    const neworder={
      products:cart.products,
      orderNumber:"12345",
      shippinginformation:shippingInfo,
      totalPrice:cart.totalPrice
    }
    setorder(neworder)
    navigate('/order-conformation')
    

  }
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto py-8 px-4  min-h-96 md:px-16 lg:px-24 ">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between">
              <h3
                className="text-lg font-semibold mb-2"
                onClick={() => setbillingToggle(!billingToggle)}
              >
                Billing Information
              </h3>
              {billingToggle ? (
                <FaAngleDown onClick={() => setbillingToggle(!billingToggle)} />
              ) : (
                <FaAngleUp onClick={() => setbillingToggle(!billingToggle)} />
              )}
            </div>

            <div className={`space-y-4 ${billingToggle ? " " : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-mail"
                  className="w-full px-3 py-2 border"
                />
              </div>

              <div>
                <label className="block text-gray-700">Phone </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Phone:"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>
          {/* Shipping */}
          <div className="border p-2 mb-6">
            
            <div className="flex items-center justify-between">
              <h3
                className="text-lg font-semibold mb-2"
                onClick={() => setshippingToggle(!shippingToggle)}
              >
                Shipping Information
              </h3>
              {shippingToggle ? (
                <FaAngleDown
                  onClick={() => setshippingToggle(!shippingToggle)}
                />
              ) : (
                <FaAngleUp onClick={() => setshippingToggle(!shippingToggle)} />
              )}
            </div>

            <div className={`space-y-4 ${shippingToggle ? " " : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e)=>setshippingInfo({...shippingInfo,address:e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border"
                  onChange={(e)=>setshippingInfo({...shippingInfo,city:e.target.value})}

                />
              </div>

              <div>
                <label className="block text-gray-700">Zip code</label>
                <input
                  type="number"
                  name="Zip code"
                  placeholder="Enter Zip code:"
                  className="w-full px-3 py-2 border"
                  onChange={(e)=>setshippingInfo({...shippingInfo,zip:e.target.value})}

                />
              </div>
            </div>
          </div>

          {/* payment method */}

          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between">
              <h3
                className="text-lg font-semibold mb-2"
                onClick={() => setpaymentToggle(!paymentToggle)}
              >
                Payment Method
              </h3>
              {paymentToggle ? (
                <FaAngleDown onClick={() => setpaymentToggle(!paymentToggle)} />
              ) : (
                <FaAngleUp onClick={() => setpaymentToggle(!paymentToggle)} />
              )}
            </div>

            <div className={`space-y-4 ${paymentToggle ? " " : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setpaymentMetod("cod")}
                />
                <label className="block text-gray-700  ml-2">
                  Cash On Delivery
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setpaymentMetod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit card</label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit card Information
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Number :{" "}
                    </label>
                    <input
                      type="number"
                      placeholder="Enter  Card Number:"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Holder Name :{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Holder Name:"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Expire Date :
                      </label>
                      <input
                        type="date"
                        placeholder="Enter Expire Date "
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        {" "}
                        Cvv No :{" "}
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Cvv No:"
                        className="border p-2 w-full rounded "
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold1  mb-4">Order Summery</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded" />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">{product.price} * {product.quantity}</p>
                  </div>
                </div>
                <div className="text-gray-800">
                  {product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span >Total Price:</span>
              <span className="font-semibold">{cart.totalPrice}</span>
            </div>
            <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleorder} >Place Order</button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
