import React, { use, useContext,useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
function Nav  ()  {
  let { input, setinput, cate, setCate,showCart,setShowCart } = useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter((item) => {
      return item.food_name.toLowerCase().includes(input.toLowerCase());
    });
    setCate(newlist);
     console.log(newlist);
  }, [input]);
    // console.log(input);  
    let items = useSelector((state) => state);
    console.log(items);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center shadow-lg rounded-md ">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        className="w-[50%] h-[60px] md: wd-[80%] bg-white flex items-center px-5 gap-5 shadow-md rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-green-500 w-[20px] h-[20px] rounded shadow-lg" />
        <input
          type="text"
          placeholder="Search food items"
          className=" w-[100%]  text-[16px] md:text-[20px] border-none 
                outline-none  h-[40px] rounded-md "
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
      </form>
      <div className="w-[60px] h-[60px] bg-white  relative flex justify-center items-center shadow-lg rounded-md cursor-pointer " onClick={()=>setShowCart(true)}>
        <span className="text-green-500 text-[18px] absolute top-0 right-1.5 font-semibold">
        {items.cart.length}
        </span>
        <LuShoppingBag className=" w-[30px] h-[30px] text-green-500  font-bold" />
      </div>
    </div>
  );
};

export default Nav;
