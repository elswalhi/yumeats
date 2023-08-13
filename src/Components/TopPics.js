import React from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPics = () => {
  return (
    <>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2 pb-4">
        Top Pics
      </h1>
      <div className="hidden lg:flex max-w[1520px] m-auto px-2">
        <Splide
          options={{ perPage: 4, gap: "0.5rem", drag: "free", arrows: false }}
        >
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="relative rounded-3xl">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white ">
                    <p className="px-2 pt-4 font-bold text-2xl">{item.title}</p>
                    <p className="px-2">{item.price}</p>
                    <button className="border-dotted left-1 border-white text-white absolute bottom-4">
                      Add To Card
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default TopPics;
