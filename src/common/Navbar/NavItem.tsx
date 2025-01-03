"use client";
import { NAV_ITEMS } from "@/config";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AnimatedLink from "./AnimatedLinks";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formatDate, ClientRemoveTags } from "@/lib/utils";
import HyperText from "@/components/magicui/HyperText";
import { Skeleton } from "@/components/ui/skeleton";

type NavItems = (typeof NAV_ITEMS)[number];

interface NavItemProps {
  navitems: NavItems;
  activeIndex: () => void;
}

const NavItem = ({ activeIndex, navitems }: NavItemProps) => {
  const [submenuClicked, setSubmenuClicked] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const handleSubmenuClick = () => {
    setSubmenuClicked(!submenuClicked);
  };

  const OnMouseEnter = () => {
    setSubmenuClicked(false);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/blog/readBlog?limit=1`
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="flex justify-center" onMouseEnter={OnMouseEnter}>
      <div className={cn(`flex items-center group`)}>
        <Link
          className={cn(
            `gap-1 font-semibold flex items-center h-20 px-2 relative hover:after:w-[100%] after:absolute after:content-[''] after:h-[3px] after:w-[0%] after:bg-[#aaa] after:bottom-0 after:left-0 after:transition-all after:duration-300`
          )}
          href={navitems.href}
          onClick={activeIndex}
        >
          <AnimatedLink title={navitems.label} />
          {/* <HyperText text={navitems.label} animateOnLoad={false} /> */}
          {(navitems.subItems || navitems.childrens) && (
            <Icons.IcBaselineArrowDropDown
              className={cn(
                "h-4 w-4 transition-all text-muted-foreground group-hover:rotate-180"
              )}
            />
          )}
        </Link>
        {navitems.subItems ? (
          <div
            className={cn(
              "absolute top-full text-sm text-muted-foreground inset-x-0 bg-white left-0 rounded-bl-lg rounded-br-lg shadow-lg transition-all duration-300 origin-top scale-y-0 pointer-events-none",
              submenuClicked
                ? ""
                : "group-hover:scale-y-100 group-hover:pointer-events-auto"
            )}
          >
            <div className="mx-auto p-3 4xl:p-4 5xl:p-6">
              <div className="flex rounded-bl-lg rounded-br-lg">
                <div className="grid grid-cols-3 gap-2 5xl:gap-6 xl:w-9/12">
                  {navitems.subItems.map((subItem) => (
                    <div
                      className="relative text-base sm:text-sm"
                      key={subItem.name}
                    >
                      <Link
                        href={subItem.href}
                        className="block font-medium text-gray-900 pb-1.5 5xl:pb-2 hover:text-[#FB9100] duration-200 transition-colors"
                        onClick={handleSubmenuClick}
                      >
                        <span className="font-bold"> {subItem.name}</span>
                      </Link>
                      <ul>
                        {subItem.subItems
                          ? subItem.subItems.map((subSubItem) => {
                              return (
                                <li key={subSubItem.name}>
                                  <Link
                                    href={subSubItem.href}
                                    onClick={handleSubmenuClick}
                                    className="flex items-center cursor-pointer group/subMenu "
                                  >
                                    <div className="flex items-center gap-2 py-0.5 4xl:py-1 group-hover/subMenu:text-[#FB9100] transition-all duration-300 ">
                                      <div className="w-[13px] h-[13px] rounded-sm bg-[#ddd]"></div>
                                      <span className="text-base flex">
                                        {subSubItem.name}
                                      </span>
                                    </div>
                                    <Icons.ArrowRightBroken className="text-[#FB9100] -translate-x-2 opacity-0 group-hover/subMenu:opacity-100 group-hover/subMenu:block group-hover/subMenu:translate-x-2 transition-all duration-500" />
                                  </Link>
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex-none w-3/12 hidden xl:flex ">
                  {blogs && blogs.length > 0 ? (
                    blogs.map((blog: any) => (
                      <Link href={`/blog/${blog.slug}`} key={blog.title}>
                        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                            <Image
                              src={`${blog.featuredImage}`}
                              alt="thumbnail"
                              width={800}
                              height={400}
                              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                            />
                          </div>
                          <div className=" p-4">
                            <h2 className="font-bold my-4 text-lg text-zinc-700">
                              {blog.postTitle}
                            </h2>
                            <h2 className="font-normal my-4 text-sm text-zinc-500 line-clamp-4">
                              {ClientRemoveTags(blog.postDescription)}
                            </h2>
                            <div className="flex flex-row justify-between items-center mt-10">
                              <span className="text-sm text-gray-500">
                                {formatDate(blog.createdAt)}
                              </span>
                              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                                <Link href={`/blog/${blog.slug}`}>
                                  Read Blog
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="flex flex-col space-y-3 relative">
                      <Skeleton className="h-[200px] w-[330px] rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[330px]" />
                        <Skeleton className="h-4 w-[330px]" />
                        <Skeleton className="h-4 w-[330px]" />
                        <Skeleton className="h-4 w-[330px]" />
                        <Skeleton className="h-4 w-[330px]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : navitems.childrens ? (
          <div className="min-w-40 absolute top-full text-sm text-muted-foreground bg-white rounded-bl-lg rounded-br-lg shadow-lg transition-all duration-300 origin-top scale-y-0 pointer-events-none group-hover:scale-y-100 group-hover:pointer-events-auto ">
            <div className="mx-auto px-4 py-4">
              {navitems.childrens.map((children) => (
                <div
                  key={children.name}
                  className="text-base sm:text-sm group/children"
                >
                  <Link
                    href={children.href}
                    className="block font-medium text-gray-900 py-2"
                    onClick={handleSubmenuClick}
                  >
                    <span
                      className={cn(
                        `flex items-center group-hover/children:text-[#FB9100]`
                      )}
                    >
                      {children.name}
                      <Icons.ArrowRightBroken className="-translate-x-2 text-[#FB9100] opacity-0 transition-all duration-500 group-hover/subMenu:block group-hover/children:translate-x-2 group-hover/children:opacity-100" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavItem;
