"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage, { Data } from "./BackgroundImage";
import Link from "next/link";

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
    <AnimatePresence initial={false}>
      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[90dvh]">
        <BackgroundImage
          currentData={data[currentIndex]}
          nextData={data[(currentIndex + 1) % data.length]}
        />
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
