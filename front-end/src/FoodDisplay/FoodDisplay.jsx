import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/CreateContext'
import FoodList from '../FoodList/FoodList'

const FoodDisplay = ({Category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div>
        <div className="FoodDisplay-list">
            <div className="FoodDisplay-list-text">
                <h1>Top dishes Near you</h1>
            </div>
            <div className="FoodDisplay-list-items">
            {
                food_list.map((item, index)=>{
                    {console.log(Category,item.Category);}

                    if(Category==="All" || Category===item.Category) {
                       
                    }
                    return <FoodList key={index} id={item._id} name={item.name} price = {item.price} image = {item.image} discription={item.discription}/>
                   
                   
                })

            }
            </div>

        </div>
    </div>
  )
}

export default FoodDisplay