import { FC } from "react";
import { cn } from "@/lib/utils";
import { ISmallContainerType } from "@/types/components/smallContainerTypes";

const SmallContainer: FC<ISmallContainerType> = ({
  className,
  children,
  style,
}) => {
  return (
    <div
      className={cn(
        `max-w-[1340px] m-auto scale-[0.8] 2xl:scale-[0.85] 3xl:scale-[0.9] 4xl:scale-100 py-6 xl:py-10 2xl:py-16 3xl:py-24 ${className}  `
      )}
      style={typeof style === "string" ? undefined : style}
    >
      {children}
    </div>
  );
};

export default SmallContainer;
