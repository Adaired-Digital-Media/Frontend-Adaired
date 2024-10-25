import { FC } from "react";
import { cn } from "@/lib/utils";
import { ITwoColumnGridTypes } from "@/types/components/twoColumnGridTypes";

const TwoColumnGrid: FC<ITwoColumnGridTypes> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        `grid grid-cols-2 place-items-center gap-x-14  ${className}`
      )}
      style={typeof style === "string" ? undefined : style}
    >
      {children}
    </div>
  );
};

export default TwoColumnGrid;
