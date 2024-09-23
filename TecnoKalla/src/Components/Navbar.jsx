import { useState, useContext, useEffect } from "react";
import { IoBagHandle, IoMenu, IoHome, IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { PiNoteDuotone } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import moon from "../../public/images/moon-logo.png";
import sun from "../../public/images/sun-logo.png";
import { StoreContext } from "../Context/StoreContext";

const Navbar = () => {
    const [theme, setTheme] = useState(null);
    const { getTotalCartAmount, user, logout, setUser, isLoggedIn, setIsLoggedIn } = useContext(StoreContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [logoutTimer, setLogoutTimer] = useState(null);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDarkScheme ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleCartClick = (e) => {
        if (getTotalCartAmount() === 0) {
            e.preventDefault();
        } else {
            navigate('/cart');
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        logout();
        setUser(null); // پاک کردن اطلاعات کاربر
        setIsLoggedIn(false); // به‌روزرسانی وضعیت ورود
        localStorage.setItem('isLoggedIn', 'false'); // به‌روزرسانی وضعیت در localStorage
        navigate('/');
    };

    const handleMouseEnter = () => {
        clearTimeout(logoutTimer);
        setShowLogout(true);
    };

    const handleMouseLeave = () => {
        const timer = setTimeout(() => setShowLogout(false), 500);
        setLogoutTimer(timer);
    };

    useEffect(() => {
        if (!user) {
            setShowLogout(false);
        }
    }, [user]);

    return (
        <div className='relative flex items-center justify-between bg-[#2980b9] dark:bg-slate-800 h-[60px] mt-5'>
            <div className="mr-1">
                <Link to="/">
                    <img src="/images/Header-logo.png" alt="" className='hidden md:flex sm:w-[20px] md:w-[50px] lg:w-[80px] cursor-pointer hover:opacity-75'/>
                </Link>
                <IoMenu className="text-white md:hidden text-3xl" onClick={toggleMenu} />
            </div>
            <div className={`fixed right-0 top-0 z-50 w-[50%] h-full bg-slate-700 md:hidden ${isMenuOpen ? "flex" : "hidden"} flex-col`}>
                <div className="flex justify-end p-4">
                    <IoClose className="text-white text-4xl cursor-pointer" onClick={toggleMenu} />
                </div>
                <ul className="items-center gap-5 text-white xs:text-xl">
                    <a className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2 bg-slate-500 p-1 rounded-sm mx-1">
                            <label htmlFor=""><IoHome /></label>
                            <Link to="/">خانه</Link>
                        </div>
                    </a>
                    <a className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2 bg-slate-500 mt-2 p-1 rounded-sm mx-1">
                            <label htmlFor=""><GrTechnology /></label>
                            <Link to="/all">همه محصولات</Link>
                        </div>
                    </a>
                    <a className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2 bg-slate-500 p-1 mt-2 rounded-sm mx-1">
                            <label htmlFor=""><PiNoteDuotone /></label> 
                            <Link to="/aboutus">درباره ما</Link>
                        </div>
                    </a>
                    <a className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center  gap-2 bg-slate-500 p-1 mt-2 rounded-sm mx-1">
                            <label htmlFor=""><RiContactsFill /></label> 
                            <Link to="/contactus">تماس با ما</Link>
                        </div>
                    </a>
                    <a className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2 bg-slate-500  p-1 mt-2 rounded-sm mx-1">
                            <label htmlFor=""><GiWallet /></label> 
                            <Link to="/wallet">کیف پول</Link>
                        </div>
                    </a>
                </ul>
            </div>
            <div className='hidden md:flex items-center text-white xs:gap-5 sm:gap-3  md:gap-5 ml-5'>
                <ul className="flex items-center gap-5 text-white sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[22px] font-[500]">
                    <li className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2 ">
                            <IoHome />
                            <Link to="/">خانه</Link>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2">
                            <GrTechnology />
                            <Link to="/all">همه محصولات</Link>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2">
                            <PiNoteDuotone />
                            <Link to="/aboutus">درباره ما</Link>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items-center gap-2">
                            <RiContactsFill />
                            <Link to="/contactus">تماس با ما</Link>
                        </div>
                    </li>
                    <li className="cursor-pointer hover:text-yellow-300 border-yellow-300 duration-300">
                        <div className="flex items_center gap-2">
                            <GiWallet />
                            <Link to="/wallet">کیف پول</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex items-center text-white gap-5 ml-5'>
                <div 
                    className="flex items-center gap-3 relative cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {isLoggedIn ? (
                        <>
                            <span className="cursor-pointer text-lg hover:text-yellow-300">
                                {user?.username}
                            </span>
                            {showLogout && (
                                <button
                                    onClick={handleLogout}
                                    className="absolute top-full left-0 mt-2 p-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500"
                                >
                                    خروج
                                </button>
                            )}
                        </>
                    ) : (
                        <Link to="/LoginSignup">
                            <div className='flex items-center justify-center cursor-pointer xs:text-xl xs:w-8 xs:h-8 sm:text-2xl border border-dashed hover:text-yellow-300 hover:border-yellow-300 hover:text-xl duration-700 sm:w-10 sm:h-10 border-white rounded-full font-bold'>
                                <FaUser />
                            </div>
                        </Link>
                    )}
                </div>
                <div>
                    <img onClick={handleThemeSwitch} src={moon} alt="" className="sm:w-[40px] xs:w-[30px] cursor-pointer flex dark:hidden " />
                    <img onClick={handleThemeSwitch} src={sun} alt="" className="sm:w-[40px] xs:w-[30px] cursor-pointer hidden dark:flex" />
                </div>
                <div className="flex">
                    <div className={getTotalCartAmount() === 0 ? "" : "dark:bg-blue-500 bg-red-600 w-3 h-3 rounded-full"}></div>
                    <a onClick={handleCartClick} href="#cart">
                        <IoBagHandle className='cursor-pointer xs:text-3xl sm:text-4xl hover:text-yellow-300 duration-300' />
                    </a> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;
