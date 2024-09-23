import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { BsCalendarDayFill } from "react-icons/bs";
import { BsCalendar2MonthFill } from "react-icons/bs";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import img1 from "../../public/images/Untitled-2.pngeww.png"
import img2 from "../../public/images/Untitled-1.pngeee.png"
function installments() {
  return (
    <div>
      <Navbar/>
      <div className="bg-slate-300 dark:bg-slate-800 m-auto mt-[40px] rounded-[20px] w-[90%] h-[80px] ">
        <ul className="flex mr-5 items-center gap-7 xs:text-sm md:text-lg text-[#f97316] font-[400]">
        <li className="cursor-pointer dark:bg-slate-700 bg-[#2980b9] text-white  hover:text-[#2980b9] hover:bg-white sm:py-2 sm:px-3 mt-4 rounded-[10px]  xs:py-1 xs:px-2 duration-300">پرداخت به صورت هفتگی</li>
          <li className="cursor-pointer dark:bg-slate-700 bg-[#2980b9] hover:text-[#2980b9] hover:bg-white text-white sm:py-2 sm:px-3 xs:py-1 xs:px-2 mt-4 rounded-[10px] duration-300">پرداخت ماهیانه</li>
          <li className="cursor-pointer dark:bg-slate-700 bg-[#2980b9] text-white  hover:text-[#2980b9] hover:bg-white sm:py-2 sm:px-3 xs:py-1 xs:px-2  mt-4  rounded-[10px] duration-300">پرداخت با چک</li>
        </ul>
      </div>

      <div className="w-[95%] h-[200vh] m-auto dark:bg-slate-800 bg-white rounded-[20px] my-10">
        <h1 className="md:text-4xl sm:text-2xl xs:text-xl font-[800] dark:text-white text-gray-700 p-7">خرید اقساطی</h1>
        <hr className="w-[95%] m-auto" />
        <div className="flex items-center mt-[60px] justify-between gap-x-10">
          <div className="flex flex-col gap-8 mr-10 text-white">
            <div className=" bg-blue-500 xs:w-[150px]  xs:h-[50px] lg:h-[70px] md:w-[250px] xl:w-[350px] cursor-pointer flex gap-3 rounded-[10px] items-center px-5">
              <label htmlFor=""><BsCalendarDayFill className="xs:text-sm md:text-xl" /></label>
              <h2 className="xs:text-xs md:text-md lg:text-lg"> بررسی شرایط پرداخت به صورت هفتگی</h2>
            </div>
            <div className="bg-blue-700 cursor-pointer  xs:w-[150px]  xs:h-[50px] lg:h-[70px] md:w-[250px] xl:w-[350px]  flex gap-3 rounded-[10px] items-center px-5">
              <label htmlFor=""><BsCalendar2MonthFill className="xs:text-sm md:text-xl"  /></label>
              <h2  className="xs:text-xs md:text-md lg:text-lg">بررسی شرایط پرداخت صورت ماهیانه </h2>
            </div>
            <div className="bg-gray-400 cursor-pointer  xs:w-[150px]  xs:h-[50px] lg:h-[70px] md:w-[250px] xl:w-[350px] flex gap-3 rounded-[10px] items-center px-5">
              <label htmlFor=""><LiaMoneyCheckAltSolid className="xs:text-sm md:text-xl"  /></label>
              <h2  className="xs:text-xs md:text-md lg:text-lg">بررسی شرایط پرداخت بااستفاده از چک </h2>
            </div>
          </div>
          <div className="flex items-center m-auto">
            <img src={img1} alt="" className="w-[100%]" />
          </div>
        </div>

        <h1 className="md:text-4xl sm:text-2xl xs:text-xl font-[800] text-gray-800 p-7">برآورد هزینه ها</h1>
        <hr className="w-[95%] m-auto" />

        <div className="flex  justify-between mt-16">
          <div>
          <h1 className="md:text-3xl sm:text-2xl xs:text-xl font-[800] text-gray-600 dark:text-white p-7">چطور از پس هزینه ها بر بیام؟</h1>
          <p className="text-lg  font-[400] text-blue-500  dark:text-blue-300  leading-[40px] line-clamp-6">یکی از موارد مهم توی زندگی اینه که بتونیم درآمدمون رو مدیریت کنیم، هزینه هامون رو کنترل کنیم و پس انداز کردن رو یاد بگیریم، (البته نه پس انداز کردن برای روز مبادا)، پس انداز کردن برای نزدیک شدن به اهداف و رویاهامون و خریدن و رسید به چیزهایی که دوستشون داریم یا به دست آرودن تجربه های جدید و جذاب و هیجان انگیز، برای اینه به این ها برسیم باید یاد بگیریم که هزینه هامون رو کنترل کنیم، پولمون سر چیزهای کم اهمیت خرج نکنیم، یاد بگیریم که از خریدهای غیرمهمی که نه تنها برامون فایده نداره بلکه آسیب زننده هم هست بگذریم</p>
          </div>
          <img src={img2} className="w-[900px] ml-16 " alt="" />
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default installments
