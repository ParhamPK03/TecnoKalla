import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import image1 from "../../public/images/Untitled-1.png"
import { FaArrowTrendUp } from "react-icons/fa6";



function Wallet() {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center my-10"> 
        <div className="flex items-center justify-center m-auto w-[300px]"><img src={image1} alt="" /></div>
          <h1 className="text-orange-600 text-3xl mt-7">چیزی یافت نشد</h1>
      </div>  
      <div className="flex flex-col items-start justify-center ">
      <div className="pt-10 m-auto mb-16 rounded-lg bg-slate-200 mt-10 dark:bg-slate-800 w-[60%] h-[300px]">
        <div className="flex pr-10 items-center gap-2 "> 
        <label htmlFor="" className="text-2xl text-red-500 mr-[28px]"><FaArrowTrendUp /></label>
        <h1 className="lg:text-xl md:text-lg xs:text-md text-blue-500 dark:text-blue-200">جهت افزایش موجودی</h1>
        </div>
        
      <input className="flex items-center justify-center mx-auto xl:w-[700px] lg:w-[580px] md:w-[400px] sm:w-[350px] xs:w-[250px] hover:bg-slate-100 bg-white mt-7 dark:bg-slate-700  h-[50px] outline-blue-500  placeholder:text-lg placeholder:pr-2 dark:placeholder:text-white" placeholder="حداقل ورودی" type="text" />
      <input className=" flex items-center justify-center xl:w-[700px] lg:w-[580px] md:w-[400px] sm:w-[350px] xs:w-[250px] mx-auto hover:bg-slate-100 bg-white mt-7 dark:bg-slate-700 h-[50px] outline-blue-500  placeholder:text-lg placeholder:pr-2 dark:placeholder:text-white" placeholder="حد اکثر ورودی" type="text" />
      <button className="w-[150px] mr-5 hover:opacity-80 mt-7 bg-blue-500 h-[40px] rounded-lg text-white">ثبت</button>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Wallet
