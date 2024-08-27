import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import parse, { domToReact, Element, DOMNode } from "html-react-parser";
import PageBanner from "@/components/PageBanner";
import PopularPosts from "@/components/PopularPosts";
import type { Metadata } from "next";
import { formatDate } from "@/lib/utils";

async function getBlogs({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/blog/readBlog/${params.slug}`
  );
  const data = await res.json();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getBlogs({ params });
  return {
    title: data.metaTitle
      ? data.metaTitle
      : `Read Our Blog for Helpful Tips and Ideas | Adaired`,
    description: data.metaDescription
      ? data.metaDescription
      : `Get easy-to-understand tips and new ideas from Adaired’s blogs. From practical tips to interesting ideas, there is something for everyone. Start exploring today!`,
    alternates: {
      canonical: `https://www.adaired.com/blog/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/blog/readBlog`
  ).then((res) => res.json());
  const blogs = res;
  return blogs.map((blog: any) => ({
    slug: blog.slug.toString(),
  }));
}

interface BlogProps {
  params: {
    slug: string;
  };
}

const Blog: React.FC<BlogProps> = async ({ params }) => {
  const data = await getBlogs({ params });

  const contentWithClass = parse(data.postDescription, {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        /^(h[1-6]|ol|ul)$/.test(domNode.tagName)
      ) {
        const children = Array.from(domNode.children) as DOMNode[];

        let additionalClasses = "font-nunito";

        // If the tag is h2, add specific classes
        if (domNode.tagName === "h2") {
          additionalClasses += " text-2xl md:text-3xl";
        }

        // If the tag is h3, add specific classes
        if (domNode.tagName === "h3") {
          additionalClasses += " text-xl md:text-2xl";
        }

        // If the tag is ol, add specific classes
        if (domNode.tagName === "ol") {
          additionalClasses += " p-4 ml-2 list-decimal";
        }

        // If the tag is ul, add specific classes
        if (domNode.tagName === "ul") {
          additionalClasses += " p-4 ml-2 list-disc";
        }

        return React.createElement(
          domNode.tagName,
          {
            ...domNode.attribs,
            className: `${
              domNode.attribs.className || ""
            } ${additionalClasses}`.trim(),
          },
          domToReact(children)
        );
      }
    },
  });

  return (
    <>
      <PageBanner title="Blog" />
      <MaxWidthWrapper className="flex gap-10 py-6 lg:py-12">
        <div className="border p-10 w-[70%]">
          <div>
            <Image
              src={data.featuredImage}
              height={560}
              width={1000}
              alt={data.title}
            />
          </div>
          <h1 className="text-[1.688rem] py-4 font-nunito text-3xl md:text-4xl font-bold">
            {data.postTitle}
          </h1>
          <p className="font-nunito pb-2">{formatDate(data.createdAt)}</p>
          <div>{contentWithClass}</div>
        </div>
        <aside className="w-[30%] relative">
          <div className="sticky top-24">
            <PopularPosts />
          </div>
        </aside>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
