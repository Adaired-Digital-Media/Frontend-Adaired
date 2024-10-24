import { MouseEventHandler, useState } from "react";
import { Icons } from "./../Icons";
import Link from "next/link";

type ButtonProps = {
  title: string;
  icon?: keyof typeof Icons;
  className?: string;
  textClassName?: string;
  svgClassName?: string;
  navigateTo?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = (props) => {
  const SelectedIcon = props.icon
    ? Icons[props.icon]
    : Icons["ArrowRightBroken"];

  const buttonContent = (
    <>
      <p className={`${props.textClassName}`}>{props.title}</p>
      <span
        className={`absolute left-[calc(100%-45px)] p-1 rounded-full  group-hover/btn:left-[7px] transition-all duration-500 ease-in-out ${props.svgClassName}`}
        // left-[calc(100% - 45px)]
      >
        <SelectedIcon className={`text-3xl text-white`} />
      </span>
    </>
  );

  return (
    <>
      {props.navigateTo ? (
        <Link
          href={props.navigateTo || ""}
          target={props.target || "_self"}
          rel={props.rel || "noreferrer"}
          aria-label="Link to page"
        >
          <button
            className={`rounded-full border relative inline-flex items-center justify-start py-3 pl-4 pr-14 overflow-hidden transition-all duration-500 ease-in-out  hover:pl-14 hover:pr-4 group/btn ${props.className}`}
            aria-label="Your Accessible Button Name"
            name="button"
          >
            {buttonContent}
          </button>
        </Link>
      ) : (
        <button
          className={`rounded-full border relative inline-flex items-center justify-start py-3 pl-4 pr-14 overflow-hidden transition-all duration-500 ease-in-out  hover:pl-14 hover:pr-4 group/btn  ${props.className}`}
          type={props.type}
          onClick={props.onClick}
          aria-label="Your Accessible Button Name"
          name="button"
        >
          {buttonContent}
        </button>
      )}
    </>
  );
};

export default Button;
