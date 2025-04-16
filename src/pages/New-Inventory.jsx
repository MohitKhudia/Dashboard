import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
  AddIcon,
  AlianCenter,
  AlianEnd,
  AlianStart,
  BoldIcon,
  CalanderIcon,
  ClockIcon,
  DownArrow,
  DownTringleIcon,
  DropdownIcon,
  ItalicIcon,
  LinkIcon,
  UnderlineIcon,
  DefalutImgIcon,
  UploadCloudIcon,
} from "../Component/Icon";
import { Tooltip } from 'react-tooltip';


const NewInventory = () => {
    const [RedLine , setRedLine] = useState(false) 
    const [Alignment, setAlignment] = useState(null);
    const [Bold , setBold] = useState(false)
    const [Italic , setItalic] = useState(false)
    const [Underline, setUnderline] = useState(false)
    const handleAlignment = (align) => {
        setAlignment(align);
    }
  return (
    <div className="py-7 px-5 bg-[#F4F5FA] Inventory">
      {/* top section  */}
      <div className="flex items-center justify-between ">
        <h1 className="text-[#45464E] text-[16px] font-medium ff-Inter">
          Inventory Summary
        </h1>
        <div className="flex items-center gap-6">
          <Link className="bg-[#1C1D22]  flex gap-2.5 items-center rounded-xl py-[17px] px-4 ">
            <p className="text-sm ff-Inter text-white pr-3 border-r-[1px] border-[#37393F] ">
              Save as Draft
            </p>
            <DownArrow Value={"white"} />
          </Link>
          <Link className="bg-[#5570F1]  flex gap-2.5 text-sm ff-Inter text-white items-center rounded-xl py-[17px] px-4 ">
            Save & Publish
          </Link>
        </div>
      </div>
      {/* main section  */}
      <div className="grid grid-cols-[70%_30%] gap-4 mt-4">
        <div className="bg-[#fff] rounded-xl py-7 px-7.5 grid grid-cols-2 gap-15">
          <form action="submit">
            <input
              type="text"
              className="p-4 bg-[#EFF1F999] text-[16px] ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none focus:border-none"
              placeholder="Product Name"
            />
            <div className="relative">
              <select
                name="none"
                id="Product"
                className="p-4 bg-[#EFF1F999] text-[16px] cursor-pointer ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none mt-6 appearance-none"
              >
                <option value="" disabled selected>
                  Select a product Category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-0 flex items-center pr-4 ">
                <DropdownIcon />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <input
                type="text"
                className="p-4 bg-[#EFF1F999] text-[16px] ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none focus:border-none"
                placeholder="Selling Price"
              />
              <input
                type="text"
                className="p-4 bg-[#EFF1F999] text-[16px] ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none focus:border-none"
                placeholder="Cost Prize"
              />
            </div>
            <input
              type="number"
              name=""
              id="Quantity"
              className="p-4 bg-[#EFF1F999] text-[16px] ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none focus:border-none mt-6"
              placeholder="Quantity"
            />
            <div className="relative">
              <select
                name="none"
                id="Product"
                className="p-4 bg-[#EFF1F999] text-[16px] cursor-pointer ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none mt-6 appearance-none"
              >
                <option value="" disabled selected>
                  Order Type
                </option>
                <option value="Home Devlivery">Home Devlivery</option>
                <option value="Pick Up">Pick Up</option>
              </select>
              <div className="pointer-events-none absolute top-1/2 right-0 flex items-center pr-4 ">
                <DropdownIcon />
              </div>
            </div>
            {/* Discount toggle */}
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-[#8B8D97] text-[16px] ff-Inter font-medium">
                Discount
              </h2>
              <div className="flex items-center gap-5">
                <h2 className="text-[#83898C] text-sm ff-Inter ">
                  Add Discount
                </h2>
                <input
                  type="checkbox"
                  className="ToggleCheckbox"
                  onClick={() => setRedLine(!RedLine)}
                />
              </div>
            </div>
            <p
              className={`${
                RedLine ? "block" : "hidden"
              } text-[#CC5F5F] text-sm ff-Inter mt-2`}
            >
              *No Any Discount Available Now
            </p>
            {/* Expire Date Toggle */}
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-[#8B8D97] text-[16px] ff-Inter font-medium">
                Expiry Date
              </h2>
              <div className="flex items-center gap-5">
                <h2 className="text-[#83898C] text-sm ff-Inter ">
                  Add Expiry Date
                </h2>
                <input type="checkbox" className="ToggleCheckbox" />
              </div>
            </div>
          </form>
          <div>
            <textarea
              name=""
              id=""
              className="p-4 bg-[#EFF1F999] text-[16px] ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none focus:border-none min-h-[170px]"
              placeholder="Short Description"
            />
            {/* Text Area Long Description  */}
            <h2 className="text-[#5E6366] text-sm ff-Inter mt-6">
              Product Long Description
            </h2>
            <div
              name="Long Des"
              id="LongDes"
              className="p-2 bg-[#EFF1F999] mt-2 text-[16px] ff-Inter text-[#ABAFB1] rounded-lg w-full outline-none focus:border-none min-h-[170px]"
            >
              <div className="flex flex-col xl:flex-row  items-center gap-5.5 overflow-hidden">
                <div className="flex gap-2">
                  <button className="rounded-lg py-2 text-[10px] ff-Inter px-2.5 border border-[#CFD3D4] gap-6 flex items-center">
                    Roboto
                    <DownTringleIcon />
                  </button>
                  <button className="rounded-lg py-2 text-[10px] ff-Inter px-2.5 border border-[#CFD3D4] gap-6 flex items-center">
                    Paragrah
                    <DownTringleIcon />
                  </button>
                </div>
                <div className="flex items-center gap-2 justify-between w-full">
                  {/* for Bold  */}
                  <button
                    onClick={() => setBold(!Bold)}
                    data-tooltip-id="bold-tooltip"
                    data-tooltip-content="Text Bold"
                  >
                    <BoldIcon />
                  </button>
                  <Tooltip id="bold-tooltip" />
                  {/* for undeline  */}
                  <button
                    onClick={() => setUnderline(!Underline)}
                    data-tooltip-id="underline-tooltip"
                    data-tooltip-content="Underline"
                  >
                    <UnderlineIcon />
                  </button>
                  <Tooltip id="underline-tooltip" />
                  {/* for Itlic  */}
                  <button
                    onClick={() => setItalic(!Italic)}
                    data-tooltip-id="Italic-tooltip"
                    data-tooltip-content="Italic"
                  >
                    <ItalicIcon />
                  </button>
                  <Tooltip id="Italic-tooltip" />
                  {/* for Align Right  */}
                  <button
                    onClick={() => handleAlignment("left") }
                    data-tooltip-id="left-tooltip"
                    data-tooltip-content="Text-Left"
                  >
                    <AlianStart />
                  </button>
                  <Tooltip id="left-tooltip" />
                  {/* for center  */}
                  <button
                    onClick={() => handleAlignment("center")}
                    data-tooltip-id="center-tooltip"
                    data-tooltip-content="Text-center"
                  >
                    <AlianCenter />
                  </button>
                  <Tooltip id="center-tooltip" />
                  {/* for Align Left  */}
                  <button
                    onClick={() => handleAlignment("right")}
                    data-tooltip-id="right-tooltip"
                    data-tooltip-content="Text-right"
                  >
                    <AlianEnd />
                  </button>
                  <Tooltip id="right-tooltip" />
                  {/* and the last For Line  */}
                  <button>
                    <LinkIcon />
                  </button>
                </div>
              </div>
              <input
                type="text"
                className={`w-full mt-4 text-[16px] text-[#ABAFB1] ff-Inter outline-none focus:border-none ${
                  Bold ? "font-bold" : ""
                } ${Underline ? "underline" : ""} ${
                  Italic ? "italic" : ""
                } text-${Alignment}`}
                placeholder="Your text goes here"
              />
            </div>
            <p className="text-[#ABAFB1] ff-Inter mt-1 ">
              Add a long description for your product
            </p>
            {/* Return Policy Toggle */}
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-[#8B8D97] text-[16px] ff-Inter font-medium">
                Return Policy
              </h2>
              <div className="flex items-center gap-5">
                <h2 className="text-[#83898C] text-sm ff-Inter ">
                  Add Discount
                </h2>
                <input type="checkbox" className="ToggleCheckbox" />
              </div>
            </div>
            {/* Time & Date  */}
            <h4 className="text-xs text-[#53545C] ff-Inter mt-6">
              Date Addred
            </h4>
            <div className="flex flex-col lg:flex-row mt-2 gap-2 overflow-hidden">
              <div className="lg:w-1/2 bg-[#EFF1F999]  rounded-lg flex items-center px-4 py-2 gap-4 ">
                <div className="inline-block cursor-pointer">
                  <CalanderIcon />
                </div>
                <input
                  type="date"
                  className="w-full outline-0 text-[#ABAFB1] ff-Inter "
                />
              </div>
              <div className="lg:w-1/2 bg-[#EFF1F999] rounded-lg px-4 py-2 flex items-center gap-4">
                <div className="inline-block cursor-pointer">
                  <ClockIcon />
                </div>
                <input
                  type="time"
                  className="w-full outline-0 text-[#ABAFB1] ff-Inter"
                  defaultValue="12:00"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-xl py-7 px-7.5">
          <div className="bg-[#F4F5FA] rounded-xl py-17.5 px-4 border border-[#E1E2E9] ">
            <div className="flex justify-center">
              <DefalutImgIcon />
            </div>
            <div className="flex items-center gap-3 justify-center mt-7.5">
              <UploadCloudIcon />
              <h2 className="text-[16px] font-medium ff-Inter text-[#5570F1]">
                Upload Image
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewInventory
