import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AddIcon, BagIcon, CopyIdIcon, DownArrow, ListIcon, OrderBag, SearchIcon, ShopingIcon } from "../Component/Icon";
import { CreateNewOrder } from "../Component/Popups";
import { AppContext } from "../Contaxt";
import { Tooltip } from "react-tooltip";
import Options from "../Component/Options";

const Orders = () => {
  
  const {
    ShowModel,
    setShowModel,
    formatDate,
    formatTime,
    getData,
    handleCopy,
    Store,
    tooltipText,
    Find,
    filteredStore,
    setFilteredStore,
    Search,
  } = AppContext();
  const CountCompleted = Store.filter((item) => item.OrderStatus === "Completed").length;
  const CountPending = Store.filter(
    (item) => item.OrderStatus === "Pending"
  ).length;
  useEffect(() => {
    getData()
  },[])
  useEffect(() => {
    setFilteredStore(Store); 
  }, [Store]);
  return (
    <div className="py-7 px-5 bg-[#F4F5FA] Orders">
      {/* PopUp Model  */}
      <CreateNewOrder
        IsOpen={ShowModel}
        setIsOpen={setShowModel}
        getData={getData}
      />
      {/* Order summary & Create Button  */}
      <div className="flex items-center justify-between ">
        <h1 className="text-[#45464E] text-[16px] font-medium ff-Inter">
          Orders Summary
        </h1>
        <Link
          className="bg-[#5570F1] text-sm ff-Inter flex gap-2.5 items-center text-white rounded-xl py-[17px] px-4 hover:bg-[#FFEBD3] hover:text-[#5570F1] transition duration-500 ease-in-out create-order"
          onClick={() => setShowModel(!ShowModel)}
        >
          <AddIcon /> Create a New Order
        </Link>
      </div>
      {/* Top Three Colums  */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <OrderBag />
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-8">
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">All Orders</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2">
                {Store.length}
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Pending</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                {CountPending}
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Completed</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                {CountCompleted}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <OrderBag />
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-8">
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Canceled</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                0 <span className="text-[#CC5F5F] text-xs ff-Inter">-0%</span>
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Returned</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                0
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Damaged</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                0
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-[#FFCC9129] rounded-lg inline-block">
              <ShopingIcon />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="flex mt-8.5">
            <div className="w-1/2">
              <h5 className="text-sm ff-Inter text-[#CC5F5F]">
                Abandoned Cart
              </h5>
              <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-1.5">
                0%
                <span className="text-[#519C66] text-xs font-normal">
                  +0.00%
                </span>
              </p>
            </div>
            <div className="w-1/2">
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Customers</h5>
              <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                {Store.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Customers List  */}
      <div
        className={`bg-[#fff] h-[60vh] mt-5 rounded-xl ${
          Store == null ? "flex flex-col items-center justify-center" : ""
        } py-7 px-5.5`}
      >
        {Store == [] ? (
          <div>
            <div className="p-10 bg-[#F4F5FA] rounded-full">
              <BagIcon />
            </div>
            <h2 className="mt-10 ff-poppins text-xl font-medium text-center">
              No Orders Yet?
            </h2>
            <p className="text-[#8B8D97] ff-Inter text-center w-[80%] mt-3 text-sm">
              Add products to your store and start selling to see orders here.
            </p>
            <Link className="flex items-center justify-center gap-5 py-2.5 px-4.5 mt-6 rounded-xl bg-[#5570F1] text-[16px] text-white cursor-pointer ">
              <AddIcon /> New Product
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-[16px] font-medium ff-Inter text-[#45464E] ">
                Customer Orders
              </h2>
              <div className="flex items-center gap-3">
                <div className="border border-[#CFD3D4] rounded-sm flex items-center gap-4 p-2">
                  <SearchIcon />
                  <input
                    type="search"
                    name=""
                    id=""
                    className="outline-none text-[#ABAFB1] text-xs ff-Inter "
                    placeholder="Search"
                    value={Find}
                    onChange={(e) => Search(e.target.value)}
                  />
                </div>
                <Options/>
              </div>
            </div>
            <div className="mt-4 py-3.5 border-y border-[#E1E2E9]">
              <div className="grid grid-cols-[18%_18%_12%_12%_12%_12%_12%] justify-between text-[#8B8D97] text-xs ff-Inter">
                <div className="flex gap-5.5 items-center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="check"
                    className="select"
                  />
                  <div className="flex gap-2 items-center">
                    <p className="text-[#2C2D33] text-sm ff-Inter ">
                      Customer Name
                    </p>
                    <ListIcon />
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#2C2D33] text-sm ff-Inter ">Order Date</p>
                  <ListIcon />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#2C2D33] text-sm ff-Inter ">Order Type</p>
                  <ListIcon />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#2C2D33] text-sm ff-Inter ">
                    Tracking ID
                  </p>
                  <ListIcon />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#2C2D33] text-sm ff-Inter ">
                    Order Total
                  </p>
                  <ListIcon />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#2C2D33] text-sm ff-Inter ">Action</p>
                  <ListIcon />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#2C2D33] text-sm ff-Inter ">Status</p>
                  <ListIcon />
                </div>
              </div>
            </div>
            {/* Table Data  */}
            <div className="">
              {filteredStore.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-[18%_18%_12%_12%_12%_12%_12%] justify-between text-[#8B8D97] text-xs ff-Inter py-3"
                  >
                    <div className="flex gap-5.5 items-center">
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="check"
                        className="select"
                      />
                      <h2 className="text-[#6E7079] text-sm ff-Inter">
                        {value.name}
                      </h2>
                    </div>
                    <h3 className="text-[#6E7079] text-sm ff-Inter">
                      {formatDate(value.Date)} - {formatTime(value.Time)}
                    </h3>
                    <h3 className="text-[#6E7079] text-sm ff-Inter">
                      {value.OrderType}
                    </h3>
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[#6E7079] text-sm ff-Inter">
                        {value.id.slice(0, 10)}
                      </h3>
                      <div
                        className="min-h-4 min-w-4 inline-block"
                        data-tooltip-content={tooltipText}
                        data-tooltip-id="copyTooltip"
                        onClick={() => handleCopy(value.id)}
                      >
                        <CopyIdIcon />
                        <Tooltip id="copyTooltip" />
                      </div>
                    </div>
                    <h3 className="text-[#6E7079] text-sm ff-Inter">
                      ₦25,000.00
                    </h3>
                    <div>
                      <div className="inline-block bg-[#5E636614] gap-2.5 py-1 px-2.5 rounded-lg cursor-pointer ">
                        <div className="flex items-center">
                          <select
                            name="complete"
                            id="Action"
                            defaultValue="Completed"
                            className="appearance-none inline-block cursor-pointer text-[#8B8D97] text-sm ff-Inter outline-none"
                          >
                            <option value="Completed" >Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="In-Progress">In-Progress</option>
                          </select>
                          <label htmlFor="Action" className="cursor-pointer">
                            <DownArrow />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;




































