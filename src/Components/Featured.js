import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  let [index, setIndex] = useState(0);
  const prevSlider = () => {
    const isFristSlide = index === 0;
    const newIndex = isFristSlide ? sliders.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = index === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };
  const moveToNextSlide = (slideIndex) => {
    setIndex(slideIndex);
  };
  return (
    <div className=" h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[index].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] cursor-pointer -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-orange-700 text-white">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] cursor-pointer -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-orange-700 text-white">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {sliders.map((Slideritem, Sliderindex) => {
          return (
            <div
              className="text-2xl cursor-pointer"
              key={Sliderindex}
              onClick={() => {
                moveToNextSlide(Sliderindex);
              }}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
