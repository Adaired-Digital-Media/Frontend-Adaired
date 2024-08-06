"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { ClientRemoveTags, cn, formatDate } from "@/lib/utils";
import Button from "@/components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface IProps {
  data: any;
}

const BlogWPagination: FC<IProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-0 xl:grid-cols-1">
        {currentBlogs.map((blog: any) => {
          return (
            <>
              <figure className="hidden xl:flex border p-10 rounded-lg  first:mt-10 mb-10">
                <div className="w-[45%] shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog/${blog.image}`}
                    height={400}
                    width={800}
                    alt={blog.title}
                    className="-ml-14 rounded-lg"
                  />
                </div>
                <div className="w-[55%] shrink-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm lg:text-base text-gray-500 mb-1">
                      {formatDate(blog.createdAt)}
                    </p>
                    <p className="text-sm lg:text-base text-gray-500 mb-1">
                      {Math.floor(Math.random() * 5) + 1 + " min read "}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-nunito lg:text-2xl font-semibold mb-1">
                      {blog.title}
                    </h2>
                    <div className="line-clamp-2 font-nunito">
                      {ClientRemoveTags(blog.description)}
                    </div>
                  </div>
                  <div>
                    <Button
                      title="Read Blog"
                      className="mt-4 bg-white text-black  border-none"
                      svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
                      type="button"
                      navigateTo={`/blog/${blog.slug}`}
                    />
                  </div>
                </div>
              </figure>
              <Card className="xl:hidden">
                <CardHeader className="p-4">
                  <div className="mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog/${blog.image}`}
                      alt="Blog Image"
                      height={400}
                      width={800}
                       

                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <CardTitle className="line-clamp-2 font-nunito text-2xl ">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-nunito text-lg text-left p-4 pt-0">
                  <div className="line-clamp-3">
                    {ClientRemoveTags(blog.description)}
                  </div>
                </CardContent>
                <div className="p-4">
                  <Button
                    title="Read More"
                    className="bg-white text-black  border-none"
                    svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
                    type="button"
                    navigateTo={`/blog/${blog.slug}`}
                  />
                </div>
                <Separator className="mx-auto w-[90%]" />
                <CardFooter className="justify-between pt-6">
                  <p>{formatDate(blog.createdAt)}</p>
                  <p>{Math.floor(Math.random() * 5) + 1 + " min read "}</p>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>

      <ul className="flex gap-2 justify-center items-center">
        <li>
          <button
            onClick={() =>
              currentPage > 1 && setCurrentPage((prev) => prev - 1)
            }
            className="px-4 py-2 bg-gray-300 cursor-pointer"
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={cn("px-4 py-2 bg-gray-300 cursor-pointer", {
              "bg-gray-500": currentPage === number,
            })}
          >
            {number}
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              currentPage < pageNumbers.length &&
              setCurrentPage((prev) => prev + 1)
            }
            className="px-4 py-2 bg-gray-300 cursor-pointer"
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default BlogWPagination;
