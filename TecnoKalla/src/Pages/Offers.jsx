
import { ImCross } from "react-icons/im";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function Offers() {
  return (
    <div>
    <Navbar/>
    <div className="bg-gray-300 dark:bg-slate-800">
      
        <div className="flex justify-center  rounded-[20px] relative my-16 m-auto h-[60vh] ">
          <div className="flex items-center justify-center m-auto md:w-[600px] xs:w-[400px] mt-10 rounded-lg h-[50px]  absolute bg-white dark:bg-slate-700">
            
            <ul className="flex items-center justify-center m-auto lg:gap-7 sm:gap-2 xs:gap-1 lg:text-lg xs:text-md text-[#f97316]  ">
              <li className="cursor-pointer p-1 hover:bg-[#d4d4d8] rounded-[40px]">تخفیف ها</li>
              <li className="cursor-pointer p-1 hover:bg-[#d4d4d8] rounded-[40px] ">تخفیف ویژه</li>
              <li className="cursor-pointer p-1 hover:bg-[#d4d4d8] rounded-[40px] ">کد تخفیف</li>
              <li className="cursor-pointer p-1 hover:bg-[#d4d4d8] rounded-[40px]">فوق العادی</li>
            </ul>
            <div>
                
            </div>
            
          </div>
          <div className="flex items-center justify-center m-auto">
          <h1 className="xl:text-4xl  lg:text-4xl md:text-3xl  xs:text-xl text-[#dc2626] mt-[200px]   font-[400]">تخفیفی یافت نشد</h1>
          <label className="xl:text-4xl lg:text-2xl md:text-xl sm:text-md xs:text-sm  text-[#b91c1c] mt-[200px] pr-5"  htmlFor=""><ImCross /></label>
          </div>
         
          
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Offers
