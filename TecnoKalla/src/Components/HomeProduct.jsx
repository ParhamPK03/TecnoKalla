import { product_list } from "../assets/Infoes";
import TopBarProductBox from "./TopBarProductBox";

const HomeProduct = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-10 justify-center my-20">
      {product_list.slice(0,6).map((product) => (
        <TopBarProductBox
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.img}
          id={product._id}
        />
      ))}
    </div>
    </div>
  )
}

export default HomeProduct
