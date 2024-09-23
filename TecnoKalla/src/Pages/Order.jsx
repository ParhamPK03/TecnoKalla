import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { FaRocket } from "react-icons/fa6";
const Order = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-slate-50 dark:bg-slate-800 w-[90%] h-[105vh] m-auto my-10 rounded-2xl shadow-md ">
        <div className="flex  gap-6 mx-5 ">
          <div className="bg-slate-100 dark:bg-slate-700 w-[70%] h-[85vh] shadow-lg rounded-2xl mt-10">
            <div className="flex items-center justify-center">
            <h1 className="mt-3 text-blue-500">
            اطلاعات خودرا وارد نمایید
            </h1>
            </div>  
            <div className="grid grid-cols-2 gap-5 mx-5 mt-10 text-sm dark:text-white">
              <div>
                <span>نام:</span>
                <br />
                <input className="w-[400px] mt-2 h-[40px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg placeholder:p-1  outline-blue-500 placeholder:text-black" type="text" placeholder="نام"/>
              </div>
              <div>
                <span>نام خانوادگی:</span>
                <br />
                <input className="w-[400px] mt-2 h-[40px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg placeholder:p-1  outline-blue-500 placeholder:text-black" type="text" placeholder="نام خانوادگی"/>
              </div>
              <div>
                <span>ایمیل:</span>
                <br />
                <input className="w-[400px] mt-2 h-[40px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg placeholder:p-1  outline-blue-500 placeholder:text-black" type="text" placeholder="ایمیل"/>
              </div>
              <div>
                <span>شماره تماس :</span>
                <br />
                <input className="w-[400px] mt-2 h-[40px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg outline-blue-500 placeholder:p-1  placeholder:text-black" type="text" placeholder="شماره تماس"/>
              </div>
              <div>
                <span>کد پستی:</span>
                <br />
                <input className="w-[400px] mt-2 h-[40px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg outline-blue-500 placeholder:p-1  placeholder:text-black" type="text" placeholder="کد پستی"/>
              </div>
              <div>
                <span>شماره منزل:</span>
                <br />
                <input className="w-[400px] mt-2 h-[40px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg outline-blue-500 placeholder:p-1  placeholder:text-black" type="text" placeholder="شماره منزل"/>
              </div>
              <div>
                <span>آدرس:</span>
                <br />
                <input className="w-[845px] mt-2 h-[40px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg placeholder:p-1  outline-blue-500 placeholder:text-black" type="text" placeholder="آدرس"/>
              </div>
              <br />
              <div>
                <span>توضیحات:</span>
                <br />
                <input className="w-[845px] mt-2 h-[150px] dark:bg-slate-600 placeholder:dark:text-white placeholder:pr-2 rounded-lg placeholder:p-1  outline-blue-500 placeholder:text-black" type="text" placeholder="توضیحات"/>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-700 shadow-lg w-[30%] h-[30vh]  rounded-2xl mt-10"> 
            <div className="flex items-center mr-3">
            <h1 className="mt-4 text-blue-500">تاریخ مورد نظر را انتخاب نمایید</h1>
            </div>
            <div className="grid grid-cols-3  gap-5 mr-5  mt-8">

              <div className="flex flex-col w-[80px]  rounded-full h-[50px] bg-white dark:bg-slate-600  shadow-lg  font-[500] cursor-pointer">
                <span className="pr-6 text-sm text-blue-600 dark:text-white">شنبه</span>
                <span className="pr-5 text-sm text-blue-400 ">1 مهر</span>
              </div>

              <div className="flex flex-col w-[80px]  rounded-full h-[50px] bg-white shadow-lg dark:bg-slate-600  font-[500] cursor-pointer">
                <span className="pr-4 text-sm text-blue-600 dark:text-white">یکشنبه</span>
                <span className="pr-5 text-sm text-blue-400">2 مهر</span>
              </div>

              <div className="flex flex-col w-[80px]  rounded-full h-[50px] bg-white shadow-lg dark:bg-slate-600  font-[500] cursor-pointer">
                <span className="pr-4 text-sm text-blue-600 dark:text-white">دوشنبه</span>
                <span className="pr-5 text-sm text-blue-400">3 مهر</span>
              </div>

              <div className="flex flex-col w-[80px]  rounded-full h-[50px] bg-white shadow-lg dark:bg-slate-600  font-[500] cursor-pointer">
                <span className="pr-3 text-sm text-blue-600 dark:text-white">سه شنبه</span>
                <span className="pr-5 text-sm text-blue-400">4 مهر</span>
              </div>

              <div className="flex flex-col w-[80px]  rounded-full h-[50px] bg-white shadow-lg dark:bg-slate-600  font-[500] cursor-pointer">
                <span className="pr-3 text-sm text-blue-600 dark:text-white">چهارشنبه</span>
                <span className="pr-5 text-sm text-blue-400">5 مهر</span>
              </div>

              <div className="flex flex-col w-[80px]  rounded-full h-[50px] bg-white shadow-lg dark:bg-slate-600  font-[500] cursor-pointer">
                <span className="pr-4 text-sm text-blue-600 dark:text-white">پنجشنبه</span>
                <span className="pr-5 text-sm text-blue-400">6 مهر</span>
              </div>
              
              
            
          </div>
          <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl shadow-lg w-[100%] h-[22vh] mt-16" >
            <div className="flex items-center gap-1 mr-3">
            <FaRocket className="text-blue-500 mt-3 text-lg" />
            <h1 className=" pt-2 text-xl font-[500] text-blue-500">انتخاب روش ارسال</h1>
            </div>
            <div className="flex items-center justify-between mt-3 shadow-lg p-1 dark:bg-slate-600 bg-white rounded-lg mx-2 cursor-pointer">
            <h1 className="text-blue-500 text-lg font-[500] ">ارسال با پست</h1>
            <img src="/images/Untitled-01.png" alt="" className="w-[36px]"/>
            </div>
            <div className="flex items-center justify-between shadow-lg mt-2 bg-white dark:bg-slate-600 p-1 rounded-lg mx-2 cursor-pointer" >
            <h1 className="text-blue-500 text-lg font-[500] ">ارسال با پست پیشتاز</h1>
            <img src="/images/Untitled-02.png" alt="" className="w-[35px]"/>
            </div>
            
            
          </div>
          </div>
        </div>
        <button className="w-[200px] h-[35px] bg-blue-500 mr-7 rounded-lg text-white mt-10">مرحله بعد</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Order
