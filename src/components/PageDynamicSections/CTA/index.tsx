"use client";
import { cn, hexToHexWithOpacity } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Icons } from "@/components/Icons";

type CTAProps = {
  colorScheme: string;
  title: string;
};

const CTA = ({ colorScheme, title }: CTAProps) => {
  const bg_overlay = hexToHexWithOpacity(colorScheme, 0.72);

  return (
    <section
      className={cn(
        `bg-[url('https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/CTA-image')] bg-no-repeat bg-cover flex justify-center items-center relative min-h-[200px] md:min-h-[307px] min-w-full rounded-[30px]`
      )}
    >
      <div className="cta_overlay absolute w-full h-full rounded-[30px]">
        <style jsx>
          {`
            .cta_overlay {
              background-color: ${bg_overlay};
            }
          `}
        </style>
      </div>
      <div className="z-10 flex items-center justify-center flex-col space-y-7 p-5 text-center">
        <h2
          className={cn(
            `leading-snug font-nunito font-extrabold text-3xl md:text-4xl xl:text-5xl text-white `
          )}
        >
          {title}
        </h2>

        <Link
          href={"tel:+918907200008"}
          className="bg-white flex justify-start items-center gap-3 min-w-[262px] px-4 py-3 rounded-2xl"
        >
          <Icons.CtaPhone />
          <div>
            <span className="block text-sm">For More Information</span>
            <span className="block text-lg lg:text-xl xl:text-[26px] font-bold book_now">
              <style jsx>{`
                .book_now{
                  color: ${colorScheme};
                `}</style>
              Book A Call
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
