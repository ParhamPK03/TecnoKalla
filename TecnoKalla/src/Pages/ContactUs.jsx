import { BsPersonStanding } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia"; 
import { PiPhoneCallFill } from "react-icons/pi"; 
import img1 from "../../public/images/Untitled-1.png55.png"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function ContactUs() {
  return (
    <div>
     <Navbar/>
    <div className="bg-gray-200 h-[210vh] dark:bg-slate-900 pt-10">
      <div className="w-[95%] h-[200vh] m-auto bg-white dark:bg-slate-800 rounded-[20px] ">
        <h1 className="text-3xl font-[800] text-gray-800 dark:text-white p-7">تماس با ما</h1>
        <hr className="w-[95%] m-auto" />
        <div className="flex items-center mt-[60px] justify-between ">
          <div className="flex flex-col gap-8 mr-10 text-white">
            <div className="bg-blue-700 xs:w-[150px]  xs:h-[50px]  md:w-[250px] lg:h-[70px] xl:w-[350px] cursor-pointer flex gap-5 rounded-[10px] items-center px-5">
              <label htmlFor=""><BsPersonStanding className="xs:text-xs md:text-xl" /></label>
              <h2 className=" xs:text-xs md:text-md lg:text-[15px]">رزرو جهت مشاوره حضوری</h2>
            </div>
            <div className="bg-gray-400 cursor-pointer xs:w-[150px]  xs:h-[50px] md:w-[250px] lg:h-[70px] xl:w-[350px] flex gap-5 rounded-[10px] items-center px-5">
              <label htmlFor=""><LiaTelegram className=" xs:text-sm md:text-xl"  /></label>
              <h2  className=" xs:text-xs md:text-md lg:text-lg">شروع گفتگو در تلگرام</h2>
            </div>
            <div className="bg-gray-400 cursor-pointer xs:w-[150px]  xs:h-[50px] lg:h-[70px] md:w-[250px] xl:w-[350px] flex gap-5 rounded-[10px] items-center px-5">
              <label htmlFor=""><PiPhoneCallFill className=" xs:text-sm md:text-xl"  /></label>
              <h2  className=" xs:text-xs md:text-md lg:text-lg">تماس تلفونی با ما</h2>
            </div>
          </div>
          <div>
            <img src={img1} alt="" className="w-[100%] " />
          </div>
        </div>
        
        <h1 className="md:text-2xl text-lg font-[800] text-gray-800 p-7 dark:text-white">نظر خود را با ما در میان بگذارید</h1>
        <hr className="w-[95%] m-auto" />
        <div className="flex flex-col items-start">
        <h2 className="text-lg mt-10 mr-10 dark:text-white">دیدگاه شما <span className="text-red-600 mr-3">*</span></h2>
        <input type="text" className="flex items-center justify-center m-auto w-[95%] h-[250px] rounded-xl outline-blue-500   mt-10 border border-gray-300 px-3 dark:bg-slate-700 placeholder:text-gray-700 pb-[200px] dark:placeholder:text-white placeholder:text-lg" placeholder="نظر خود را وارد کنید"  />
        <div className="flex items-center justify-between m-auto ">
          <div>
          <h2 className="text-xl mt-10 mr-10 dark:text-white">نام شما<span className="text-red-600 mr-3">*</span></h2>
          <input type="text" className="flex items-center justify-center m-auto xl:w-[500px] lg:w-[400px] md:w-[280px] sm:w-[200px] xs:w-[150px] h-[50px] rounded-xl dark:bg-slate-700  mt-10 outline-blue-500  border border-gray-300 mr-10 px-3 placeholder:text-gray-700 dark:placeholder:text-white placeholder:text-lg" placeholder="نام شما"  />
          </div>
          <div className="mx-16">
          <h2 className="text-xl mt-10 mr-10 dark:text-white">ایمیل شما<span className="text-red-600 mr-3">*</span></h2>
          <input type="text" className="xl:w-[500px] h-[50px] lg:w-[400px] sm:w-[200px] md:w-[280px] xs:w-[150px] rounded-xl  outline-blue-500 dark:bg-slate-700 mt-10 border border-gray-300 placeholder:text-gray-700 dark:placeholder:text-white mr-10 px-3 placeholder:text-lg" placeholder="ایمیل شما"  />
          </div>
        </div>
        <button className="bg-green-600 md:w-[200px] xs:w-[100px] sm:w-[150px] mx-10 my-14 text-white text-xl rounded-lg h-[40px]">ثبت</button>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ContactUs
