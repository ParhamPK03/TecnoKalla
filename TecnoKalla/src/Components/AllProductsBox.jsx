import { FaStar } from "react-icons/fa";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useContext } from "react";
import {StoreContext} from "../Context/StoreContext"

const AllProductsBox = ({title,price,img,id}) => {
    
  const {addToCart} = useContext(StoreContext);

    return (
      <div className="w-[400px] border rounded-3xl border-gray-300  hover:border-[#2980b9] hover:border  duration-500 ">
        <div className="bg-gray-300 dark:bg-slate-800 rounded-t-3xl">
        <img className="w-[200px] py-5 mr-[90px]" src={img}/>
        </div>
        <h1 className="text-[#2980b9] text-xl font-[600] border-b border-gray-300 mt-2 pr-2">{title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex text-yellow-400 text-xl mr-3">
          <FaStar className="hover:text-yellow-500"/>
        <FaStar className="hover:text-yellow-500"/>
        <FaStar className="hover:text-yellow-500"/>
        <FaStar className="hover:text-yellow-500"/>
        <FaStar className="hover:text-yellow-500"/>
          </div>
          <div>
          <p className="text-red-500 text-lg font-[600] mt-2 ml-2">{price}</p>
          </div>
        
        </div>
        
        <div className="flex items-center justify-between">
        
        <div>
        <button onClick={()=>addToCart(id)}  className="bg-green-600 rounded-br-3xl  w-[120px] h-[40px] text-white text-lg mt-3 rounded-tl-[30px] cursor-pointer hover:opacity-90 hover:bg-red-600 duration-300">خرید محصول</button>
        </div>
        <div className="flex  gap-3 text-2xl text-gray-400 ml-2 ">
        <AiFillLike className="hover:text-green-500  cursor-pointer duration-300"/>  
        <AiFillDislike className="mt-1 hover:text-red-600 cursor-pointer duration-300"/> 
        </div>
        </div>
      </div>
    )
  }

  export default AllProductsBox



