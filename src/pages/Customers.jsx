import React, { useEffect, useState } from "react";
import { AddIcon, BagIcon, CalanderIcon, CopyIdIcon, CustomersIcon, DownArrow, FilterIcon, InventoryIcon, ListIcon, SearchIcon } from "../Component/Icon";
import { Link } from "react-router-dom";
import { AddNewCustomer } from "../Component/Popups";
import { AppContext } from "../Contaxt";
import { Tooltip } from "react-tooltip";

const Customers = () => {
   const {
     formatDate,
     formatTime,
     getData,
     handleCopy,
     Store,
     tooltipText,
     Find,
     setFind,
     filteredStore,
     setFilteredStore,
     Search,
   } = AppContext();
    const [IsOpen , setIsOpen] = useState(false)
    
    useEffect(() => {
      setFilteredStore(Store); 
    }, [Store]);
   
      useEffect(() => {
        getData();
      }, [])
  return (
    <div className="py-7 px-5 bg-[#F4F5FA] Customers">
      <AddNewCustomer IsOpen={IsOpen} setIsOpen={setIsOpen} />
      <div className="flex items-center justify-between ">
        <h1 className="text-[#45464E] text-[16px] font-medium ff-Inter">
          Customers Summary
        </h1>
        <Link
          className="bg-[#5570F1] text-sm ff-Inter flex gap-2.5 items-center text-white rounded-xl py-[17px] px-4 hover:bg-[#FFEBD3] hover:text-[#5570F1] transition duration-500 ease-in-out create-order"
          onClick={() => setIsOpen(true)}
        >
          <AddIcon /> Add a New Customer
        </Link>
      </div>
      {/* Columes  */}
      <div className="flex gap-5 mt-5">
        <div className="w-1/2 bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-[#FFCC9129] rounded-xl">
              <CustomersIcon />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-8">
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">All Customers</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                1,150
                <span className="text-[#519C66] text-xs ff-Inter">+15.80%</span>
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Active</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                1,180
                <span className="text-[#519C66] text-xs ff-Inter">+85%</span>
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">In-Active</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                70 <span className="text-[#CC5F5F] text-xs ff-Inter">-10%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-[#FFCC9129] rounded-xl">
              <CustomersIcon />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="grid grid-cols-3 mt-8">
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">All Customers</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                1,150
                <span className="text-[#519C66] text-xs ff-Inter">+15.80%</span>
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Active</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                1,180
                <span className="text-[#519C66] text-xs ff-Inter">+85%</span>
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">In-Active</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                70 <span className="text-[#CC5F5F] text-xs ff-Inter">-10%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Customers  */}
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
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center border border-[#53545C] rounded-sm gap-2.5 text-[#53545C] text-[11px] ff-Inter p-2 cursor-pointer "
                  >
                    <FilterIcon />
                    Filter
                  </button>
                  {/* <div className="absolute top-0 left-0 shadow-[#3D467014] shadow-[0px 4px 32px 0px] px-[21px] py-6">
                    <h2 className="text-[#1C1D22] text-[16px] font-medium ff-Inter">
                      Filter
                    </h2>
                    <h3 className="mt-5 text-[#53545C] text-sm ff-Inter">
                      Order Type
                    </h3>
                    <div className="flex mt-3"></div>
                  </div> */}
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center border border-[#53545C] rounded-sm gap-2.5 text-[#53545C] text-[11px] ff-Inter p-2 cursor-pointer "
                  >
                    <span className="size-4">
                      <CalanderIcon />
                    </span>
                    Filter
                  </button>
                  {/* <div className="absolute top-0 left-0 shadow-[#3D467014] shadow-[0px 4px 32px 0px] px-[21px] py-6">
                    <h2 className="text-[#1C1D22] text-[16px] font-medium ff-Inter">
                      Filter
                    </h2>
                    <h3 className="mt-5 text-[#53545C] text-sm ff-Inter">
                      Order Type
                    </h3>
                    <div className="flex mt-3"></div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mt-4 py-3.5 border-y border-[#E1E2E9]">
              <div className="grid grid-cols-[18%_18%_18%_10%_18%_12%] justify-between text-[#8B8D97] text-xs ff-Inter">
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
                  <p className="text-[#2C2D33] text-sm ff-Inter ">Email</p>
                  <ListIcon />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-[#2C2D33] text-sm ff-Inter ">Phone</p>
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
                    Customer Since
                  </p>
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
                    className="grid grid-cols-[18%_18%_18%_10%_18%_12%] justify-between text-[#8B8D97] text-xs ff-Inter py-3"
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
                      {value.email}
                    </h3>
                    <h3 className="text-[#6E7079] text-sm ff-Inter">
                      {value.phone}
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
                      {formatDate(value.Date)} - {formatTime(value.Time)}
                    </h3>
                    <div>
                      <div className="inline-block">
                        <div className="py-1 px-3 bg-[#32936F29] rounded-lg ">
                          <h4 className="text-[#519C66] text-sm ff-Inter ">
                            Active
                          </h4>
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

export default Customers;
