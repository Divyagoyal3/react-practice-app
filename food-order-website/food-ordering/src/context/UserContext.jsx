import React from 'react'
import { createContext, useState } from 'react'
import { food_items } from '../food'
export  const dataContext = React.createContext()
const UserContext = ({children}) => {
    let [input,setinput] = useState("");
    let [cate,setCate] = useState(food_items);
    let [showCart,setShowCart] = useState(false);
    let data = {
        input,
        setinput,
        cate,
        setCate,
        showCart,
        setShowCart
    }
  return (
    <div>
        <dataContext.Provider value={data}>{children}</dataContext.Provider>
      
    </div>
  )
}

export default UserContext
