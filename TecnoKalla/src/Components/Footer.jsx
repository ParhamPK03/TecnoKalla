import { GrInstagram } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="dark:bg-gray-800 bg-slate-50 py-10">
      <div className="flex flex-wrap items-start justify-between ">
        <div className="flex flex-col text-gray-700 dark:text-white mt-[50px] max-w-[300px] mx-5 lg:mx-10 w-full sm:w-auto">
          <h1 className="text-xl mb-3 font-bold">درباره ما</h1>
          <p className="text-sm leading-[30px] font-[500]">تکنو کالا یک مجموعه بزرگ است که به فروش تکنولوژی های روز دنیا مشغول است</p>
        </div>

        <div className="flex flex-col items-center gap-2 mt-[50px] text-gray-700 dark:text-white mx-5 lg:mx-10 w-full sm:w-auto">
          <h1 className="text-xl mb-3 font-bold">دسترسی سریع</h1>
          <Link to="/all" className="text-sm hover:underline hover:text-blue-600 font-[500]">همه تکنولوژی ها</Link>
          <Link to="/contactus" className="text-sm hover:underline hover:text-blue-600 font-[500]">پشتیبانی سریع</Link>
          <Link to="/rules" className="text-sm hover:underline hover:text-blue-600 font-[500]">قوانین و مقررات</Link>
        </div>

        <div className="flex flex-col items-center gap-2 mt-[50px] text-gray-700 dark:text-white mx-5 lg:mx-10 w-full sm:w-auto">
          <h1 className="text-xl mb-3 font-bold mt-2">لینک های مفید</h1>
          <Link to="/offers" className="text-sm hover:underline hover:text-blue-600 font-[500]">تخفیف ها</Link>
          <Link to="/installments" className="text-sm hover:underline hover:text-blue-600 font-[500]">خرید اقساطی</Link>
        </div>

        <div className="flex flex-col items-center gap-3 mt-[50px] text-gray-700 dark:text-white mx-5 lg:mx-10 w-full sm:w-auto">
          <h1 className="text-xl mb-3 font-bold">شبکه های اجتماعی</h1>
          <div className="flex items-center gap-3">
            <label className="text-xl text-[#db2777]"><GrInstagram /></label>
            <a href="#" className="text-sm hover:underline hover:text-blue-600">@TecnoKalla</a>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-xl text-[#075985]"><FaTelegram /></label>
            <a href="#" className="text-sm hover:underline hover:text-blue-600">@Tecnokalla</a>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-xl text-[#16a34a]"><IoLogoWhatsapp /></label>
            <a href="#" className="text-sm hover:underline hover:text-blue-600">@tecnoKallaa</a>
          </div>
        </div>
      </div>
    </div>
    <div className="dark:bg-gray-800 text-gray-700 bg-slate-50 border-y border-dashed border-gray-300 shadow-sm my-3 h-[100px] flex flex-col justify-center gap-2 pr-5">
      <h1 className="dark:text-white text-xl">| Developed By : Parham Pourkhani |</h1>
      
    </div>
    </>
  );
}

export default Footer;
