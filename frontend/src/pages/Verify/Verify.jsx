// import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Verify.css'
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success)
        {
            alert(response.data.message);
            navigate("/myorders");
        }
        else
        {
            alert("Payment Failed");
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

    return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}
export default Verify