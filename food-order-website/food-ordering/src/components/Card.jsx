import React from 'react'
// import image from "../assets/image.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';


function Card({name,image,id,price,type}){
    let dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart); 
    return (
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2
         border-green-300'>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover ' />
            </div>
            <div className='font-semibold text-2xl'>
               {name}
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>Rs {price}/-</div>
                <div className='flex justify-between items-center gap-2 text-green-500 text-lg font-bold'>
                   {type ==="veg"?<LuLeafyGreen />:<GiChickenOven/>} <span>{type}</span></div>
            </div>
            <button onClick={() => {dispatch(addToCart({id:id,name:name,price:price,image:image,qty:1})); toast.success("Item Added")}} className='w-full h-[40px] bg-green-400 rounded-md flex justify-center items-center  hover:bg-green-500  text-white font-semibold cursor-pointer transition-all duration-200'>
                Add to Cart
            </button>
        </div>
    
    )
}
 

export default Card
