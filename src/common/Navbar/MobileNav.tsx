"use client";
import Link from "next/link";
import { NAV_ITEMS } from "@/config";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileNavProps {
  isSidebarVisible: boolean;
  closeSidebar: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isSidebarVisible,
  closeSidebar,
}) => {
  const [submenu, setSubmenu] = useState<Array<any> | null>(null);
  console.log(submenu);
  const [submenuActive, setSubmenuActive] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => !submenuActive && setSubmenu(null), 600);
  }, [submenuActive]);

  return (
    <div
      className={cn(
        `fixed z-[100] transition-all duration-500 ease-custom-ui transform uppercase inset-0 ${
          isSidebarVisible
            ? "pointer-events-auto visible bg-[#22222288]"
            : "pointer-events-none invisible"
        }`
      )}
      onClick={closeSidebar}
    >
      <nav
        className={cn(
          `fixed right-0 w-full xs:w-[calc(100%-6rem)] max-w-[32rem] h-full bg-white  transition-transform duration-300 ease-custom-ui transform overflow-hidden overflow-y-scroll 
            ${isSidebarVisible ? "translate-x-0" : "translate-x-full"}
           
            `
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={sidebarRef}
          className={cn(
            `w-full pt-[2rem] pb-[3.5rem] px-[1.5rem] text-sm absolute transition-transform duration-500 ease-custom-ui transform top-0   ${
              submenuActive ? "translate-x-full" : ""
            }`
          )}
        >
          <div className="pb-3 flex items-center justify-end">
            <button
              aria-label="close menu"
              className={cn(
                `flex items-center justify-center text-xl text-gray-500 bg-white  w-[2.5rem] h-[2.5rem]`
              )}
              onClick={closeSidebar}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="sidebar__close-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-8">
            <div className="relative">
              <input
                className="pl-3 w-full h-12 shadow-inner border border-black/10 select-none transition-colors duration-300 ease-in-out cursor-text hover:bg-gray-100 focus-visible:bg-gray-100"
                type="text"
                placeholder="Search"
              />
              <Icons.searchIcon className="mb-0.5 absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <div>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => {
                      if (item.subItems || item.childrens) {
                        setSubmenuActive(!submenuActive);
                        setSubmenu(
                          item.subItems ? item.subItems : item.childrens
                        );
                      } else {
                        closeSidebar();
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        `text-sm font-semibold flex ${
                          item.childrens || item.subItems
                            ? "items-center justify-between"
                            : ""
                        }`
                      )}
                    >
                      {item.label}
                      {item.subItems || item.childrens ? (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                      ) : (
                        <></>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                <li>
                  <Link href={""} className="text-sm flex gap-x-4 font-medium">
                    <Icons.loginIcon />
                    Login / Register
                  </Link>
                </li>
                <li>
                  <Link href={""} className="text-sm flex gap-x-4 font-medium">
                    <Icons.cartIcon />
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          ref={sidebarRef}
          className={cn(
            `w-full h-full pt-[2rem] pb-[3.5rem] px-[1.5rem] text-sm absolute transition-transform duration-500 ease-custom-ui transform top-0 bg-white left-0 space-y-8 ${
              submenuActive ? "translate-x-0" : "translate-x-full"
            }`
          )}
        >
          <button
            onClick={() => {
              setSubmenuActive(false);
            }}
            className="flex gap-2"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
            Back
          </button>

          <Accordion
            type="single"
            collapsible
            className="w-full uppercase font-normal border-none space-y-4"
          >
            {submenu &&
              submenu
                .filter((item) => item.subItems)
                .map((item) => (
                  <AccordionItem
                    key={item.name}
                    value={item.name}
                    className="border-none data-[state=open]:border-b-0  "
                  >
                    <AccordionTrigger className="p-0 hover:no-underline hover:text-[#FB9100]">
                      <Link
                        href={item.href}
                        className="text-sm uppercase font-normal "
                      >
                        {item.name}
                      </Link>
                    </AccordionTrigger>

                    {item.subItems && (
                      <AccordionContent className="pt-2 pb-2">
                        <ul className="space-y-2 pl-4">
                          {item.subItems.map((subItem: any) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className="text-sm font-medium hover:text-[#FB9100]"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
          </Accordion>

          <ul className="space-y-4">
            {submenu &&
              submenu
                .filter((item) => !item.subItems)
                .map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm font-medium">
                      {item.name}
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;

// "use client";
// import { NAV_ITEMS } from "@/config";
// import React, { useState } from "react";
// import { motion, AnimatePresence, MotionConfig, stagger } from "framer-motion";
// import Link from "next/link";
// import { Separator } from "@/components/ui/separator";
// import { Icons } from "@/components/Icons";
// import { cn } from "@/lib/utils";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// // Define the type for a single menu item
// type MenuItem = {
//   value: string;
//   label: string;
//   href: string;
//   subItems?: { name: string; href: string }[];
//   childrens?: { name: string; href: string }[];
// };

// const MobileNav = () => {
//   const [mobileNav, setMobileNav] = useState(false);
//   const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);
//   const [activeSubMenu, setActiveSubMenu] = useState<MenuItem | null>(null);

//   const toggleMobileNav = () => {
//     setMobileNav(!mobileNav);
//     setActiveMenuItem(null);
//     setActiveSubMenu(null);

//     const body = document.querySelector("#root");
//     if (body !== null) {
//       body.classList.toggle("overflow-hidden");
//     }

//     document.documentElement.classList.toggle("overflow-hidden");
//   };

//   const handleMenuItemClick = (item: MenuItem) => {
//     if (activeMenuItem === item) {
//       setActiveMenuItem(null);
//       setActiveSubMenu(null);
//     } else {
//       setActiveMenuItem(item);
//       setActiveSubMenu(item);
//     }
//   };

//   return (
//     <>
//       <div className="lg:hidden">
//         {" "}
//         <motion.button
//           initial="hide"
//           animate={mobileNav ? "show" : "hide"}
//           onClick={toggleMobileNav}
//           className={cn(
//             "flex flex-col space-y-1.5 relative z-10 p-2 border rounded-lg mr-3 sm:mr-5",
//             {
//               "bg-white": !mobileNav,
//               "bg-[#1B5A96]": mobileNav,
//             }
//           )}
//           aria-label="Toggle Mobile Nav"
//         >
//           <motion.span
//             variants={{
//               hide: {
//                 rotate: 0,
//               },
//               show: {
//                 rotate: 45,
//                 y: 8,
//               },
//             }}
//             className={cn("w-6 bg-[#1B5A96] h-0.5 block rounded-full", {
//               "bg-white": mobileNav,
//             })}
//           ></motion.span>
//           <motion.span
//             variants={{
//               hide: {
//                 opacity: 1,
//               },
//               show: {
//                 opacity: 0,
//               },
//             }}
//             className={cn("w-6 bg-[#1B5A96] h-0.5 block rounded-full", {
//               "bg-white": mobileNav,
//             })}
//           ></motion.span>
//           <motion.span
//             variants={{
//               hide: {
//                 rotate: 0,
//               },
//               show: {
//                 rotate: -45,
//                 y: -8,
//               },
//             }}
//             className={cn("w-6 bg-[#1B5A96] h-0.5 block rounded-full", {
//               "bg-white": mobileNav,
//             })}
//           ></motion.span>
//         </motion.button>
//       </div>
//       <AnimatePresence>
//         {mobileNav && (
//           // <MotionConfig
//           //   transition={{
//           //     type: "spring",
//           //     bounce: 0.1,
//           //   }}
//           // >
//           //   <motion.div
//           //     key="mobile-nav"
//           //     variants={{
//           //       hide: {
//           //         y: "-100%",
//           //         transition: {
//           //           type: "spring",
//           //           bounce: 0.1,
//           //           when: "afterChildren",
//           //           staggerChildren: 0.25,
//           //         },
//           //       },
//           //       show: {
//           //         y: "0%",
//           //         transition: {
//           //           type: "spring",
//           //           bounce: 0.1,
//           //           when: "beforeChildren",
//           //           staggerChildren: 0.25,
//           //         },
//           //       },
//           //     }}
//           //     initial="hide"
//           //     animate="show"
//           //     exit="hide"
//           //     className="fixed inset-0 bg-white text-black p-6 flex flex-col  space-y-10 lg:hidden z-[110]"
//           //   >
//           //     <motion.ul
//           //       variants={{
//           //         hide: {
//           //           y: "25%",
//           //           opacity: 0,
//           //         },
//           //         show: {
//           //           y: "0%",
//           //           opacity: 1,
//           //         },
//           //       }}
//           //       className="mt-32 list-none space-y-2"
//           //     >
//           //       {NAV_ITEMS.map((item, index) => {
//           //         return (
//           //           <>
//           //             <motion.li
//           //               variants={{
//           //                 hide: {
//           //                   y: "25%",
//           //                   opacity: 0,
//           //                 },
//           //                 show: {
//           //                   y: "0%",
//           //                   opacity: 1,
//           //                 },
//           //               }}
//           //               key={item.value}
//           //               className="flex items-center justify-between"
//           //             >
//           //               <Link
//           //                 href={item.href}
//           //                 className="text-xl font-semibold"
//           //               >
//           //                 {item.label}
//           //               </Link>
//           //               {(item.subItems || item.childrens) && (
//           //                 <Icons.IcBaselineArrowDropDown
//           //                   className={cn(
//           //                     "h-4 w-4 transition-all text-muted-foreground group-hover:rotate-180"
//           //                   )}
//           //                 />
//           //               )}
//           //             </motion.li>
//           //             <Separator />
//           //           </>
//           //         );
//           //       })}
//           //     </motion.ul>
//           //     <motion.div
//           //       variants={{
//           //         hide: {
//           //           y: "25%",
//           //           opacity: 0,
//           //         },
//           //         show: {
//           //           y: "0%",
//           //           opacity: 1,
//           //         },
//           //       }}
//           //       className="w-full h-px bg-white/30"
//           //     ></motion.div>
//           //     <motion.ul
//           //       variants={{
//           //         hide: {
//           //           y: "25%",
//           //           opacity: 0,
//           //         },
//           //         show: {
//           //           y: "0%",
//           //           opacity: 1,
//           //         },
//           //       }}
//           //       className="list-none flex justify-center gap-x-4"
//           //     >
//           //       <li>
//           //         <div className="bg-black rounded-lg w-8 h-8"></div>
//           //       </li>
//           //       <li>
//           //         <div className="bg-black rounded-lg w-8 h-8"></div>
//           //       </li>
//           //       <li>
//           //         <div className="bg-black rounded-lg w-8 h-8"></div>
//           //       </li>
//           //     </motion.ul>
//           //   </motion.div>
//           // </MotionConfig>

//           <MotionConfig
//             transition={{
//               type: "spring",
//               bounce: 0.1,
//             }}
//           >
//             <motion.div
//               key="mobile-nav"
//               variants={{
//                 hide: {
//                   x: "100%",
//                   transition: {
//                     type: "spring",
//                     bounce: 0.1,
//                     when: "afterChildren",
//                     duration: 0.3,
//                     // staggerChildren: 0.10,
//                   },
//                 },
//                 show: {
//                   x: "0%",
//                   transition: {
//                     type: "spring",
//                     bounce: 0,
//                     when: "beforeChildren",
//                     duration: 0.3,
//                     // staggerChildren: 0.10,
//                   },
//                 },
//               }}
//               initial="hide"
//               animate="show"
//               exit="hide"
//               className="absolute top-full bg-white w-full lg:hidden"
//             >
//               <motion.ul
//                 variants={{
//                   hide: {
//                     x: "-100%",
//                     opacity: 0,
//                   },
//                   show: {
//                     x: "0%",
//                     opacity: 1,
//                     transition: {
//                       type: "spring",
//                       bounce: 0.1,
//                       when: "beforeChildren",
//                       staggerChildren: 0.1,
//                     },
//                   },
//                 }}
//                 className="list-none space-y-2"
//               >
//                 <Separator className="h-0.5" />
//                 {NAV_ITEMS.map((item) => {
//                   return (
//                     <>
//                       <MaxWidthWrapper>
//                         <motion.li
//                           variants={{
//                             hide: {
//                               y: "-25%",
//                               opacity: 0,
//                             },
//                             show: {
//                               y: "0%",
//                               opacity: 1,
//                             },
//                           }}
//                           key={item.value}
//                           className="flex items-center justify-between"
//                           onClick={() => {
//                             handleMenuItemClick(item);
//                             !item.subItems &&
//                               !item.childrens &&
//                               toggleMobileNav();
//                           }}
//                         >
//                           <Link
//                             href={item.href}
//                             className="text-xl font-semibold"
//                           >
//                             {item.label}
//                           </Link>
//                           {(item.subItems || item.childrens) && (
//                             <Icons.IcBaselineArrowDropDown
//                               className={cn(
//                                 "h-4 w-4 transition-all text-muted-foreground group-hover:rotate-180",
//                                 {
//                                   "rotate-180": activeSubMenu === item,
//                                 }
//                               )}
//                             />
//                           )}
//                         </motion.li>
//                       </MaxWidthWrapper>
//                       {activeSubMenu === item && (
//                         <ul>
//                           {item.subItems &&
//                             item.subItems.map((subItem) => (
//                               <Link
//                                 href={subItem.href}
//                                 onClick={() => toggleMobileNav()}
//                                 key={subItem.name}
//                               >
//                                 <li>
//                                   <MaxWidthWrapper className="flex items-center gap-2 py-1">
//                                     <div className="w-3 h-3 rounded-full bg-[#ddd]"></div>
//                                     <span className="text-base">
//                                       {subItem.name}
//                                     </span>
//                                   </MaxWidthWrapper>
//                                 </li>
//                               </Link>
//                             ))}
//                           {item.childrens &&
//                             item.childrens.map((subItem) => (
//                               <Link
//                                 key={subItem.name}
//                                 href={subItem.href}
//                                 onClick={() => toggleMobileNav()}
//                               >
//                                 <MaxWidthWrapper>
//                                   <li className="flex items-center gap-2 py-1">
//                                     <div className="w-3 h-3 rounded-full bg-[#ddd]"></div>
//                                     <span className="text-base">
//                                       {subItem.name}
//                                     </span>
//                                   </li>
//                                 </MaxWidthWrapper>
//                               </Link>
//                             ))}
//                         </ul>
//                       )}

//                       <Separator className="h-0.5" />
//                     </>
//                   );
//                 })}
//               </motion.ul>
//             </motion.div>
//           </MotionConfig>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default MobileNav;
