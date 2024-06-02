/* eslint-disable react/prop-types */
import { assets } from '../../assets/assets'
import './LoginPopup.css'
import { useState } from 'react'
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sing up")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
          <input type="email" placeholder='Yor Email' required/>
          <input type="password" placeholder='Password' required/>
          <button>{currentState==="Sign up"?"Create Account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing I agree with the privacy policy.</p>
          </div>
          {currentState==="Login"?<p>Create a new account ? <span onClick={()=>setCurrentState("Sign up")}>Click Here</span></p>:<p>Already have an account <span onClick={()=> setCurrentState("Login")}>Login here</span></p>}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup