import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs";
import LoginSignup from "./Pages/LoginSignup";
import Wallet from "./Pages/Wallet";
import Home from "./Pages/Home"
import AllProducts from "./Pages/AllProducts"
import Rules from "./Pages/Rules";
import Installments from "./Pages/Installments"
import Offers from "./Pages/Offers";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";

const routes = [
    {path:'/aboutus', element:<AboutUs />},
    {path:'/LoginSignup', element:<LoginSignup />},
    {path:'/contactus', element:<ContactUs />},
    {path:'/wallet', element:<Wallet />},
    {path:'/', element:<Home />},
    {path:'/all', element:<AllProducts />},
    {path:'/rules', element:<Rules />},
    {path:'/installments', element:<Installments />},
    {path:'/offers', element:<Offers />},
    {path:'/cart', element:<Cart />},
    {path:'/order', element:<Order />},
];

export default routes;