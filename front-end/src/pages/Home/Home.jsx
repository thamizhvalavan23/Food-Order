import React, { useState } from 'react';
import './Home.css';
import ExploreMenu from '../../ExploreMenu/ExploreMenu';
import Walpaper from '../../walpaper/Walpaper';
import FoodDisplay from '../../FoodDisplay/FoodDisplay';

const Home = () => {
  const [Category, setCategory]  = useState("All")
  return (
    <div>
      <Walpaper />
        <ExploreMenu Category={Category} setCategory={setCategory} />
        <FoodDisplay Category={Category} />
    </div>
  )
}

export default Home
