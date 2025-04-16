import { useState } from "react";
import {
  BagIcon,
  CalanderIcon,
  ClockIcon,
  CloseIcon,
  DropdownIcon,
  SearchIcon,
} from "./Icon";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { FormButton } from "./Buttons";
import { db } from "../Firebase.config";
import { addDoc, collection, doc } from "firebase/firestore";

export function CreateNewOrder({ IsOpen, setIsOpen , getData }) {
  const [NewCustomer, setNewCustomer] = useState(true);

  const [formdata, setformdata] = useState({
    Name: "",
    email: "",
    phone: "",
    paymentType: "",
    OrderType: "",
    Date: "",
    Time: "",
    OrderStatus: "",
    Notes: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Orders"), {
      name: formdata.Name,
      email: formdata.email,
      phone: formdata.phone,
      paymentType: formdata.paymentType,
      OrderType: formdata.OrderType,
      Date: formdata.Date,
      Time: formdata.Time,
      OrderStatus: formdata.OrderStatus,
      Notes: formdata.Notes,
    });
    getData()
  };

  return (
    <div
      className={`backdrop-blur-[2px] ${
        NewCustomer ? "h-screen" : "h-[120vh]"
      } w-full flex items-center justify-center absolute top-0 left-0 z-10 ${
        IsOpen ? "scale-100" : "scale-0"
      } transition-all duration-400 ease-in-out`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#fff] rounded-xl shadow-lg w-[90%] md:w-[60%]  py-7 px-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl ff-poppins font-medium">Create New Order</h2>
          <button
            type="button"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="mt-7 lg:flex gap-8 justify-between w-full">
          <div className="w-1/2">
            <div className="flex justify-between">
              <h3 className="text-[#8B8D97]  text-[16px] ff-Inter font-medium">
                Order Details
              </h3>
              <div className="flex items-center gap-5">
                <p className="ff-Inter text-[#8B8D97] text-sm">New Customer</p>
                <input
                  type="checkbox"
                  className="ToggleCheckbox"
                  onClick={() => setNewCustomer(!NewCustomer)}
                />
              </div>
            </div>
            {/* Off NewCustomer  */}
            {NewCustomer && (
              <div className="mt-6.5">
                <div className="relative">
                  <select
                    name="customer"
                    className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                  >
                    <option value="Select">Select Customer</option>
                    <option value="customer1">customer 1</option>
                    <option value="customer2">customer 2</option>
                    <option value="customer3">customer 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                    <DropdownIcon />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <div className="w-1/2 relative">
                    <select
                      name="Payment Method"
                      className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                    >
                      <option value="Select">Payment Type</option>
                      <option value="UPI">Paytm, UPI, PayPal</option>
                      <option value="Credit/Debit Card">
                        Credit/Debit Card
                      </option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                      <DropdownIcon />
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <select
                      name="customer"
                      className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                    >
                      <option value="Select">Order Type</option>
                      <option value="Standard Delivery">
                        Standard Delivery
                      </option>
                      <option value="Express Shipping">Express Shipping</option>
                      <option value="Pickup In-Store">Pickup In-Store</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>
                {/* Time & Date  */}
                <h4 className="text-xs text-[#53545C] ff-Inter mt-6">
                  Order Time & Date
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
                <h4 className="text-xs text-[#53545C] ff-Inter mt-6">
                  Order Status
                </h4>
                <div className="relative mt-2">
                  <select
                    name="customer"
                    className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="In-progress">In-progress</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                    <DropdownIcon />
                  </div>
                </div>
                <textarea
                  name="Notes"
                  id="note"
                  className="h-[124px] w-full bg-[#EFF1F999] rounded-lg p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6 max-h-[124px] "
                  placeholder="Order Note"
                  maxLength="100"
                />
              </div>
            )}
            {/* On New Customer  */}
            {!NewCustomer && (
              <>
                <input
                  type="text"
                  name="Name"
                  value={formdata.Name}
                  className="bg-[#EFF1F999] rounded-lg w-full p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6.5 "
                  placeholder="Customer Name"
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="bg-[#EFF1F999] rounded-lg w-full p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6.5 "
                  placeholder="Customer Email"
                  value={formdata.email}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
                <div className="mt-6.5 ">
                  <PhoneInput
                    defaultCountry="in"
                    name="phone"
                    value={formdata.phone}
                    required
                    onChange={(phonevalue) =>
                      setformdata((prev) => ({
                        ...prev,
                        phone: phonevalue,
                      }))
                    }
                    inputClassName="!bg-[#EFF1F999] !rounded-lg w-[80%]  !px-4 !text-[#ABAFB1] !text-[16px] !border-none !ff-Inter"
                    countrySelectorStyleProps={{
                      buttonClassName:
                        "!bg-[#EFF1F999] !px-4 !py-1.5 !rounded-lg !h-full !border-none w-full",
                      dropdownStyleProps: {
                        className: "z-50",
                      },
                    }}
                    inputStyle={{
                      paddingLeft: "100px",
                      marginLeft: "10px",
                    }}
                    placeholder="8023456789"
                  />
                </div>
                {/* Payment Type & Order Type  */}
                <div className="flex gap-3 mt-6">
                  <div className="w-1/2 relative">
                    <select
                      name="paymentType"
                      className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                      value={formdata.paymentType}
                      required
                      onChange={(e) =>
                        setformdata({
                          ...formdata,
                          [e.target.name]: e.target.value,
                        })
                      }
                    >
                      <option value="Select">Payment Type</option>
                      <option value="UPI">Paytm, UPI, PayPal</option>
                      <option value="Credit/Debit Card">
                        Credit/Debit Card
                      </option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                      <DropdownIcon />
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <select
                      name="OrderType"
                      className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                      required
                      value={formdata.OrderType}
                      onChange={(e) =>
                        setformdata({
                          ...formdata,
                          [e.target.name]: e.target.value,
                        })
                      }
                    >
                      <option value="Select" disabled>
                        Order Type
                      </option>
                      <option value="Home Delivery">Home Delivery</option>
                      <option value="Pick Up">PickUp</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>
                {/* Time & Date  */}
                <h4 className="text-xs text-[#53545C] ff-Inter mt-6">
                  Order Time & Date
                </h4>
                <div className="flex flex-col sm:flex-row mt-2 space-y-2 sm:space-y-0 sm:space-x-4">
                  {/* Date  */}
                  <div className="w-1/2 bg-[#EFF1F999]  rounded-lg flex items-center px-4 py-2 gap-4 ">
                    <div className="inline-block cursor-pointer">
                      <CalanderIcon />
                    </div>
                    <input
                      type="date"
                      name="Date"
                      required
                      className="w-full outline-0 text-[#ABAFB1] ff-Inter "
                      value={formdata.Date}
                      onChange={(e) =>
                        setformdata({
                          ...formdata,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  {/* Time  */}
                  <div className="w-1/2 bg-[#EFF1F999] rounded-lg px-4 py-2 flex items-center gap-4">
                    <div className="inline-block cursor-pointer">
                      <ClockIcon />
                    </div>
                    <input
                      type="time"
                      className="w-full outline-0 text-[#ABAFB1] ff-Inter"
                      name="Time"
                      value={formdata.Time}
                      required
                      onChange={(e) =>
                        setformdata({
                          ...formdata,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <h4 className="text-xs text-[#53545C] ff-Inter mt-6">
                  Order Status
                </h4>
                {/* Order Status  */}
                <div className="relative mt-2">
                  <select
                    name="OrderStatus"
                    className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                    value={formdata.OrderStatus}
                    required
                    onChange={(e) =>
                      setformdata({
                        ...formdata,
                        [e.target.name]: e.target.value,
                      })
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="In-progress">In-progress</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                    <DropdownIcon />
                  </div>
                </div>
                <textarea
                  name="Notes"
                  id="note"
                  className="h-[124px] w-full bg-[#EFF1F999] rounded-lg p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6 max-h-[124px] "
                  placeholder="Order Note"
                  maxLength="100"
                  value={formdata.Notes}
                  onChange={(e) =>
                    setformdata({
                      ...formdata,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="text-[16px] font-medium ff-Inter text-[#8B8D97]">
              Items
            </h2>
            <div className="flex rounded-lg py-2 px-4 border border-[#5E6366] gap-2.5 mt-7">
              <SearchIcon />
              <input
                type="text"
                className="w-full outline-none text-[#ABAFB1] text-[16px] ff-Inter"
                placeholder="Search items"
              />
            </div>
            <div
              className={`${
                NewCustomer ? "h-[82%]" : "h-full"
              } flex flex-col items-center justify-center`}
            >
              <div className="p-10 bg-[#F4F5FA] rounded-full">
                <BagIcon />
              </div>
              <h2 className="mt-10 ff-poppins text-xl font-medium text-center">
                Add Products to Your Order
              </h2>
              <p className="text-[#8B8D97] ff-Inter text-center w-[80%] mt-3 text-sm">
                Search and add products to this order.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-11 flex items-center justify-center gap-10">
          <FormButton value={"Cancel"} />
          <FormButton value={"Create Order"} Type="Submit" />
        </div>
      </form>
    </div>
  );
}
export function AddNewCustomer({ IsOpen, setIsOpen }) {
  const [phone, setPhone] = useState("");
  const [AddAddress, setAddAddress] = useState(false);
  return (
    <div
      className={`backdrop-blur-[2px] w-full h-[110vh] flex items-center justify-center absolute top-0 left-0 z-10 transition-all duration-400 ease-in-out ${
        IsOpen ? "scale-100" : "scale-0"
      } `}
    >
      <div className="bg-[#fff] rounded-xl shadow-lg w-[90%] md:w-[35%]  py-7 px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl ff-poppins font-medium">Add a New Customer</h2>
          <button
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <h2 className="text-[16px] font-medium ff-Inter text-[#8B8D97]">
          Customer Information
        </h2>
        <form action="submit">
          <input
            type="text"
            className="bg-[#EFF1F999] rounded-lg w-full p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6.5 "
            placeholder="Customer Name"
          />
          <input
            type="email"
            className="bg-[#EFF1F999] rounded-lg w-full p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6.5 "
            placeholder="Customer Email"
          />
          <div className="mt-6.5 ">
            <PhoneInput
              defaultCountry="in"
              value={phone}
              onChange={setPhone}
              inputClassName="!bg-[#EFF1F999] !rounded-lg w-[80%]  !px-4 !text-[#ABAFB1] !text-[16px] !border-none !ff-Inter"
              countrySelectorStyleProps={{
                buttonClassName:
                  "!bg-[#EFF1F999] !px-4 !py-1.5 !rounded-lg !h-full !border-none w-full",
                dropdownStyleProps: {
                  className: "z-50",
                },
              }}
              inputStyle={{
                paddingLeft: "100px",
                marginLeft: "10px",
              }}
              placeholder="8023456789"
            />
          </div>
          <div className="flex items-center gap-5 mt-6.5">
            <h2 className="text-[#2B2F32] ff-Inter ">Add Address</h2>
            <input
              type="checkbox"
              className="ToggleCheckbox"
              onClick={() => setAddAddress(!AddAddress)}
            />
          </div>
          <div
            className={` ${
              AddAddress ? "h-full" : "h-0"
            } overflow-hidden transition-all duration-300`}
          >
            <input
              type="text"
              className="bg-[#EFF1F999] rounded-lg w-full p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6.5 "
              placeholder="Building No., Street Address"
            />
            <input
              type="email"
              className="bg-[#EFF1F999] rounded-lg w-full p-4 text-[#ABAFB1] text-[16px] outline-none ff-Inter mt-6.5 "
              placeholder="City"
            />
            <div className={`flex gap-3 mt-6`}>
              <div className="w-1/2 relative">
                <select
                  name="Payment Method"
                  className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                >
                  <option value="Country">Country</option>
                  <option value="India">India</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                  <DropdownIcon />
                </div>
              </div>
              <div className="w-1/2 relative">
                <select
                  name="customer"
                  className="w-full h-[52px] rounded-lg py-2 px-4.5 text-[#ABAFB1] text-[16px] outline-none ff-Inter bg-[#EFF1F999] appearance-none cursor-pointer group"
                >
                  <option value="State\">State</option>
                  <option value="Haryana">Haryana</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 ">
                  <DropdownIcon />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6.5 w-full">
              <h2 className="text-[#8B8D97] text-[16px] ff-Inter font-medium ">
                Billing Address
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-[#83898C] ff-Inter">
                  Same as Customer Address
                </p>
                <input type="checkbox" className="ToggleCheckbox" />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-11 flex items-center justify-center gap-10">
          <FormButton value={"Cancel"} />
          <FormButton value={"Add"} />
        </div>
      </div>
    </div>
  );
}
