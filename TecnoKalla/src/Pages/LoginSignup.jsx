import { FaPencilAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { StoreContext } from "../Context/StoreContext";

function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currState, setCurrState] = useState("Sign Up");

  const { login } = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Swal.fire("خطا", "لطفاً یک آدرس ایمیل معتبر وارد کنید.", "error");
      return;
    }

    if (password.length < 8) {
      Swal.fire("خطا", "رمز عبور نباید کمتر از ۸ کاراکتر باشد.", "error");
      return;
    }

    if (currState === "Sign Up") {
      if (username.length < 6) {
        Swal.fire("خطا", "نام کاربری نباید کمتر از شش کاراکتر باشد.", "error");
        return;
      }

      if (password !== confirmPassword) {
        Swal.fire("خطا", "رمز عبور و تایید رمز عبور باید یکی باشند.", "error");
        return;
      }

      // ذخیره اطلاعات کاربر در localStorage در زمان ثبت‌نام
      const userData = { username, email, password };
      localStorage.setItem("user", JSON.stringify(userData));

      Swal.fire({
        title: "موفق",
        text: "ثبت نام موفقیت‌آمیز بود.",
        icon: "success",
        confirmButtonText: "باشه",
      }).then(() => {
        login(userData);
        window.location.href = "/";
      });
    } else {
      // بررسی اطلاعات کاربر در زمان ورود
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        Swal.fire({
          title: "موفق",
          text: "ورود موفقیت‌آمیز بود.",
          icon: "success",
          confirmButtonText: "باشه",
        }).then(() => {
          login(storedUser);
          window.location.href = "/";
        });
      } else {
        Swal.fire("خطا", "ایمیل یا رمز عبور اشتباه است.", "error");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="w-[400px] rounded-2xl bg-white mx-auto shadow-lg py-5">
        <h1 className="text-4xl text-center text-blue-500 mb-5">
          {currState === "Login" ? "فرم ورود" : "فرم ثبت نام"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="text-3xl p-10">
            {currState === "Sign Up" && (
              <div className="flex items-center relative mb-5">
                <input
                  className="h-[50px] bg-slate-100 rounded-lg w-full text-black outline-none text-xl pr-5"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="نام"
                />
                <FaPencilAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
              </div>
            )}
            <div className="flex items-center relative mb-5">
              <input
                className="h-[50px] bg-slate-100 rounded-lg w-full text-xl outline-none text-black pr-5"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="آدرس ایمیل"
              />
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
            </div>
            <div className="flex items-center relative mb-5">
              <input
                className="h-[50px] bg-slate-100 rounded-lg w-full text-xl outline-none text-black pr-5"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={currState === "Login" ? "رمز عبور" : "تایین رمزعبور"}
              />
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
            </div>
            {currState === "Sign Up" && (
              <div className="flex items-center relative mb-5">
                <input
                  className="h-[50px] bg-slate-100 rounded-lg w-full text-xl outline-none text-black pr-5"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="تایید رمز عبور"
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
              </div>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-[350px] h-[50px] bg-blue-600 rounded-xl text-white text-xl hover:opacity-90 mb-3"
            >
              تایید
            </button>
            {currState === "Login" ? (
              <p className="text-gray-500">
                عضو نشدی؟{" "}
                <span
                  onClick={() => setCurrState("Sign Up")}
                  className="text-blue-600 hover:underline hover:text-blue-400 cursor-pointer"
                >
                  همین حالا عضو شو
                </span>
              </p>
            ) : (
              <p className="text-gray-500">
                عضو شدی؟{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  className="text-blue-600 hover:underline hover:text-blue-400 cursor-pointer"
                >
                  همین حالا ورود کن
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
