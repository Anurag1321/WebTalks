import React from "react";
const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://i.pinimg.com/originals/3a/b5/27/3ab527cfe70bae319817813b7e81ad07.jpg"
              alt="profile-photo"
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between gap-2 '>
            <p>Arman</p>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </div>
  );
};
export default OtherUser;
