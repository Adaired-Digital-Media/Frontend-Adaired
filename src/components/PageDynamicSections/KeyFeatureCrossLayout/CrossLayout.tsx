"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/AnimatedBeam";
import { Icons } from "@/components/Icons";

const Box = forwardRef<
  HTMLDivElement,
  {
    colorScheme?: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
  }
>(({ colorScheme, className, children, style }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        " z-[1] flex items-center justify-center border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] xl:min-w-[38rem] rounded-lg",
        className
      )}
      style={style}
    >
      <style jsx>{`
        .box1,
        .box2,
        .box3,
        .box4 {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .box1::before,
        .box3::before {
          content: "";
          position: absolute;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100%;
          background-color: ${colorScheme};
          z-index: -1;
          transition: right 0.4s ease;
        }
        .box2::before,
        .box4::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background-color: ${colorScheme};
          z-index: -1;
          transition: left 0.4s ease;
        }

        .box1:hover::before,
        .box3:hover::before {
          right: 0;
        }
        .box2:hover::before,
        .box4:hover::before {
          left: 0;
        }

        .box1:hover,
        .box2:hover,
        .box3:hover,
        .box4:hover {
          color: white;
          border-color: ${colorScheme};
          transition: color 0.4s ease;
        }
      `}</style>
      {children}
    </div>
  );
});

Box.displayName = "Box";

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
  }
>(({ className, children, style }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

interface CrossLayoutProps {
  data: {
    body: {
      point_1: string;
      point_2: string;
      point_3: string;
      point_4: string;
      point_5: string;
      colorScheme: string;
    };
  };
  colorScheme: string;
}

export function CrossLayout({ data, colorScheme }: CrossLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileDiv1Ref = useRef<HTMLDivElement>(null);
  const mobileDiv2Ref = useRef<HTMLDivElement>(null);
  const mobileDiv3Ref = useRef<HTMLDivElement>(null);
  const mobileDiv4Ref = useRef<HTMLDivElement>(null);
  const mobileDiv5Ref = useRef<HTMLDivElement>(null);

  const body = data?.body;

  return (
    <>
      <div
        className="hidden lg:flex relative h-auto w-full items-center justify-center overflow-hidden "
        ref={containerRef}
      >
        <div className="flex size-full flex-col  items-stretch justify-between">
          <div className="flex flex-row items-center justify-between">
            <Box
              ref={div1Ref}
              className="justify-end box1 text-sm xl:text-lg lg:min-w-[30rem]"
              colorScheme={colorScheme}
            >
              {body.point_1}
              <Icons.PinkArrowMarker className="ml-1 rotate-180" />
            </Box>
            <Box
              ref={div4Ref}
              className="justify-start box2 text-sm xl:text-lg lg:min-w-[30rem]" 
              colorScheme={colorScheme}
            >
              <Icons.PinkArrowMarker className="mr-1 " />
              {body.point_2}
            </Box>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Circle
              ref={div3Ref}
              className="size-28"
              style={{
                backgroundColor: colorScheme,
                borderColor: colorScheme,
                color: "white",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
            >
              <Icons.openai />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Box
              ref={div2Ref}
              className="justify-end box3 text-sm xl:text-lg lg:min-w-[30rem]"
              colorScheme={colorScheme}
            >
              {body.point_3}
              <Icons.PinkArrowMarker className="ml-1 rotate-180 " />
            </Box>
            <Box
              ref={div5Ref}
              className="justify-start box4 text-sm xl:text-lg lg:min-w-[30rem]"
              colorScheme={colorScheme}
            >
              <Icons.PinkArrowMarker className="mr-1 " />
              {body.point_4}
            </Box>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div3Ref}
          curvature={50}
          endYOffset={0}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div3Ref}
          curvature={-50}
          endYOffset={0}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div3Ref}
          curvature={50}
          endYOffset={0}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div3Ref}
          curvature={-50}
          endYOffset={0}
        />
      </div>
      {/* View for Small and Medium Screens */}
      <div
        className="lg:hidden relative flex h-fit w-full items-center justify-center"
        ref={mobileContainerRef}
      >
        <div className="flex size-full flex-col space-y-8">
          <div className="space-y-10">
            <Box
              ref={mobileDiv1Ref}
              className="text-center justify-center box1 text-base"
              colorScheme={colorScheme}
            >
              {body.point_1}
            </Box>
            <Box
              ref={mobileDiv4Ref}
              className="text-center justify-center box2 text-base"
              colorScheme={colorScheme}
            >
              {body.point_2}
            </Box>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Circle
              ref={mobileDiv3Ref}
              className="size-20"
              style={{
                backgroundColor: colorScheme,
                borderColor: colorScheme,
                color: "white",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
            >
              <Icons.openai />
            </Circle>
          </div>
          <div className="space-y-10">
            <Box
              ref={mobileDiv2Ref}
              className="text-center justify-center box3 text-base"
              colorScheme={colorScheme}
            >
              {body.point_3}
            </Box>
            <Box
              ref={mobileDiv5Ref}
              className="text-center justify-cengter box4 text-base"
              colorScheme={colorScheme}
            >
              {body.point_4}
            </Box>
          </div>
        </div>
        <AnimatedBeam
          containerRef={mobileContainerRef}
          fromRef={mobileDiv4Ref}
          toRef={mobileDiv1Ref}
          curvature={-25}
          endYOffset={0}
          reverse
        />
        <AnimatedBeam
          containerRef={mobileContainerRef}
          fromRef={mobileDiv2Ref}
          toRef={mobileDiv3Ref}
          curvature={-25}
          endYOffset={0}
        />
        <AnimatedBeam
          containerRef={mobileContainerRef}
          fromRef={mobileDiv4Ref}
          toRef={mobileDiv3Ref}
          curvature={25}
          endYOffset={0}
          reverse
        />
        <AnimatedBeam
          containerRef={mobileContainerRef}
          fromRef={mobileDiv2Ref}
          toRef={mobileDiv5Ref}
          curvature={-25}
          endYOffset={0}
        />
      </div>
    </>
  );
}
