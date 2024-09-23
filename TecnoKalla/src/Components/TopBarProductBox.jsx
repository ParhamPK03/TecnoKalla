import  { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { StoreContext } from "../Context/StoreContext";


const TopBarProductBox = ({ title, price, img, id }) => {

  const {addToCart} = useContext(StoreContext);

  return (
    <div className="w-[400px] border border-gray-300 hover:border-[#2980b9] hover:border duration-500">
      <img className="bg-gray-300 dark:bg-slate-800" src={img} alt={title} />
      <h1 className="text-[#2980b9] dark:text-white pr-2 py-2 text-xl font-[600] border-b border-gray-300 mt-2">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex text-yellow-400 text-xl mr-3">
          <FaStar className="hover:text-yellow-500" />
          <FaStar className="hover:text-yellow-500" />
          <FaStar className="hover:text-yellow-500" />
          <FaStar className="hover:text-yellow-500" />
          <FaStar className="hover:text-yellow-500" />
        </div>
        <div>
          <p className="text-red-500 text-lg font-[600] mt-2 ml-2">{price}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={()=>addToCart(id)}
            className="bg-green-600 w-[120px] h-[40px] text-white text-lg mt-3 rounded-tl-[30px] cursor-pointer hover:opacity-90 hover:bg-red-600 duration-300"
          >
            خرید محصول
          </button>
        </div>
        <div className="flex gap-3 text-2xl text-gray-400 ml-2">
          <AiFillLike className="hover:text-green-500 cursor-pointer duration-300" />
          <AiFillDislike className="mt-1 hover:text-red-600 cursor-pointer duration-300" />
        </div>
      </div>
    </div>
  );
};



export default TopBarProductBox;
