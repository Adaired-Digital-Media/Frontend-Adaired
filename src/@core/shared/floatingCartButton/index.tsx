"use client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

type FloatingCartButtonProps = {
  totalItems: number;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function FloatingCartButton({
  totalItems,
  className,
  ...props
}: FloatingCartButtonProps) {
  return (
    <button
      className={cn(
        "fixed end-0 top-1/2 flex -translate-y-1/2 z-[100] flex-col items-center justify-center gap-1.5 rounded-tl-[10px] rounded-bl-[10px] bg-[#1C5B98] p-3 text-xs font-semibold text-primary-foreground shadow-[0_25px_50px_-12px_#000000] pr-12 pt-6 group/cartButton",
        className
      )}
      {...props}
    >
      <div className={cn(`relative`)}>
        <Icon
          icon="mdi:cart-outline"
          className="h-[40px] w-[40px] group-hover/cartButton:rotate-[-10deg] transition-all duration-150"
        />
        <Badge
          className={cn(
            ` absolute right-0 top-0 -translate-y-1/3 translate-x-1/2 bg-white text-[#1C5B98] px-3 font-poppins font-medium text-[15px] hover:bg-white`
          )}
        >
          {totalItems}
        </Badge>
      </div>
    </button>
  );
}
