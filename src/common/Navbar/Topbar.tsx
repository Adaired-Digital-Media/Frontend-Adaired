import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className={cn(`bg-[#EEEEEE] h-10 flex  items-center`)}>
      <MaxWidthWrapper
        className={cn(`flex gap-2 justify-center items-center sm:justify-end`)}
      >
        <div>
          <Link
            href="tel:+12052736006"
            className={cn(`flex gap-1 sm:gap-2 items-center`)}
          >
            <Image
              src="https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/Us_Flag_a3eloz"
              alt="alt"
              width={20}
              height={20}
            />
            <p className={cn(`text-xs sm:text-base`)}>+1 (205) 273-6006</p>
          </Link>
        </div>
        <Separator
          orientation="vertical"
          className={cn(`bg-[#D9D9D9] h-6 w-0.5`)}
        />
        <div>
          <Link
            href="tel:+918907400008"
            className={cn(`flex gap-1 sm:gap-2 items-center`)}
          >
            <Image
              src="https://res.cloudinary.com/adaired/image/upload/f_auto,q_auto/v1/Static%20Website%20Images/Indian_Flag_ncjo16"
              alt="alt"
              width={20}
              height={20}
            />
            <p className={cn(`text-xs sm:text-base`)}>+91 89074-00008</p>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Topbar;
