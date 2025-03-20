import React, { useState } from 'react'
import './Loginpopup.css'
import {assets} from '../assets/assets'

const Loginpopup = ({setShowlogin}) => {
  const [Currstat, setCurrestat] = useState("signup")
  return (
    <div>
      <div className="form-container">
        <form className='form-container-main'>
          <h2>{Currstat}</h2>
          <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt='close' className='close' />
          <div className="form-container-content">
            {Currstat==="login"?<></>:<input type='text' placeholder='Enter Name' required /> }
            <input type='text' placeholder='Enter Gmail' required />
            <input type='password' placeholder='Your password' required />
           </div>
           <div className="form-condtion">
            <input type='checkbox'/><p>Term & and condtion apply</p>
           </div>
           <div className="form-login">
            {Currstat==='login'
             ?
              <p>Create new account <span onClick={()=>setCurrestat("signup")}>here</span></p>
      
             :<p>Already have account <span onClick={()=>setCurrestat("login")}>login</span></p> 
            }
           </div>
           <div className="form-button">
            <button>{Currstat==="login"?"Login":"Create Account"}</button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Loginpopup