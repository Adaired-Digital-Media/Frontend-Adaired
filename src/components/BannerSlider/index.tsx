"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage, { Data } from "./BackgroundImage";
import MaxWidthWrapper from "../MaxWidthWrapper";
import BoxReveal from "../magicui/BoxReveal";
import Button from "../Button";
import { Icons } from "../Icons";
import { gsap } from "gsap";
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

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#line1",
      { strokeDasharray: "200", strokeDashoffset: "200" },
      { strokeDashoffset: "0", duration: 2, ease: "power2.inOut" }
    )
      .fromTo(
        "#icon1",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      )
      .fromTo(
        "#icon2",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      )
      .fromTo(
        "#icon3",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      )
      .fromTo(
        "#line2",
        { strokeDasharray: "200", strokeDashoffset: "200" },
        { strokeDashoffset: "0", duration: 2, ease: "power2.inOut" }
      );
  }, []);

  return (
    <AnimatePresence>
      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[90dvh] flex items-end py-24 ">
        <BackgroundImage
          currentData={data[currentIndex]}
          nextData={data[(currentIndex + 1) % data.length]}
        />
        <div className="absolute inset-0 h-full w-full bg-black opacity-25">
          {/* Overlay */}
        </div>
        {/* <div className="absolute top-1/2 right-0 2xl:right-unset 2xl:left-4 3xl:left-10 4xl:left-24 transform -translate-y-1/2 text-white hidden 2xl:flex flex-col items-center justify-center space-y-10 transition-all duration-300">
          <svg width="2" height="200" xmlns="http://www.w3.org/2000/svg">
            <line
              id="line1"
              x1="1"
              y1="0"
              x2="1"
              y2="200"
              stroke="white"
              strokeWidth="2"
            />
          </svg>

          <div className="flex flex-col space-y-10">
            <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL || ""}>
              <Icons.Facebook
                className="h-8 w-8 3xl:h-10 2xl:w-10"
                id="icon1"
              />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || ""}>
              <Icons.Instagram
                className="h-8 w-8 3xl:h-10 2xl:w-10"
                id="icon2"
              />
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || ""}>
              <Icons.Twitter className="h-8 w-8 3xl:h-10 2xl:w-10" id="icon3" />
            </Link>
          </div>

          <svg width="2" height="200" xmlns="http://www.w3.org/2000/svg">
            <line
              id="line2"
              x1="1"
              y1="0"
              x2="1"
              y2="200"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div> */}
        <MaxWidthWrapper className="text-white z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
          <BoxReveal
            boxColor={"#5046e6"}
            duration={0.5}
            key={data[currentIndex].subHead} 
          >
            <p className="z-[200] text-lg md:text-xl max-w-96 before:content-[''] before:h-0.5 before:w-12 before:bg-white font-dm ">
              {data[currentIndex].subHead}
            </p>
          </BoxReveal>
          <BoxReveal
            boxColor={"#5046e6"}
            duration={0.5}
            key={data[currentIndex].title} 
          >
            <h1 className="z-[200] text-4xl sm:text-5xl md:text-6xl xl:text-7xl max-w-[34rem] lg:max-w-2xl xl:max-w-[52rem]">
              {data[currentIndex].title}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button
              title="Request a callback"
              textClassName="text-base md:text-lg"
              className="bg-white text-black mt-5 "
              svgClassName="bg-[#F89520] text-base md:test-3xl"
              type="button"
              navigateTo="/contact"
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
    img: "Static Website Images/BannerImage_1",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
  {
    img: "Static Website Images/BannerImage_2",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
  {
    img: "Static Website Images/BannerImage_3",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
];
