import React, { useState } from "react";


const ChangeAddress=({setAddress,setisModelOpen})=>{
    const [newaddress,setnewaddress]=useState("")
    const onClose=()=>{
      setAddress(newaddress)
      setisModelOpen(false)
    }
    return (
<div>
  <input type="text" placeholder="Enter New Address" className="w-full border p-2 mb-4"
  onChange={(e)=>setnewaddress(e.target.value)} />
  <div className="flex justify-end">
    <button className="bg-gray-500 text-white  py-2 px-4 rounded mr-2" onClick={()=>setisModelOpen(false)} >Cansel</button>
    <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={()=>onClose()}>Save Address</button>
  </div>
</div>

    )
}
export default ChangeAddress;