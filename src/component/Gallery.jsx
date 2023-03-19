import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className=" max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className=" text-center text-gray-700 p-4">Gallery</h2>
      <div className=" grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className=" w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1643145291429-656bd2901257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className=" w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1636741742569-b1cdb45a6570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className=" w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className=" w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1646548851235-0321e69f812f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className=" w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1667768707100-604610f12612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
