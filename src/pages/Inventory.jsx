import React from 'react'
import { AddIcon, CustomersIcon, DownArrow, InventoryIcon } from '../Component/Icon';
import { Link } from 'react-router-dom';

const Inventory = () => {
  return (
    <div className="py-7 px-5 bg-[#F4F5FA] Inventory">
      <div className="flex items-center justify-between ">
        <h1 className="text-[#45464E] text-[16px] font-medium ff-Inter">
          Inventory Summary
        </h1>
        <Link
        to="/Inventory/new-inventory"
         className="bg-[#5570F1] text-sm ff-Inter flex gap-2.5 items-center text-white rounded-xl py-[17px] px-4 hover:bg-[#FFEBD3] hover:text-[#5570F1] transition duration-500 ease-in-out create-order">
          <AddIcon /> Add a New Product
        </Link>
      </div>
      {/* Columes  */}
      <div className="flex gap-5 mt-5">
        <div className="w-1/2 bg-white p-6 rounded-xl py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-[#FFCC9129] rounded-xl">
              <InventoryIcon />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs ff-Inter text-[#BEC0CA]">This Week</p>
              <DownArrow />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">All Products</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                350
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Active</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                316
                <span className="text-[#519C66] text-xs ff-Inter">86%</span>
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
              <h5 className="text-sm ff-Inter text-[#CC5F5F]">
                Low Stock Alert
              </h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                23
                <span className="text-[#519C66] text-xs ff-Inter">+15.80%</span>
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">Expired</h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
                3
              </p>
            </div>
            <div>
              <h5 className="text-sm ff-Inter text-[#8B8D97]">
                1 Start Rating
              </h5>
              <p className="xl:text-xl text-sm ff-poppins font-medium text-[#45464E] mt-2 flex items-center gap-2">
               2
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory
