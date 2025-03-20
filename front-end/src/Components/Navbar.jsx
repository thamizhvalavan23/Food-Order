import React, { useContext, useState } from 'react';
import './navbar.css';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/CreateContext';


const Navbar = ({setShowlogin}) => {

    const [menu, setmenu] = useState('All');
    const {totalgetamount} = useContext(StoreContext)
  return (
    <div>
        <div className='navbar-menu'>
       <Link to= '/'><img src={assets.logo} alt='Navbra' className='logo' /> </Link>
       
        <div className='navbar-menu-list'>
           <Link to='/'><li onClick={()=>setmenu('home')} className={menu==='home'? 'active' : ""}>home</li></Link> 
            <li onClick={()=>setmenu('Mobile-app')} className={menu==='Mobile-app'? 'active' : ""}>Mobile-app</li>
            <li onClick={()=>setmenu('Location')} className={menu==='Location'? 'active' : ""}>Location</li>
            <li onClick={()=>setmenu('Contact')} className={menu==='Contact'? 'active' : ""}>Contact</li>
        </div>
        <div className="navbar-menu-login">
            <img src={assets.search_icon} alt='search' className='search'/>
           <Link to='/cart'><img src={assets.basket_icon} alt= 'bag' className='basket' /></Link> 
            <div className={totalgetamount()===0 ? "": "add-item"}></div>
            <div className="login-button">
                <button type='submite' onClick={()=>setShowlogin(true)}>Register</button>
            </div>
                    
    </div>
    </div>
    </div>
  )
}

export default Navbar
