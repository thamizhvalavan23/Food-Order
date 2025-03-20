import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './Footer/Footer';
import Loginpopup from './Loginpopup/Loginpopup';


const App = () => {

   const [Showlogin, setShowlogin] = useState(false);
  return (
    <>

      <div className='app'>
        {(Showlogin?<Loginpopup setShowlogin={setShowlogin} /> :<></>)}
        <Navbar  setShowlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}


export default App
