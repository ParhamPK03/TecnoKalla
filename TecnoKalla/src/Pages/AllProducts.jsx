import { product_list } from "../assets/Infoes"
import AllProductsBox from "../Components/AllProductsBox"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const AllProducts = () => {

  return (
    <div>
     <Navbar/>
       <div className="flex flex-wrap gap-8 justify-center my-20">
    {product_list.slice(6, 21).map((item,index) => (<AllProductsBox key={index} title={item.title} id={item._id} img={item.img} price={item.price} />))}
    </div>
    <Footer/>
    </div>
  )
}

export default AllProducts
