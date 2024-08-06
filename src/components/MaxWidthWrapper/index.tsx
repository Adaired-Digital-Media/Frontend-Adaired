import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        " mx-auto box-border w-full max-w-[1440px] px-3 md:px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
