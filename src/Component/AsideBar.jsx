import React from "react";
import {
  Logo,
  DashboardIcon,
  OrderIcon,
  CustomersIcon,
  InventoryIcon,
  ConversationsIcon,
  SettingsIcon,
  SupportIcon,
  GiftIcon,
  RightArrowIcon,
  LogOutIcon,
} from "./Icon";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../Contaxt";

const AsideBar = () => {
  const location = useLocation();
  const {setIsLoggedIn} = AppContext()
  const { setUser } = AppContext();
  return (
    <>
      <aside className="group flex flex-col justify-between min-h-screen hover:w-[300px] w-[117px] transition-all duration-500 py-3.5 px-8">
        <div>
          <div className="flex items-center gap-1.5 ">
            <Logo />
            <h1 className="text-xl font-bold ff-poppins size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all delay-100">
              Metrix
            </h1>
          </div>
          <Link to="/">
            <div
              className={`flex md:mt-15.5 hover:bg-[#5570F1] group/button items-center gap-4 py-4 group-hover:px-5 px-3.5 ${
                location.pathname == "/" ? "bg-[#5570F1]" : ""
              } rounded-xl Aside-Icon`}
            >
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <DashboardIcon path={location.pathname} />
              </div>
              <h1
                className={`text-sm ff-Inter size-0 overflow-hidden group-hover/button:text-white opacity-0 group-hover:size-full group-hover:opacity-100 ${
                  location.pathname == "/" ? "text-white" : "#53545C"
                }`}
              >
                Dashboard
              </h1>
            </div>
          </Link>

          <Link to="/orders">
            <div
              className={`flex md:mt-6 group/button2 items-center gap-4 py-4 group-hover:px-5 px-3.5 hover:bg-[#5570F1] ${
                location.pathname == "/orders" ? "bg-[#5570F1]" : ""
              } rounded-xl Aside-Icon`}
            >
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <OrderIcon pathname={location.pathname} />
              </div>
              <h1
                className={`text-sm group-hover/button2:text-white ${
                  location.pathname == "/orders" ? "text-white" : "#53545C"
                } ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
              >
                Orders
              </h1>
            </div>
          </Link>

          <Link to="/Customers">
            <div
              className={`flex md:mt-6 group/button2 items-center gap-4 py-4 group-hover:px-5 px-3.5 hover:bg-[#5570F1] ${
                location.pathname == "/Customers" ? "bg-[#5570F1]" : ""
              } rounded-xl Aside-Icon`}
            >
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <CustomersIcon pathname={location.pathname} />
              </div>
              <h1
                className={`text-sm group-hover/button2:text-white ${
                  location.pathname == "/Customers" ? "text-white" : "#53545C"
                } ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
              >
                Customers
              </h1>
            </div>
          </Link>
          <Link to="/Inventory">
            <div
              className={`flex md:mt-6 group/button2 items-center gap-4 py-4 group-hover:px-5 px-3.5 hover:bg-[#5570F1] ${
                location.pathname == "/Inventory" ||
                location.pathname.startsWith("/Inventory/")
                  ? "bg-[#5570F1]"
                  : ""
              } rounded-xl Aside-Icon`}
            >
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <InventoryIcon pathname={location.pathname} />
              </div>
              <h1
                className={`text-sm group-hover/button2:text-white ${
                  location.pathname == "/Inventory" ||
                  location.pathname.startsWith("/Inventory/")
                    ? "text-white"
                    : "#53545C"
                } ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
              >
                Inventory
              </h1>
            </div>
          </Link>

          <Link to="/Conversations">
            <div
              className={`flex md:mt-6 group/button2 items-center gap-4 py-4 group-hover:px-5 px-3.5 hover:bg-[#5570F1] ${
                location.pathname == "/Conversations" ? "bg-[#5570F1]" : ""
              } rounded-xl Aside-Icon`}
            >
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <ConversationsIcon pathname={location.pathname} />
              </div>
              <h1
                className={`text-sm group-hover/button2:text-white ${
                  location.pathname == "/Conversations"
                    ? "text-white"
                    : "#53545C"
                } ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
              >
                Conversations
              </h1>
            </div>
          </Link>
          <Link to="/Settings">
            <div
              className={`flex md:mt-6 group/button2 items-center gap-4 py-4 group-hover:px-5 px-3.5 hover:bg-[#5570F1] ${
                location.pathname == "/Settings" ? "bg-[#5570F1]" : ""
              } rounded-xl Aside-Icon`}
            >
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <SettingsIcon pathname={location.pathname} />
              </div>
              <h1
                className={`text-sm group-hover/button2:text-white ${
                  location.pathname == "/Settings" ? "text-white" : "#53545C"
                } ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
              >
                Settings
              </h1>
            </div>
          </Link>
        </div>
        <div>
          <Link>
            <div
              className={`flex md:mt-6 items-center gap-4 py-4 group-hover:px-5 px-3.5 rounded-xl bg-[#5E63661A]`}
            >
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <SupportIcon />
              </div>
              <h1
                className={`text-sm text-[#1C1D22] whitespace-nowrap ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
              >
                Contact Support
              </h1>
            </div>
          </Link>
          <Link>
            <div
              className={`md:mt-6 items-center gap-4 py-4 group-hover:px-5 px-3.5 rounded-xl bg-[#FFCC9133]`}
            >
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                  <GiftIcon />
                </div>
                <h1
                  className={`text-sm text-[#1C1D22] whitespace-nowrap ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
                >
                  Contact Support
                </h1>
              </div>
              <div className="group-hover:flex items-center gap-4 hidden whitespace-nowrap overflow-hidden mt-4">
                <p className="text-xs ff-Inter text-[#6E7079]">
                  Upgrade your account
                </p>
                <RightArrowIcon />
              </div>
            </div>
          </Link>
          <Link
            onClick={() => {
              toast.success("Logout Successfully");
              localStorage.removeItem("Islogin");
              setTimeout(() => {
                setIsLoggedIn(false)
              }, 2000);
            }}
          >
            <div className="mt-5.5 flex items-center gap-2 justify-center">
              <div className="min-h-6 min-w-6 max-h-6 max-w-6">
                <LogOutIcon />
              </div>
              <h1
                className={`text-sm text-[#CC5F5F] whitespace-nowrap ff-Inter size-0 overflow-hidden opacity-0 group-hover:size-full group-hover:opacity-100 transition-all`}
              >
                LogOut
              </h1>
            </div>
          </Link>
        </div>
      </aside>
      <ToastContainer />
    </>
  );
};
export default AsideBar;
