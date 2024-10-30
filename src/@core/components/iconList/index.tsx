import { FC } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface IIconList {
  icon: string;
  title: string;
  isSvg?: boolean;
  containerClassName?: string;
  titleClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
}
const IconList: FC<IIconList> = ({
  icon,
  title,
  isSvg = false,
  containerClassName,
  titleClassName,
  iconClassName,
  iconContainerClassName,
}) => {
  return (
    <div
      className={cn(`inline-flex items-center space-x-4 ${containerClassName}`)}
    >
      <div className={cn(`inline-block ${iconContainerClassName}`)}>
        {isSvg ? (
          <Image
            src={icon}
            alt={"icon"}
            height={32}
            width={32}
            className={cn(`w-full h-full ${iconClassName} `)}
          />
        ) : (
          <Icon icon={icon} className={cn(`w-full h-full ${iconClassName}`)} />
        )}
      </div>
      <p className={cn(`inline-block ${titleClassName}`)}>{title}</p>
    </div>
  );
};

export default IconList;
