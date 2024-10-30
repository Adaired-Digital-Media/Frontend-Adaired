"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { Icon } from "@iconify/react";
import { Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import TwoColumnGrid from "@/@core/components/twoColumnGrid";
import SmallContainer from "@/@core/components/smallContainer";
import IconList from "@/@core/components/iconList";
import IconBox from "@/@core/components/iconBox";
import LandingPageForm from "@/forms/LandingPageForm";

// Constants
import {
  HeroSectionDetails,
  StandOutSectionDetails,
  ApproachSectionDetails,
  SurferSEOSectionDetails,
  ProductSectionDetails,
  BHWServices,
} from "@/constants/LandingPage";

const Landing = () => {
  return (
    <>
      <HeroSection />
      <StandOutSection />
      <ProductsSection />
      <ApproachSection />
      <SurferSEOSection />
      <ContactUsSection />
    </>
  );
};

export default Landing;

 const HeroSection = () => {
  return (
    <section
      className={cn(
        `bg-[#FFF9F1] flex items-center justify-center overflow-hidden`
      )}
    >
      <SmallContainer
        className="relative z-[2]  
        after:content-[''] after:z-0 after:absolute after:h-full after:w-[calc(100%-20px)] after:bg-[#F39019] after:top-0 after:left-[calc(100%-300px)] after:rounded-tl-[250px] 
        before:content-[''] before:absolute before:z-0 before:h-full before:w-full before:bg-[#FFDCB2] before:top-0 before:left-[calc(100%-320px)] before:rounded-tl-[250px]
        3xl:pb-0 3xl:pt-14
        "
      >
        <TwoColumnGrid
          className={cn(`relative z-[2] m-0 place-items-start space-x-0`)}
        >
          <div className={cn(`xl:py-28`)}>
            <h1
              className={cn(
                `font-poppins text-black lg:text-[38px] xl:text-[42px] font-bold lg:leading-[52px] xl:leading-[58px]`
              )}
            >
              {HeroSectionDetails.title}
            </h1>
            <p className={cn(`pt-[15px]`)}>{HeroSectionDetails.description}</p>
            <div className={cn(`flex items-center space-x-10 pt-10`)}>
              <Link href={HeroSectionDetails.buttonLink || ""}>
                <Button
                  className={cn(
                    `bg-[#424242] font-poppins text-lg font-medium text-white rounded-full px-6 py-6`
                  )}
                >
                  {HeroSectionDetails.buttonText}
                </Button>
              </Link>
              <Link
                href={`tel:${HeroSectionDetails.phoneNumber}`}
                className={cn(`flex items-center justify-start space-x-2 `)}
              >
                <div
                  className={cn(
                    `bg-[#F39019] h-[46px] w-[46px] p-3 rounded-full flex items-center justify-center`
                  )}
                >
                  <Icon
                    icon="mage:phone-call-fill"
                    color="#fff"
                    className={cn(`h-6 w-6 `)}
                  />
                </div>
                <p className={cn(`font-poppins font-light text-base`)}>
                  Call Us <br />
                  <span
                    className={cn(`font-poppins font-semibold text-[#000000] `)}
                  >
                    {HeroSectionDetails.phoneNumber}
                  </span>
                </p>
              </Link>
            </div>
          </div>
          <div className={cn(`3xl:-mr-20 4xl:-mr-32 `)}>
            <Image
              src={HeroSectionDetails.imageUrl || ""}
              alt="Hero Image"
              width={700}
              height={600}
              quality={100}
              priority
            />
          </div>
        </TwoColumnGrid>
      </SmallContainer>
    </section>
  );
};

 const StandOutSection = () => {
  return (
    <SmallContainer>
      <TwoColumnGrid>
        <div className={cn(`bg-[#EDEDED] h-full w-full rounded-2xl `)} />
        <div className={cn(`space-y-[15px]`)}>
          <IconList
            icon={StandOutSectionDetails.subHeadingIconUrl}
            title={StandOutSectionDetails.subHeadingText}
            isSvg={StandOutSectionDetails.isSvg}
            containerClassName={`bg-[#F3F3F3] rounded-[8px] pr-4 relative`}
            iconContainerClassName={`bg-[#F39019] h-[40px] w-[40px] rounded-full flex items-center justify-center ring-4 ring-offset-0 ring-white absolute`}
            iconClassName={`h-[18px] w-[18px] text-white`}
            titleClassName={`text-[#424242] font-poppins text-base font-regular pl-[35px] py-1`}
          />
          <h2 className={cn(`bhw_h2`)}>{StandOutSectionDetails.title}</h2>
          <div className={cn(`text-[#424242] space-y-[10px]`)}>
            {parse(StandOutSectionDetails.description)}
          </div>

          {StandOutSectionDetails?.listItems?.map((text: string) => (
            <IconList
              key={text.slice(0, 1)}
              icon={`/assets/icons/boxTick.svg`}
              title={text}
              isSvg={true}
              containerClassName={`p-0`}
              titleClassName={`font-nunito font-semibold text-base xl:text-lg`}
            />
          ))}
        </div>
      </TwoColumnGrid>
    </SmallContainer>
  );
};

 const ProductsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const tabs = BHWServices.map((service) => ({
    title: service.name,
    value: service.slug,
    content: (
      <div className={cn(`grid grid-cols-4 gap-x-[62px] gap-y-[41px]`)}>
        {service?.products?.map((product) => (
          // <IconBox
          //   key={product.title.slice(0, 1)}
          //   icon={product.imgUrl}
          //   isSvg={true}
          //   title={product.title}
          //   buttonText={product.buttonText}
          //   buttonLink={product.buttonLink}
          //   buttonClassName={`bg-[#424242] rounded-full mt-[55px] hidden group-hover:block mx-auto`}
          //   containerClassName={`text-center p-[30px] rounded-[20px] bg-white max-h-[286px] min-h-[286px] min-w-[286px] flex flex-col items-center justify-center hover:shadow-4xl transition-all duration-300 group`}
          //   titleClassName={`font-poppins text-[20px] font-medium text-black `}
          //   iconContainerClassName={`pb-[15px]`}
          // />
          <motion.div
            key="unique-key" // You can adjust this for dynamic content
            className="relative w-64 h-72 bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer group"
            // onHoverStart={() => setIsHovered(true)}
            // onHoverEnd={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}
          >
            {/* Image and Title */}
            <motion.div
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
              variants={{
                rest: { y: 0 },
                hover: { y: -50 },
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-4"
            >
              <h3 className="text-xl font-semibold">Dummy</h3>
            </motion.div>

            {/* Button */}
            <motion.div
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
              variants={{
                rest: { y: 100, opacity: 0 },
                hover: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button className="px-6 py-2 bg-yellow-500 text-white rounded-full">
                Order Now
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    ),
  }));
  return (
    <section className={cn(`bg-[#F6FBFF] `)}>
      <SmallContainer>
        <div className={cn(`text-center space-y-[15px] pb-[40px]`)}>
          <IconList
            icon={ProductSectionDetails.subHeadingIconUrl}
            title={ProductSectionDetails.subHeadingText}
            isSvg={ProductSectionDetails.isSvg}
            containerClassName={`bg-[#FFF] rounded-[8px] pr-4 relative`}
            iconContainerClassName={`bg-[#F39019] h-[40px] w-[40px] rounded-full flex items-center justify-center ring-4 ring-offset-0 ring-white absolute`}
            iconClassName={`h-[22px] w-[22px] text-white`}
            titleClassName={`text-[#424242] font-poppins text-base font-regular pl-[35px] py-1`}
          />
          <div className={cn(`font-poppins max-w-[661px] m-auto`)}>
            {parse(ProductSectionDetails.title)}
          </div>
        </div>
        <Tabs
          tabs={tabs}
          containerClassName={cn(`bg-white rounded-full`)}
          tabClassName={cn(`flex-1`)}
          tabContentClassName={cn(`font-poppins text-[17px] font-medium`)}
          activeTabClassName={cn(`bg-[#1C5B98]  `)}
          activeTabContentClassName={cn(`text-white`)}
        />
      </SmallContainer>
    </section>
  );
};

 const ApproachSection = () => {
  return (
    <SmallContainer>
      <>
        <h2 className={cn(`bhw_h2`)}>{ApproachSectionDetails.title}</h2>
        <p className={cn(`text-[#424242] pt-[10px]`)}>
          {ApproachSectionDetails.description}
        </p>
      </>

      <div className={cn(`grid grid-cols-2 gap-x-10 gap-y-[30px] pt-[30px]`)}>
        {ApproachSectionDetails.iconList.map((iconBox, idx) => {
          return (
            <IconBox
              key={idx}
              icon={iconBox.icon}
              isSvg={true}
              title={iconBox.title}
              description={iconBox.description}
              containerClassName={`shadow-3xl p-[25px] flex gap-[15px] items-start justify-between rounded-[15px]`}
              titleClassName={`font-poppins text-[#121212] text-xl font-semibold leading-7 tracking-tight`}
              descriptionClassName={`leading-[27px] text-[#424242] `}
              iconContainerClassName={`flex-none h-[50px] w-[50px]`}
              iconClassName={`h-[50px] w-[50px]`}
            />
          );
        })}
      </div>
    </SmallContainer>
  );
};

 const SurferSEOSection = () => {
  return (
    <section className={cn("bg-[#FFFBF5] overflow-hidden")}>
      <SmallContainer>
        <h2
          className={cn(
            "flex items-center justify-center gap-2 leading-[48px] font-poppins capitalize font-semibold text-3xl"
          )}
        >
          <Image
            src={SurferSEOSectionDetails.icon}
            alt="Surfer SEO Icon"
            height={32}
            width={32}
            className={cn("flex-none")}
          />
          {parse(SurferSEOSectionDetails.title)}
        </h2>

        <TwoColumnGrid
          className={cn(`
            grid-cols-7 pt-12 gap-x-12 relative 
            before:absolute before:top-10 before:left-[calc(100%-330px)] before:w-1/2 before:h-full
            before:bg-gradient-to-r from-[#fef0df] from-0% to-[#fffbf5] to-100%
            before:rounded-tl-[21px] before:rounded-bl-[15px]
          `)}
        >
          <div className="col-span-4 space-y-8">
            {SurferSEOSectionDetails.iconList.map((iconBox, idx) => (
              <IconBox
                key={idx}
                icon={iconBox.icon}
                isSvg={false}
                title={iconBox.title}
                description={iconBox.description}
                containerClassName="flex gap-2.5 items-start"
                titleClassName="font-poppins leading-7 tracking-tight text-xl font-semibold"
                descriptionClassName="leading-[27px] text-[#424242] pt-2"
                iconClassName="h-[22px] w-[22px] rotate-[270deg] mt-1"
              />
            ))}
          </div>

          <div className="col-span-3 h-full w-full flex items-end">
            <div className="relative">
              {SurferSEOSectionDetails.images.map((surferImage, idx) => (
                <div
                  key={idx}
                  className={cn(
                    `${idx === 0 ? "" : "absolute -top-14 -right-24"}`
                  )}
                >
                  <Image
                    src={surferImage.src}
                    alt={surferImage.alt}
                    width={idx === 0 ? 473 : 222}
                    height={idx === 0 ? 271 : 243}
                    quality={100}
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </TwoColumnGrid>
      </SmallContainer>
    </section>
  );
};

 const ContactUsSection = () => {
  return (
    <SmallContainer>
      <TwoColumnGrid className={cn(`gap-x-20`)}>
        <div className={cn(`bg-[#EDEDED] h-full w-full rounded-2xl `)}>
          {/* TODO:Add Image */}
        </div>

        <div className={cn(`h-full w-full pr-5`)}>
          <div className={cn(`w-full h-full p-10 border rounded-[15px]`)}>
            <div className={cn(`text-center`)}>
              <h2
                className={cn(
                  `font-poppins font-semibold text-[#1c5b98] text-[28px] `
                )}
              >
                Contact Us Today!
              </h2>
              <div
                className={cn(`w-[92px] h-[1px] bg-[#d9d9d9] m-auto my-[10px]`)}
              />
              <p
                className={cn(
                  `max-w-[430px] m-auto text-base text-[#424242] pb-[20px]`
                )}
              >
                Ready to Elevate Your Content? Let’s amplify your brand and
                drive results
              </p>
            </div>

            <LandingPageForm />
          </div>
        </div>
      </TwoColumnGrid>
    </SmallContainer>
  );
};
