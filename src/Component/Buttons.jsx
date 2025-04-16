import React from 'react'

export const FormButton = ({value , Type}) => {

  return (
    <div>
        <button className="border-2 border-[#5570F1] py-[17px] px-6 rounded-xl text-xl ff-Inter  text-[#5570F1] hover:bg-[#5570F1] hover:text-white transition-all duration-300 hover:scale-90"
          type={Type}
        >
          {value}
        </button>
    </div>
  );
}
export const LoginButton =({OnSubmit })=>{
  return (
    <button
      className="py-[17px] px-10 rounded-xl text-xl ff-Inter bg-[#5570F1] text-white transition-all duration-300 hover:scale-90"
      type='submit'
    >
      Login
    </button>
  );
}