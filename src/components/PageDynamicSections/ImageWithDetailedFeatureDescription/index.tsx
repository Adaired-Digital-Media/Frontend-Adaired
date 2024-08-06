"use client";
import React from "react";
import Image from "next/image";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
} from "html-react-parser";
import Button from "@/components/Button";
import { Icons } from "@/components/Icons";

type ImageWithDetailedFeatureDescriptionProps = {
  colorScheme: string;
  data: {
    layout: string;
    imgUrl: string;
    title: string;
    description: string;
    buttonInnerText: string;
    buttonLink: string;
  };
};

const ImageWithDetailedFeatureDescription = ({
  data,
  colorScheme,
}: ImageWithDetailedFeatureDescriptionProps) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name === "ul"
      ) {
        const children = Array.from(domNode.children) as DOMNode[];
        return (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {domToReact(children, options)}
          </ul>
        );
      }
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name === "li"
      ) {
        const children = Array.from(domNode.children) as DOMNode[];
        return (
          <li className="flex gap-2 items-center">
            <Icons.rightIcon fill={colorScheme} className="icon_right" />
            <style jsx>
              {`
                .icon_right {
                  color: ${colorScheme};
                }
              `}
            </style>
            {domToReact(children, options)}
          </li>
        );
      }
    },
  };

  return (
    <section
      className={`flex gap-10 flex-col lg:flex-row ${
        data.layout === "rightImage" && "flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <div className="w-full grid place-items-center">
          <Image src={data.imgUrl} alt="alt" width={676} height={521} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-3">
        <h2 className={`text-2xl lg:text-[38px] leading-snug font-nunito font-semibold`}>
          {data.title}
        </h2>
        <div className="space-y-4">{parse(data.description, options)}</div>
        <div>
          <Button
            title={data.buttonInnerText}
            className="hover:pl-0 hover:pr-0 text-sm md:text-lg"
            svgClassName="bg-[#F89520]"
            type="button"
            navigateTo={data.buttonLink || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageWithDetailedFeatureDescription;
