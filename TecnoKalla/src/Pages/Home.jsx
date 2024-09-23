import TopBarSlider from "../Components/TopBarSlider"
import MiddleSlider from "../Components/MiddleSlider"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import HomeProduct from "../Components/HomeProduct"
const Home = () => {

  

  return (
    <div>
<Navbar/>
<div className="w-[90%] mx-auto hidden sm:flex justify-center items-center mt-10 ">
  <TopBarSlider />
</div>
    <div>
    <HomeProduct />
    </div>
    <div className="w-[100%] my-10 rounded-2xl m-auto p-10">
    <MiddleSlider/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
