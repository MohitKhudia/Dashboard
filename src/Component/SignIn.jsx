import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Hide from '../assets/img/svg/HIde.svg'
import Show from '../assets/img/svg/Show.svg'
import {EmailIcon, Logo, PasswordIcon, UserIcon} from './Icon'
import { Tooltip } from 'react-tooltip'
import { Link, useNavigate } from 'react-router-dom'
import { LoginButton } from './Buttons'
import { AppContext } from '../Contaxt';


const Signin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {setIsLoggedIn} = AppContext()
    const [formdata , setformdata] = useState({
      name: "",
      email: "",
      password: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = (e) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then(() => {
          localStorage.setItem('Islogin' , true)
          setIsLoggedIn(true)
        }).catch((error) => {
            console.error("Sign up failed:", error.message);
        });
        e.preventDefault();
        setformdata({ name: "", email: "", password: "" });
    }

  return (
    <>
      <nav className="py-3 px-3 bg-white">
        <div className="container mx-auto max-w-[1276px]">
          <Logo />
        </div>
      </nav>
      <main className="bg-[#F4F5FA] flex justify-center items-center Custom-Height">
        <div className="w-full max-w-[443px] bg-white rounded-xl py-11 px-8.5">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h1 className="text-xl font-medium text-center mt-7.5 ff-poppins">
            Get Started with <span className="text-[#5570F1] ">Metrix</span>
          </h1>
          <p className="text-[#8B8D97] mt-2 text-sm ff-Inter text-center">
            Create your free account
          </p>
          <form className="mt-15" onSubmit={handleSubmit}>
            <div className="flex items-center bg-[#EFF1F999] rounded-lg py-2 px-4 gap-4">
              <label htmlFor="YourName">
                <UserIcon />
              </label>
              <input
                type="YourName"
                id="YourName"
                name="name"
                onChange={handleChange}
                value={formdata.name}
                className="outline-none text-[#ABAFB1] text-[16px] ff-Inter"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="flex items-center bg-[#EFF1F999] rounded-lg py-2 px-4 gap-4 mt-7.5">
              <label htmlFor="email">
                <EmailIcon />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formdata.email}
                className="outline-none text-[#ABAFB1] text-[16px] ff-Inter"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex items-center bg-[#EFF1F999] rounded-lg py-2 px-4 gap-4 mt-7.5 relative">
              <label htmlFor="Password">
                <PasswordIcon />
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="Password"
                className="outline-none text-[#ABAFB1] text-[16px] ff-Inter"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formdata.password}
                minLength={6}
                required
              />

              <img
                src={showPassword ? Show : Hide}
                alt="Toggle"
                className="h-5 w-5 absolute right-4 cursor-pointer"
                data-tooltip-id="PasswordTooltip"
                data-tooltip-content={showPassword ? "Hide" : "Show"}
                onClick={() => setShowPassword(!showPassword)}
              />
              <Tooltip id="PasswordTooltip" />
            </div>
            <div className="text-end mt-3">
              <button className="text-[#5570F1] text-sm ff-Inter cursor-pointer">
                Recover Password
              </button>
            </div>
            <div className="flex items-center justify-center mt-10">
              <p className="text-sm text-[#8B8D97] ff-Inter">
                Already have an account?
              </p>
              <Link to="/Login" className="text-sm text-[#5570F1] ff-Inter">
                Login
              </Link>
            </div>
            <div className="text-center mt-10">
              <LoginButton OnSubmit={handleSubmit} />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Signin