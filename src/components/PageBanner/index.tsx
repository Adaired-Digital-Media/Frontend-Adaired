"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
const PageBanner = ({ title }: { title: string }) => {
  return (
    <div className="relative flex h-40 md:h-48 lg:h-64 w-full flex-col justify-center overflow-hidden  bg-gray-50 ">
      <MaxWidthWrapper>
        <h1 className="leading-none text-3xl md:text-[3.375rem]">{title}</h1>
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
