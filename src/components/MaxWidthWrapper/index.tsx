import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <section
      className={cn(
        "mx-auto box-border w-full max-w-[1240px] 2xl:max-w-[1300px] 3xl:max-w-[1400px] 5xl:max-w-[1440px] px-5 md:px-6",
        className
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
