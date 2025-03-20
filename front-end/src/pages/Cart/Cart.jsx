import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/CreateContext';
import {useNavigate} from 'react-router-dom';

const Cart = () => {

  const { food_list, removecart, cartitem, totalgetamount } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div>
      <div className="cart-menu">
        <div className="cart-title">
          <div className="cart-list">
            <p className='title'>Item</p>
            <p className='title'>Name</p>
            <p className='title'>Price</p>
            <p className='title'>Quantity</p>
            <p className='title'>Total</p>
            <p className='title'>Remove</p>
          </div>
          <br></br>
        </div>
        <hr></hr>
        <div className="cart-details">
          {
            food_list.map((item, index) => {
              if (cartitem[item._id] > 0) {
                return (
                  <div>
                    <div className='cart-info  cart-list'>
                      <img src={item.image} alt='image' />
                      <p>{item.name}</p>
                      <p>$ {item.price}</p>
                      <p>{cartitem[item._id]}</p>
                      <p>$ {item.price * cartitem[item._id]}</p>
                      <p className="closer" onClick={() => removecart(item._id)}>X</p>
                    </div>
                    <hr></hr>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
      <div className="checkout-list">
        <div className="checkout-menu">
          <div className="checkout-total">
            <p>Sub Total</p>
            <p>$ {totalgetamount()}</p>

          </div>
          <hr></hr>
          <div className="checkout-total">
            <p>Delivery Fee</p>
            <p>$ {totalgetamount()=== 0 ? 0 :50}</p>

          </div>
          <hr></hr>
          <div className="checkout-total">
            <b>Total</b>
            <p className='total'>${totalgetamount()===0?0:totalgetamount()+50}</p>
          </div>

          <hr></hr>
          <div className="checkout-order">
            <button type='submite' onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart
