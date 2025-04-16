import React from "react";
import { FilterIcon, ShareIcon } from "./Icon";

const Options = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <button
          type="button"
          className="flex items-center border border-[#53545C] rounded-sm gap-2.5 text-[#53545C] text-[11px] ff-Inter p-2 cursor-pointer "
        >
          <FilterIcon />
          Filter
        </button>
      </div>
      <div className="relative">
        <button
          type="button"
          className="flex items-center border border-[#53545C] rounded-sm gap-2.5 text-[#53545C] text-[11px] ff-Inter p-2 cursor-pointer "
        >
          <ShareIcon/>
          Share
        </button>
      </div>
      <div className="relative">
        <button
          type="button"
          className="flex items-center border border-[#53545C] rounded-sm gap-2.5 text-[#53545C] text-[11px] ff-Inter p-2 cursor-pointer "
        >
          <select name="Bulk" id="Bulk" className="outline-none">
            <option disabled selected >Bulk Action</option>
            <option value="archive">archive</option>
            <option value="assign">assign</option>
            <option value="tag">tag</option>
          </select>
        </button>
      </div>
      
    </div>
  );
};

export default Options;
