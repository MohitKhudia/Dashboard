import React from 'react'
import { DownArrow, HomeIcon, NotifictionIcon } from './Icon';
import Avator from '../assets/img/svg/Avator.svg';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../Contaxt';

const Navbaar = () => {
  const { profileImage } = AppContext()
  const location = useLocation();
  return (
    <div>
      <nav>
        <div className="flex justify-between items-center py-3.5 px-5.5 w-full ">
          <h1 className="text-xl font-medium ff-poppins ">Dashboard</h1>
          <div className="flex items-center gap-5">
            <div className="py-1.5 px-3 bg-[#FEF5EA] flex items-center gap-5 rounded-lg">
              <h5 className="text-sm ff-Inter text-[#1C1D22]">Nanny’s Shop</h5>
              <DownArrow />
            </div>
            <NotifictionIcon />
            <div className="h-8 w-8 ">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <img
                  src={Avator}
                  alt="Avator"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
        <hr className="border-b border-[#F1F3F9] border-[1px]" />
        <div className="py-3.5 px-5.5 flex items-center gap-3">
          <HomeIcon />
          <p className="text-[#8B8D97] text-xs ff-Inter">{location.pathname}</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbaar
