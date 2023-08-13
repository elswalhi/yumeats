import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign Up to join Our newsletter and stay up todate</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              placeholder=" Enter Your Email"
              type="email"
              className="p-3 flex w-full rounded-md text-black "
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 p-3 border-none">
              Notify me
            </button>
          </div>
          <p>We Are Concerned about the security of your date read {""}
          <span className="text-[#00df9a]">privacy policy</span>
          </p>
        </div>
        <hr className="my-8 bg-grey-700 border-1 w-full" />
      </div>
    </div>
  );
};

export default NewsLetter;
