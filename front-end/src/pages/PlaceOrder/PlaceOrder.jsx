import React, { useContext } from 'react'
import './PlaceOrder.css';
import { StoreContext } from '../../Context/CreateContext';

const PlaceOrder = () => {

   const {totalgetamount} = useContext(StoreContext)
  return (
    <div>
      <form className='order-list'>
        <div className="order-right">
          <h1>Delivery Information</h1>
          <div className="order-name-list">
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
          </div>
          <div className="order-gmail">
            <input type='text' placeholder='Gmail' />
          </div>
          <div className="order-location">
            <input type='text' placeholder='state' />
            <input type='text' placeholder='cuntre' />
          </div>
          <div className="order-home">
            <input type='text' placeholder='Home or Flate' />
          </div>
          <div className="order-number">
            <input type='text' placeholder='House No' />
          </div>
          <div className="order-phone">
            <input type='text' placeholder='Mobile No' />
          </div>
        </div>
        <div className="order-left">
        <div className="checkout-list">
        <div className="checkout-menu">
          <div className="checkout-total">
            <p>Sub Total</p>
            <p>$ {totalgetamount()}</p>

          </div>
          <hr></hr>
          <div className="checkout-total">
            <p>Delivery Fee</p>
            <p>$ {totalgetamount()===0?0:50}</p>

          </div>
          <hr></hr>
          <div className="checkout-total">
            <b>Total</b>
            <p className='total'>${totalgetamount()===0?0:totalgetamount()+50}</p>
          </div>

          <hr></hr>
          <div className="checkout-order">
            <button type='submite'>PROCEED TO payment</button>
          </div>
        </div>
      </div>

        </div>
      </form>
      
    </div>
  )
}

export default PlaceOrder;
