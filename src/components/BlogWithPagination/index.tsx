"use client";
import { FC, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { calculateReadingTime, cn, formatDate } from "@/lib/utils";
import Button from "@/components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import parse from "html-react-parser";
import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface IProps {
  data: any;
}

const BlogWPagination: FC<IProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  // Filter and sort the blogs by date
  const sortedBlogs = useMemo(() => {
    const publishedBlogs = data.filter(
      (blog: any) => blog.status === "publish"
    );
    return publishedBlogs.sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [data]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Scroll to top whenever the currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-0 xl:grid-cols-1">
        {currentBlogs.map((blog: any) => {
          return (
            <>
              <figure className="hidden xl:flex border p-10 rounded-lg first:mt-10 mb-10">
                <div className="w-[45%] shrink-0">
                  <Link href={`/blog/${blog.slug}`}>
                    <Image
                      src={blog.featuredImage}
                      height={400}
                      width={800}
                      alt={blog.title}
                      className="-ml-14 rounded-lg"
                    />
                  </Link>
                </div>
                <div className="w-[55%] shrink-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm lg:text-base text-gray-500 mb-1">
                      {formatDate(blog.createdAt)}
                    </p>
                    <p className="text-sm lg:text-base text-gray-500 mb-1">
                      {calculateReadingTime(blog.postDescription) +
                        " min read "}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-nunito lg:text-2xl font-semibold mb-1">
                      <Link href={`/blog/${blog.slug}`}>{blog.postTitle}</Link>
                    </h2>
                    <span className="line-clamp-2 font-nunito">
                      {parse(blog.postDescription)}
                    </span>
                  </div>
                  <div>
                    <Button
                      title="Read Blog"
                      className="mt-4 bg-white text-black border-none"
                      svgClassName="bg-[#F89520] "
                      type="button"
                      navigateTo={`/blog/${blog.slug}`}
                    />
                  </div>
                </div>
              </figure>

              <Card className="xl:hidden">
                <CardHeader className="p-4">
                  <div className="mb-4">
                    <Link href={`/blog/${blog.slug}`}>
                      <Image
                        src={blog.featuredImage}
                        alt="Blog Image"
                        height={400}
                        width={800}
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <CardTitle className="line-clamp-2 font-nunito text-2xl">
                    <Link href={`/blog/${blog.slug}`}>{blog.postTitle}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-nunito text-lg text-left p-4 pt-0">
                  <div className="line-clamp-3">
                    {parse(blog.postDescription)}
                  </div>
                </CardContent>
                <div className="p-4">
                  <Button
                    title="Read More"
                    className="bg-white text-black border-none"
                    svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
                    type="button"
                    navigateTo={`/blog/${blog.slug}`}
                  />
                </div>
                <Separator className="mx-auto w-[90%]" />
                <CardFooter className="justify-between pt-6">
                  <p>{formatDate(blog.createdAt)}</p>
                  <p>
                    {" "}
                    {calculateReadingTime(blog.postDescription) + " min read "}
                  </p>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious
              onClick={() =>
                currentPage > 1 && setCurrentPage((prev) => prev - 1)
              }
            />
          </PaginationItem>
          {pageNumbers.map((number) => (
            <PaginationItem key={number} className="cursor-pointer">
              <PaginationLink
                onClick={() => paginate(number)}
                isActive={currentPage === number}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem className="cursor-pointer">
            <PaginationNext
              onClick={() =>
                currentPage < pageNumbers.length &&
                setCurrentPage((prev) => prev + 1)
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BlogWPagination;
