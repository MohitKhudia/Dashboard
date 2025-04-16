import { Link } from "react-router-dom";
import { BagIcon, Customers, DownArrow, InventoryIcon, OrderBag, SalesIcon, ShopingIcon } from "../Component/Icon";
import RoundedGraph from "../assets/img/png/RoundedGraph.png";
import BasicBars from "../Component/BasicBars";
export default function Dashboard() {
  return (
    <div className="py-7 px-5 bg-[#F4F5FA] Dashboard">
      {/* top Three colums */}
      <div className="grid grid-cols-3 gap-5 ">
        <div className="bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <SalesIcon />
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="flex mt-8">
            <div className="w-1/2">
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Sales</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2">
                ₦4,000,000.00
              </p>
            </div>
            <div className="w-1/2">
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Volume</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                450{" "}
                <span className="text-[#519C66] text-xs ff-Inter">+20.00%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <Customers />
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="flex mt-8">
            <div className="w-1/2">
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Customers</h5>
              <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2">
                1,250
                <span className="text-[#519C66] text-xs ff-Inter">+15.80%</span>
              </p>
            </div>
            <div className="w-1/2">
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Active</h5>
              <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                1,180
                <span className="text-[#CC5F5F] text-xs ff-Inter">-4.90%</span>
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
              <h5 className="text-sm ff-Inter text-[#8B8D97]">All Orders</h5>
              <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2">
                450
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Pending</h5>
              <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                5
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Completed</h5>
              <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                445
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Recently Orders & Other section */}
      <div className="flex mt-5 gap-4.5">
        {/* Some Section */}
        <div className="w-[67%]">
          <div className="flex items-stretch gap-5">
            {/* Marketing  */}
            <div className="w-1/2">
              <div className="bg-white p-6 rounded-xl py-6 px-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#45464E] text-[16px] font-medium ff-Inter">
                    Marketting
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
                    <DownArrow />
                  </div>
                </div>
                <div className="flex mt-3 justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 bg-[#5570F1] rounded-md"></div>
                    <p className="text-[#A6A8B1] text-[11px] ff-Inter">
                      Acquisition
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 bg-[#97A5EB] rounded-md"></div>
                    <p className="text-[#A6A8B1] text-[11px] ff-Inter">
                      Purchase
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 bg-[#FFCC91] rounded-md"></div>
                    <p className="text-[#A6A8B1] text-[11px] ff-Inter">
                      Retention
                    </p>
                  </div>
                </div>
                <img src={RoundedGraph} alt="graph" className="mx-auto mt-6" />
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col gap-4.5">
                {/* All Products  */}
                <div className="bg-white p-6 rounded-xl py-3 px-4">
                  <div className="p-2 bg-[#FFFFFF29] rounded-lg inline-block">
                    <InventoryIcon />
                  </div>
                  <div className="flex mt-8.5">
                    <div className="w-1/2">
                      <h5 className="text-sm ff-Inter text-[#8B8D97]">
                        All Products
                      </h5>
                      <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2">
                        45
                      </p>
                    </div>
                    <div className="w-1/2">
                      <h5 className="text-sm ff-Inter text-[#8B8D97]">
                        Active
                      </h5>
                      <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                        32
                        <span className="text-[#519C66] text-xs ff-Inter">
                          +24%
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* All Customers  */}
                <div className="bg-white p-6 rounded-xl py-3 px-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-[#FFCC9129] rounded-lg inline-block">
                      <ShopingIcon />
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs ff-Inter text-[#BEC0CA]">
                        This Week
                      </p>
                      <DownArrow />
                    </div>
                  </div>
                  <div className="flex mt-8.5">
                    <div className="w-1/2">
                      <h5 className="text-sm ff-Inter text-[#CC5F5F]">
                        Abandoned Cart
                      </h5>
                      <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-1.5">
                        20%{" "}
                        <span className="text-[#519C66] text-xs font-normal">
                          +0.00%
                        </span>
                      </p>
                    </div>
                    <div className="w-1/2">
                      <h5 className="text-sm ff-Inter text-[#8B8D97]">
                        Customers
                      </h5>
                      <p className="text-xl ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                        30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Graph  */}
          <div className="bg-[#fff] p-6 rounded-xl py-6 px-5 mt-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <h2 className="text-[#45464E] text-[16px] font-medium ff-Inter">
                  Summary
                </h2>
                <div className="bg-[#5570F114] flex items-center gap-5 rounded-lg py-1.5 px-4 ">
                  <p className="text-[#5570F1] text-sm ff-Inter">Sales</p>
                  <DownArrow OnChart={"#5570F1"} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs ff-Inter text-[#1C1D22]">Last 7 Days</p>
                <DownArrow />
              </div>
            </div>
            <BasicBars/>
          </div>
        </div>
        {/* Recently Orders */}
        <div className="w-[33%]">
          <div className="bg-white rounded-xl p-5 h-full group/recent">
            <h2 className="font-medium text-[#45464E] text-[16px] ff-Inter">
              Recent Orders
            </h2>
            <div className="h-full flex flex-col justify-center items-center">
              <div className="p-10 bg-[#F4F5FA] rounded-full">
                <BagIcon />
              </div>
              <h2 className="mt-10 ff-poppins text-xl font-medium text-center">
                No Orders Yet?
              </h2>
              <p className="text-[#8B8D97] ff-Inter text-center w-[80%] mt-3 text-sm">
                Add products to your store and start selling to see orders here.
              </p>
              <Link
                to="/dashboard/orders"
                className="flex items-center justify-center gap-5 py-2.5 px-4.5 mt-6 rounded-xl bg-[#5570F1] text-[16px] text-white hover:text-[#323232] cursor-pointer group-hover/recent:bg-white group-hover/recent:text-[#5570F1]!"
              >
                New Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
