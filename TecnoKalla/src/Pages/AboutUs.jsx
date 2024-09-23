import img1 from "../../public/images/Untitled-1.png41.png"
import img2 from "../../public/images/Untitled-1.pngqw.png"
import Navbar from "../Components/Navbar"

function Gallery() {
  return (
    <>
    <div>
      <Navbar/>
      <div className="my-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start mr-20 lg:gap-10 xs:gap-3">
            <h1 className="lg:text-3xl md:text-xl  xs:text-md text-blue-500 dark:text-white font-[500]">همراه باش تا ما رو بیشتر بشناسی</h1>
            <p className="lg:text-xl lg:leading-[40px] xs:leading-[30px] dark:text-white xs:line-clamp-2 md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-5">
              تکنو کالا یک شرکت مرتبط با تکنولوژی های پیشرفته روز دنیا است که به شما عزیزان کمک میکند<br /> تا در انتخاب وسیله های الکتریکی بهترین انتخاب موجود را انجام دهید و <span className="bg-blue-400">به مراد دلخواه خود برسید</span> تکنو کالا با استفاده از بهترین تکنولوژی ها به شما این امکان را میدهد تا بهترین هارا انتخاب کنید و هرگز <span className="bg-blue-400">از انتخابتان پشیمان</span> نخواهید شد.
            </p>
          </div>
          <div className="">
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <div>
            <img src={img1} alt=""/>
          </div>
          <div className="flex flex-col items-start ml-20 lg:gap-10 xs:gap-3">
            <h1 className="lg:text-3xl md:text-xl  xs:text-md text-blue-500 dark:text-white font-[500]">شرایط و راه‌های خرید از ما</h1>
            <p className="lg:text-xl lg:leading-[40px] xs:leading-[30px] dark:text-white xs:line-clamp-2 md:line-clamp-3 lg:line-clamp-4 xl:line-clamp-5">
              شما میتوانید هم به صورت حضوری با مراجعه به فروشگاه مرکزی ما و هم از طریق وبسایت از سرویس‌های ما برخوردار شوید و اینکه ما شرایط <span className="bg-blue-400">قسطی</span> هم داریم که میتونید با شرایط بسیار ایده‌آل از پیش ما خرید دلخواه خودتون رو با خیال راحت انجام دهید.
            </p>
          </div>
        </div>     
      </div>
      
    </div>
    
    </>
  )
}

export default Gallery
