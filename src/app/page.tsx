import BannerSlider from "@/components/BannerSlider";
import Button from "@/components/Button";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HomePageForm from "@/forms/HomePageForm";
import Link from "next/link";
import CldImage from "@/components/CloudinaryImageComponent";
import {
  serviceDetails,
  logoImages,
  features,
  imageConfig,
} from "@/constants/Homepage";

const BlogCards = dynamic(() => import("@/components/BlogCard/BlogCards"), {
  loading: () => <p>Loading...</p>,
});
const TestimonialSlider = dynamic(
  () => import("@/components/TestimonialSlider"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URI}`),
  title: "Digital Marketing Agency for Online Growth | Adaired Digital",
  description:
    "Adaired Digital Media is your all-in-one digital marketing agency. Transform your business into a brand with - SEO, CPC, social media, web design services, etc.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <BannerSlider />
      <ManageGrid />
      <AboutSection />
      <LogoSlider />
      <Services />
      <Growth />
      <Awards />
      <TestimonialSlider />
      <BlogCards />
      <ContactUs />
    </>
  );
}

const ManageGrid = () => {
  return (
    <section className="pt-6 flex items-center justify-between transition-all">
      <div className="hidden md:block">
        <Image
          height={300}
          width={150}
          src="https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/Splash_left"
          alt="Splash Left Image"
        />
      </div>
      <MaxWidthWrapper>
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl ">
            {" "}
            Digital Marketing Services For The Most Ambitious Enterprises
          </h2>
          <div className="relative py-6">
            <div className="absolute top-1/2 left-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
            <div className="absolute top-1/2 right-[-100px] transform -translate-y-1/2 bg-[#A7A9AC] h-px w-20"></div>
            <Icons.NimbusMarketing className="text-white h-14 w-14 bg-[#8EC640] p-2 rounded-full" />
          </div>

          <p className="text-base sm:text-xl md:text-2xl max-w-[900px]">
            We work with businesses that want to engage better, dominate SERPs,
            and achieve more than just website traffic.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className=" hidden md:block">
        <Image
          height={300}
          width={150}
          src="https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/Splash_right"
          alt="Splash Left Image"
        />
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <>
      <section className="py-6 md:py-12">
        <MaxWidthWrapper className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-1 mx-auto ">
            <div className="max-w-lg h-full lg:max-w-full relative  overflow-hidden">
              <CldImage
                src="Static Website Images/about_main_anwqk5"
                alt="About Image"
                height={400}
                width={650}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex-1 p-2 text-center md:text-left">
            <h3 className=" sm:text-xl inline font-nunito text-[#515151] relative md:pl-20 text-lg">
              <div className="absolute top-1/2 -left-full md:left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              <div className="md:hidden absolute top-1/2 -right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              About Us
            </h3>

            <h2 className="text-[1.688rem] md:text-4xl">
              A Company Obsessed With ROI
            </h2>
            <p className="py-3 text-base sm:text-lg text-justify hyphens-auto">
              Transform your marketing outcomes and experience exponential ROI
              growth by partnering with Adaired! We offer smart, targeted,
              integrated campaigns that drive traffic, build engagement,
              generate conversions, and foster long-term relationships. Our
              online marketing services will turn your website into a
              lead-generating machine, and our ongoing efforts will bring in
              more clients than you can handle.
            </p>
            <div className="flex gap-5 py-6 flex-col sm:flex-row">
              <div className="flex flex-col items-center border p-4 md:p-0 md:border-none md:items-start ">
                <CldImage
                  src="Static Website Images/homepage_about2"
                  alt="Information Icon"
                  height={60}
                  width={60}
                  className="border rounded-lg p-2 mb-2"
                />
                <h3 className="relative py-2 font-nunito font-semibold text-xl">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0  md:left-0 bg-[#c0c2c5] h-0.5 w-14 rounded-lg"></div>
                  Tailored Approach
                </h3>
                <p className="text-base sm:text-lg text-justify hyphens-auto">
                  Our obsession with ROI means crafting personalized strategies,
                  from meticulous campaign design to continuous optimization for
                  maximum impact and growth.
                </p>
              </div>
              <div className="flex flex-col items-center border p-4 md:p-0 md:border-none md:items-start ">
                <CldImage
                  src="Static Website Images/homepage_about1"
                  alt="Information Icon"
                  height={60}
                  width={60}
                  className="border rounded-lg p-2 mb-2 "
                />
                <h3 className="relative py-2 font-nunito font-semibold text-xl">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 bg-[#c0c2c5] h-0.5 w-14 rounded-lg"></div>
                  Tangible Results
                </h3>
                <p className="text-base sm:text-lg text-justify hyphens-auto">
                  Experience transparency in your marketing endeavors with
                  Adaired. As your brand gains momentum, the ROI translates into
                  measurable success for your business.
                </p>
              </div>
            </div>
            <p className="font-baby text-lg sm:text-2xl font-semibold py-2">
              &quot;Your brand is what people say about you when you&apos;re not
              in the room.&quot; -<i className="text-[#92288D]">Jeff Bezos</i>
            </p>
            <Button
              title="View More"
              className="bg-white text-black mt-5"
              svgClassName="bg-[#F89520]"
              type="button"
              navigateTo="/about"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const LogoSlider = () => {
  return (
    <>
      <section className="bg-[#f8f8f8] py-6 sm:py-12">
        <MaxWidthWrapper className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl py-2">Trusted By:</h2>
          <p className="max-w-[1000px] py-2 mb-4 text-base sm:text-lg">
            The success of our clients is what determines our success. Below are
            a few of our favorite clients who we have worked for; we have
            reserved a spot for you!
          </p>
          <div className="antialiased w-full py-2">
            <InfiniteMovingCards
              items={logoImages}
              direction="left"
              speed="slow"
              itemClassName="border border-[#E5E5E5] bg-white grayscale hover:grayscale-0 px-2 py-2 sm:py-5 sm:px-8"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <section className="py-6 lg:py-12">
        <MaxWidthWrapper>
          <div className="text-center flex flex-col items-center justify-center">
            <h3 className="inline font-nunito text-[#515151] relative px-4 text-lg">
              <div className="absolute top-1/2 left-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              <div className="absolute top-1/2 right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
              Our Services
            </h3>
            <h2 className="text-[1.688rem] md:text-4xl py-2">What We Offer</h2>
            <p className="py-2 max-w-[900px] text-base sm:text-lg">
              Whatever service we provide, we give a thought about every small
              detail. Our main motive is brand growth and this is what leaves a
              mark on every customer.
            </p>
          </div>

          <HoverEffect items={serviceDetails} />
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const Growth = () => {
  return (
    <section className="py-7 sm:py-14">
      <MaxWidthWrapper className="flex flex-col lg:flex-row items-center lg:items-start gap-16 xl:gap-36">
        <div className="flex-1 relative ml-2 mr-4 lg:mr-0 lg:ml-2">
          {imageConfig.map((img, index) => (
            <div key={index} className={img.className || ""}>
              <CldImage
                src={img.src}
                alt={img.alt}
                height={img.height}
                width={img.width}
              />
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="inline font-nunito text-[#515151] relative pl-16 text-lg md:pl-20">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-12 md:w-16" />
            Holistic Expertise
          </h3>
          <h2 className="text-[1.688rem] md:text-4xl py-2">
            Digital Marketing Experts Dedicated To Your Growth
          </h2>
          <p className="py-2 text-base sm:text-lg">
            Adaired has helped numerous companies develop their brands with its
            digital marketing services worldwide. We understand the importance
            of leads, sales, and return on investment when it comes to digital
            marketing. Our clients come from all industries of every size.
          </p>
          <ul className="text-left grid gap-3 sm:gap-0 sm:grid-cols-2 py-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-1 border p-2 sm:border-none"
              >
                <Icons.PinkArrowMarker className="text-[#BC1D8D]" />
                {feature}
              </li>
            ))}
          </ul>
          <p className="py-2 text-base sm:text-lg">
            Our <a className="text-blue-500" href="/services/digital-marketing-company-india">digital marketing company in India</a> provides a wide range of services, from
            initial brand development to a globally syndicated advertising
            campaign, all of which are customized to meet the unique needs of
            our clients.
          </p>
          <p className="py-2 px-2 bg-[#FFF9FD] border-l-8 border-[#BC1D8D] text-base sm:text-lg">
            We strive to surpass your expectations, providing unparalleled
            quality in our online marketing services.
          </p>
          <Button
            title="View More"
            className="bg-white text-black mt-5"
            svgClassName="bg-[#F89520]"
            type="button"
            navigateTo="/about"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const Awards = () => {
  type AwardImages = {
    img: string;
  };
  const data: AwardImages[] = [
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge8",
    },
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge7",
    },
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge6",
    },
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge5",
    },
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge4",
    },
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge3",
    },
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge2",
    },
    {
      img: "https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/badge1",
    },
  ];
  return (
    <>
      <section className="py-6 sm:py-12">
        <MaxWidthWrapper>
          <div className="antialiased w-full py-2">
            <InfiniteMovingCards
              items={data}
              direction="right"
              speed="slow"
              itemClassName=" w-20 sm:w-32 h-auto md:w-40 px-2 py-2 sm:py-5 sm:px-8"
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <section className="pt-6 sm:pt-12">
        <div className="bg-[#f8f8f8] pt-4 lg:pt-0 lg:bg-white">
          <MaxWidthWrapper>
            <h2 className="py-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:max-w-xl">
              Ready To Win More Customers?{" "}
            </h2>
          </MaxWidthWrapper>
        </div>
        <div className="bg-[#f8f8f8] md:pb-4 pb-8">
          <MaxWidthWrapper className="flex pb-6 lg:py-6 flex-col gap-10 lg:flex-row">
            <div className="flex-1 space-y-5">
              <p className="py-2 text-lg sm:text-xl md:text-2xl text-[#515151]">
                Connect for more website traffic, qualified leads, and an
                established online brand image.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 items-center space-y-6">
                <Link
                  href="mailto:info@adaired.com"
                  className="flex flex-row sm:flex-col lg:flex-row gap-4 items-center  "
                >
                  <Image
                    src={"/assets/images/gmail.svg"}
                    height={40}
                    width={40}
                    alt="Gmail Logo"
                  />

                  <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                    info@adaired.com
                  </p>
                </Link>

                <Link
                  href="skype:live:.cid.46cf67c456a5bb0c?chat"
                  className="flex flex-row sm:flex-col lg:flex-row gap-4 items-center  "
                >
                  <Image
                    src={"/assets/images/skype.svg"}
                    height={40}
                    width={40}
                    alt="Skype Logo"
                  />

                  <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                    Adaired Digital
                  </p>
                </Link>

                <Link
                  href="https://api.whatsapp.com/send?phone=918907400008"
                  className="flex flex-row sm:flex-col lg:flex-row gap-4 items-center  "
                >
                  <Image
                    src={"/assets/images/whatsapp.svg"}
                    height={40}
                    width={40}
                    alt="Whatsapp Logo"
                  />

                  <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                    +91 890-740-0008
                  </p>
                </Link>

                <Link
                  href="https://telegram.me/adaired"
                  className="flex flex-row sm:flex-col lg:flex-row gap-4 items-center "
                >
                  <Image
                    src={"/assets/images/telegram.svg"}
                    height={40}
                    width={40}
                    alt="Telegram Logo"
                  />

                  <p className="font-semibold text-lg text-left sm:text-center lg:text-left  lg:text-2xl">
                    Adaired Digital Media
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex-1 lg:relative">
              <div className=" rounded-lg border-4 border-[#f8f8f8] lg:-mt-44 w-full ">
                <HomePageForm />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
    </>
  );
};
