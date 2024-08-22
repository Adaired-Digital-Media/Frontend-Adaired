"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import Topbar from "./Topbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isWindowScrollingUp, setIsWindowScrollingUp] = useState(true);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScreenScrolled(true);
      } else {
        setIsScreenScrolled(false);
      }
    });
  });

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScreenScrolled(scrollTop > 0);
          setIsWindowScrollingUp(scrollTop < lastScrollTop);
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className={cn(
        `transition-all duration-300 sticky top-0 z-[100]`,
        isScreenScrolled
          ? "bg-white shadow-md scale-y-100 origin-top"
          : "bg-transparent",
        isWindowScrollingUp ? "scale-y-100 origin-top" : "scale-y-0 origin-top"
      )}
    >
      <Topbar />
      <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 lg:h-20">
        <header className="relative bg-white flex items-center">
          <MaxWidthWrapper>
            <div className="relative">
              <div className="flex h-16 lg:h-20 items-center">
                <div>
                  <Link
                    href={"/"}
                    className="flex items-center w-28 md:w-36 sm:w-10/0 lg:w-10/12 xl:w-full"
                  >
                    <div className="relative w-[170px] h-[60px] md:h-[72px] lg:h-[80px] xl:h-[89px]">
                      <Image
                        src="https://res.cloudinary.com/adaired/image/upload/v1718599616/Static%20Website%20Images/adaired_logo.png"
                        alt="Brand Logo"
                        fill
                        sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 170px"
                      />
                    </div>
                  </Link>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <NavItems />
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <MobileNav />
        </header>
      </div>
    </section>
  );
};

export default Navbar;
