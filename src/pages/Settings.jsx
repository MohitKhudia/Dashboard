import React, { useState, useRef, useEffect } from "react";
import { DefalutImgIcon, EmailIcon, LocationIcon, UploadCloudIcon, UploadImgIcon, UserIcon } from "../Component/Icon";
import { PhoneInput } from "react-international-phone";
import { AppContext } from "../Contaxt";

const Settings = () => {
  const {profileImage , setProfileImage} = AppContext()
  const [activeTab, setActiveTab] = useState("account");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [localImage, setLocalImage] = useState(null);
  const [phone, setPhone] = useState("");
  
  const fileInputRef = useRef(null);
  const tabsRef = useRef([]);
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocalImage(file);
    }
  };
  const handleUpdate = () => {
    if (localImage) {
      setProfileImage(localImage);  
    }
  };
  useEffect(() => {
    tabsRef.current = tabsRef.current.slice(0, 3);
  }, []);

  useEffect(() => {
    const activeTabIndex = ["account", "business", "security"].indexOf(
      activeTab
    );
    if (tabsRef.current[activeTabIndex]) {
      const tabElement = tabsRef.current[activeTabIndex];
      setIndicatorStyle({
        left: tabElement.offsetLeft,
        width: tabElement.offsetWidth,
        transition: "all 300ms ease-in-out",
      });
    }
  }, [activeTab]);

  return (
    <div className="py-7 px-5 bg-[#F4F5FA] min-h-screen">
      <div className="bg-white py-4 px-9 rounded-xl">
        {/* Tabs with sliding indicator */}
        <div className="relative">
          <div className="flex gap-2.5">
            <button
              ref={(el) => (tabsRef.current[0] = el)}
              className={`py-3 px-6 font-medium ${
                activeTab === "account" ? "text-[#2B2F32]" : "text-[#ABAFB1]"
              }`}
              onClick={() => setActiveTab("account")}
            >
              Account
            </button>
            <button
              ref={(el) => (tabsRef.current[1] = el)}
              className={`py-3 px-6 font-medium ${
                activeTab === "business" ? "text-[#2B2F32]" : "text-[#ABAFB1]"
              }`}
              onClick={() => setActiveTab("business")}
            >
              Business
            </button>
            <button
              ref={(el) => (tabsRef.current[2] = el)}
              className={`py-3 px-6 font-medium ${
                activeTab === "security" ? "text-[#2B2F32]" : "text-[#ABAFB1]"
              }`}
              onClick={() => setActiveTab("security")}
            >
              Security
            </button>
          </div>
          {/* Sliding indicator */}
          <div
            className="absolute bottom-0 h-1 bg-[#5570F1]"
            style={indicatorStyle}
          />
        </div>

        {/* Account Settings Form */}
        {activeTab === "account" && (
          <>
            <div className="mt-5 flex items-center justify-between">
              <h1 className="text-[#45464E] text-xl font-medium ff-poppins">
                Account Settings
              </h1>
              <button
                onClick={handleUpdate}
                className="bg-[#5570F1] text-white py-[17px] px-8 rounded-xl text-xl ff-Inter cursor-pointer"
              >
                Update
              </button>
            </div>
            <form action="">
              <div className="flex gap-17.5 mt-15 w-1/2">
                <div className="w-[60%] flex flex-col">
                  <label
                    htmlFor="FirstName"
                    className="text-[#5E6366] text-sm ff-Inter "
                  >
                    First Name
                  </label>
                  <div className="relative flex items-center gap-4 mt-2 py-2 px-4 bg-[#EFF1F999] rounded-lg">
                    <label htmlFor="FirstName">
                      <UserIcon />
                    </label>
                    <input
                      type="text"
                      id="FirstName"
                      className="outline-none  text-[#5E6366] ff-Inter  w-full "
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <label
                    htmlFor="LastName"
                    className="text-[#5E6366] text-sm ff-Inter mt-4"
                  >
                    Last Name
                  </label>
                  <div className="relative flex items-center gap-4 mt-2 py-2 px-4 bg-[#EFF1F999] rounded-lg">
                    <label htmlFor="LastName">
                      <UserIcon />
                    </label>
                    <input
                      type="text"
                      id="LastName"
                      className="outline-none  text-[#5E6366] ff-Inter  w-full "
                      placeholder="Enter Your Last Name"
                    />
                  </div>
                  <label
                    htmlFor="Email"
                    className="text-[#5E6366] text-sm ff-Inter mt-4"
                  >
                    Email
                  </label>
                  <div className="relative flex items-center gap-4 mt-2 py-2 px-4 bg-[#EFF1F999] rounded-lg">
                    <label htmlFor="Email">
                      <EmailIcon />
                    </label>
                    <input
                      type="text"
                      id="Email"
                      className="outline-none  text-[#5E6366] ff-Inter  w-full "
                      placeholder="Your Email"
                    />
                  </div>
                  <label
                    htmlFor="PhoneNumber"
                    className="text-[#5E6366] text-sm ff-Inter mt-4"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <PhoneInput
                      defaultCountry="in"
                      id="PhoneNumber"
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
                  <label
                    htmlFor="Address"
                    className="text-[#5E6366] text-sm ff-Inter mt-4"
                  >
                    Address
                  </label>
                  <div className="relative flex items-center gap-4 mt-2 py-2 px-4 bg-[#EFF1F999] rounded-lg">
                    <label htmlFor="Address">
                      <LocationIcon />
                    </label>
                    <input
                      type="text"
                      id="Address"
                      className="outline-none  text-[#5E6366] ff-Inter  w-full "
                      placeholder="Your Address"
                    />
                  </div>
                  <label
                    htmlFor="City"
                    className="text-[#5E6366] text-sm ff-Inter mt-4"
                  >
                    City
                  </label>
                  <div className="relative flex items-center gap-4 mt-2 py-2 px-4 bg-[#EFF1F999] rounded-lg">
                    <input
                      type="text"
                      id="City"
                      className="outline-none  text-[#5E6366] ff-Inter  w-full "
                      placeholder="Your City"
                    />
                  </div>
                </div>
                <div className="w-[30%]">
                  <div className="flex items-center mb-8">
                    <div className="relative mr-6">
                      <div
                        className={`h-43 w-[172px]  rounded-xl overflow-hidden flex items-center justify-center`}
                      >
                        {profileImage ? (
                          <img
                            src={URL.createObjectURL(profileImage)}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className="bg-[#F4F5FA] w-[200px] rounded-xl py-17.5 px-4 border border-[#E1E2E9] cursor-pointer "
                            onClick={triggerFileInput}
                          >
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
                        )}
                      </div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}

        {/* Business Tab Content */}
        {activeTab === "business" && (
          <div className="py-6">
            <h1 className="text-2xl font-bold mb-4">Business Information</h1>
            <p>Your business settings will appear here</p>
          </div>
        )}

        {/* Security Tab Content */}
        {activeTab === "security" && (
          <div className="py-6">
            <h1 className="text-2xl font-bold mb-4">Security Settings</h1>
            <p>Your security settings will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
