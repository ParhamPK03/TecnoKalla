import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import { StoreContext } from "../Context/StoreContext"

const Cart = () => {
    const { cartItems, product_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className="flex xlx:flex-nowrap xs:flex-wrap gap-[200px] bg-white dark:bg-slate-900 dark:text-white min-h-[400px]">
                <table>
                    <thead>
                        <tr className="flex  gap-10 mt-16 xs:mr-3 sm:mr-[50px] xs:text-sm x2:text-xl">
                            <th>عکس محصول</th>
                            <th>نام محصول</th>
                            <th className="x2:mr-5">قیمت</th>
                            <th className="x2:mr-5">تعداد</th>
                            <th className="x2:mr-5">قیمت کل</th>
                            <th className="x2:mr-5">حذف محصول</th>
                        </tr>
                    </thead>
                    <hr className="border-b-1 border-gray-600 dark:border-white m-auto mt-3" />

                    {product_list && product_list.length > 0 && product_list.map((item, index) => {
    if (cartItems && cartItems[item._id] > 0) {
        return (
            <tbody key={index}>
                <tr className="flex xs:gap-5 x2:gap-14 x2:mr-[40px] text-sm md:text-xl">
                    <td className="mt-2"><img src={item.img} alt="" className="x2:w-[150px] mb-10 x2:h-[90px] xs:w-[80px] xs:h-[50px]" /></td>
                    <td className="mt-5">{item.title}</td>
                    <td className="mt-5">{item.price}</td>
                    <td className="mt-5">{cartItems[item._id]}</td>
                    <td className="mt-5">{item.price * cartItems[item._id]}</td>
                    <td onClick={() => removeFromCart(item._id)} className="mr-5 cursor-pointer mt-5 font-[500] text-red-500">x</td>
                </tr>
            </tbody>
        );
    }
})}
                </table>
                <div className="w-[400px]  h-[240px] dark:text-white text-gray-800 xlx:mt-[150px] m-auto text-lg p-2">
                    <div className="flex items-center justify-between">
                        <p>قیمت کل</p>
                        <p className="text-gray-600 dark:text-white">{getTotalCartAmount()}</p>
                    </div>
                    <hr className="border-b-1 border-gray-400 mt-3" />
                    <div className="flex items-center justify-between mt-2">
                        <p>هزینه ارسال</p>
                        <p className="text-gray-600 dark:text-white">تومان {getTotalCartAmount() === 0 ? 0 : 20000}</p>
                    </div>
                    <hr className="border-b-1 border-gray-400 mt-3" />
                    <div className="flex items-center justify-between mt-2">
                        <p>قیمت نهایی</p>
                        <p className="text-red-500">{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20000}</p>
                    </div>
                    <button onClick={() => navigate('/order')} className="w-[100px] h-[30px] font-[600] hover:opacity-80 bg-blue-500 shadow-lg rounded-lg text-white text-sm p-1 mt-16"> تصویه حساب</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
