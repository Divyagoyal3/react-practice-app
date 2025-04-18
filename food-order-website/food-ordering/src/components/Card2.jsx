import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, removeFromCart } from '../redux/CartSlice';
const Card2 = ({name,id,price,image,qty}) => {
  let dispatch = useDispatch();
  return (
    <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between '>
      <div className='w-[60%] h-full  flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg'><img src={image} alt="" className='object-cover' /></div>
        <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-gray-500 font-semibold'>{name }</div>
            <div className='w-[110px]  h-[50px] bg-slate-400 flex rounded-lg overflow-hidden  text-xl font-semibold border-2 border-green-500'>
                <button onClick = {()=>qty > 1 ? dispatch(DecrementQty(id)): 1 } className='w-[30%] h-full text-green-500 bg-white flex justify-center items-center hover:bg-gray-100'>-</button>
                <span className='w-[40%] h-full text-green-500 bg-slate-200 flex justify-center items-center'>{qty}</span>
                <button onClick= {()=> dispatch(IncrementQty(id))} className='w-[30%] h-full text-green-500 bg-white flex justify-center items-center hover:bg-gray-100' >+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-5'>
       <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
        <RiDeleteBin4Fill className='text-red-500 text-xl hover:text-red-700 cursor-pointer' 
        onClick={()=> dispatch(removeFromCart(id))}/>
      </div>
    </div>
  )
}

export default Card2
