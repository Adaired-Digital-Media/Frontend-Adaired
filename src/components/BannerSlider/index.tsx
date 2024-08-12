"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundImage, { Data } from "./BackgroundImage";
import MaxWidthWrapper from "../MaxWidthWrapper";
import BoxReveal from "../magicui/BoxReveal";
import Button from "../Button";

type Props = {};

const BannerSlider = (props: Props) => {
  const [data, setData] = useState<Data[]>(sliderData);
  const [currentIndex, setCurrentIndex] = useState<number>(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <AnimatePresence>
      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[90dvh] flex items-end p-28 ">
        <BackgroundImage
          currentData={data[currentIndex]}
          nextData={data[(currentIndex + 1) % data.length]}
        />
        <MaxWidthWrapper className="overflow-hidden text-white ">
          <BoxReveal
            boxColor={"#5046e6"}
            duration={0.5}
            key={data[currentIndex].subHead} // Key prop to restart effect on title change
          >
            <h4 className="z-[200] text-xl max-w-96">
              {data[currentIndex].subHead}
            </h4>
          </BoxReveal>
          <BoxReveal
            boxColor={"#5046e6"}
            duration={0.5}
            key={data[currentIndex].title} // Key prop to restart effect on title change
          >
            <h1 className="z-[200] text-6xl max-w-2xl">
              {data[currentIndex].title}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button
              title="Request a callback"
              className="bg-white text-black mt-5"
              svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-[11rem] "
              type="button"
              navigateTo="/about"
            />
          </BoxReveal>
        </MaxWidthWrapper>
      </div>
    </AnimatePresence>
  );
};

export default BannerSlider;

const sliderData: Data[] = [
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/BannerImage_1",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/BannerImage_2",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
  {
    img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/BannerImage_3",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
];
