import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({Category, setCategory}) => {

   
  return (
    <div>
        <div className="explore-list">
            <div className="explore-text">
                <h1>Explore-Menu-List</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolore ratione corrupti recusandae accusamus.</p>
            </div>
            <div className="explore-image-list">
            {
                menu_list.map((item, index)=>{
                    return(
                        <div key={index}  onClick={()=>setCategory(prev=>prev === item.menu_name ? "All" :item.menu_name)} className="explore-image">
                            <img src={item.menu_image} alt='menuimage'  className= {Category === item.menu_name? "active" :""}/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default ExploreMenu
