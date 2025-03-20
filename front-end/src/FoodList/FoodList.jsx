import React, { useContext } from 'react'
import './FoodList.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/CreateContext'

const FoodList = ({id,name,price,image,discription}) => {

    
    const {cartitem, addtocart, removecart} = useContext(StoreContext)

  return (
    <div>
        <div className="Foodlist-list">
            <div className="Food-list-image">
                <img src={image} className='add' alt='addimage' />
                {!cartitem[id]
                ?<img src={assets.add_icon_white} alt='photos' className='cart' onClick={()=>addtocart(id)} />:
                <div className='adding-logo'>
                    <img src={assets.add_icon_green} alt='addto' className='adding' onClick={()=>addtocart(id)} />
                    <p className='count'>{cartitem[id]}</p>
                    <img src={assets.remove_icon_red} alt='addto' className='adding' onClick={()=>removecart(id)} /> 
                </div>
                }
                
                <div className="Food-list-text">
                    <p className='name'>{name}</p>
                    <div className="Food-list-review">
                        <img src={assets.rating_starts} alt='rating' className='rating'/>
                    </div>
                    <div className="Food-list-price">
                        <p className='price'>${price}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FoodList