import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import './Verify.css';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                if (!success || !orderId) {
                    navigate("/"); // Redirect if params are missing
                    return;
                }

                const response = await axios.post(`${url}/api/order/verify`, { success, orderId });

                if (response.data.success) {
                    alert(response.data.message);
                    navigate("/myorders");
                } else {
                    alert("Payment Failed");
                    navigate("/");
                }
            } catch (error) {
                console.error("Payment verification failed:", error);
                alert("Something went wrong. Please try again.");
                navigate("/");
            }
        };

        verifyPayment();
    }, [success, orderId, url, navigate]); // Add dependencies

    return (
        <div className='verify'>
            <div className="spinner"></div>
        </div>
    );
};

export default Verify;
