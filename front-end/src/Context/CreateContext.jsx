import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const [cartitem, setCartitem] = useState({})

    const addtocart = (itemId)=>{
       if (!cartitem[itemId]){
        setCartitem((prev)=>({...prev,[itemId]:1}))
       }
       else{
       setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       }
    }

    const removecart = (itemId)=>{
        setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    const totalgetamount = ()=>{
        let totalprice = 0;
        for (const item in cartitem){
            if(cartitem[item] > 0){
                let iteminfo = food_list.find((product)=>product._id===item);
                totalprice += iteminfo.price * cartitem[item] 
    
            }
        }
        return totalprice;
       }





    const userContext = {
        food_list,
        addtocart,
        removecart,
        setCartitem,
        cartitem,
        totalgetamount
    }

   

    return(
        <StoreContext.Provider value={userContext} >
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider;