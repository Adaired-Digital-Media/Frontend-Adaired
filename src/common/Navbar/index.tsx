"use client";
import Link from "next/link";
import Topbar from "./Topbar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Navbar = () => {
  const [isWindowScrollingUp, setIsWindowScrollingUp] = useState(true);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop < 100);
      setIsScreenScrolled(scrollTop > 100);
      setIsWindowScrollingUp(scrollTop < lastScrollTop);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    let lastScrollTop = 0;
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openSidebar = () => setIsSidebarVisible(true);
  const closeSidebar = () => setIsSidebarVisible(false);

  return (
    <>
      <Topbar
        className={
          isWindowScrollingUp || isAtTop
            ? "scale-y-100 origin-top"
            : "scale-y-0 origin-top"
        }
      />
      <section
        className={cn(
          `sticky top-0 z-[100]`,
          isScreenScrolled && !isAtTop
            ? "bg-white shadow-md"
            : "bg-transparent shadow-none"
        )}
      >
        <div className={`bg-white sticky z-50 top-0 inset-x-0 h-16 lg:h-20`}>
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
                    <div
                      aria-label="menu"
                      className="block lg:hidden header__menu-toggle cursor-pointer text-3xl"
                      onClick={openSidebar}
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                      </svg>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <NavItems />
                    </div>
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
            <MobileNav
              isSidebarVisible={isSidebarVisible}
              closeSidebar={closeSidebar}
            />
          </header>
        </div>
      </section>
    </>
  );
};

export default Navbar;

// "use client";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import Image from "next/image";
// import Link from "next/link";
// import NavItems from "./NavItems";
// import MobileNav from "./MobileNav";
// import Topbar from "./Topbar";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { cn } from "@/lib/utils";

// const Navbar = () => {
//   const [isWindowScrollingUp, setIsWindowScrollingUp] = useState(true);
//   const [isScreenScrolled, setIsScreenScrolled] = useState(false);
//   const [isAtTop, setIsAtTop] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       setIsAtTop(scrollTop < 100);
//       setIsScreenScrolled(scrollTop > 100);
//       setIsWindowScrollingUp(scrollTop < lastScrollTop);
//       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//     };

//     let lastScrollTop = 0;
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       className={cn(
//         `transition-all duration-300 sticky top-0 z-[100]`,
//         isScreenScrolled && !isAtTop
//           ? "bg-white shadow-md scale-y-100 origin-top"
//           : "bg-transparent",
//         isWindowScrollingUp || isAtTop
//           ? "scale-y-100 origin-top"
//           : "scale-y-0 origin-top"
//       )}
//     >
//       <Topbar />
//       <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 lg:h-20">
//         <header className="relative bg-white flex items-center">
//           <MaxWidthWrapper>
//             <div className="relative">
//               <div className="flex h-16 lg:h-20 items-center">
//                 <div>
//                   <Link
//                     href={"/"}
//                     className="flex items-center w-28 md:w-36 sm:w-10/0 lg:w-10/12 xl:w-full"
//                   >
//                     <div className="relative w-[170px] h-[60px] md:h-[72px] lg:h-[80px] xl:h-[89px]">
//                       <Image
//                         src="https://res.cloudinary.com/adaired/image/upload/v1718599616/Static%20Website%20Images/adaired_logo.png"
//                         alt="Brand Logo"
//                         fill
//                         sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 170px"
//                       />
//                     </div>
//                   </Link>
//                 </div>
//                 <div className="ml-auto flex items-center">
//                   <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                     <NavItems />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </MaxWidthWrapper>
//           <MobileNav />
//         </header>
//       </div>
//     </section>
//   );
// };

// export default Navbar;
