"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn, hexToHexWithOpacity } from "@/lib/utils";
import React from "react";
import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type ServiceKeyFeaturesLayoutProps = {
  colorScheme: string;
  data: any;
};

const ServiceKeyFeaturesLayout = ({
  colorScheme,
  data,
}: ServiceKeyFeaturesLayoutProps) => {
  const bgColor = hexToHexWithOpacity(colorScheme, 0.04);
  return (
    <section className="py-16 service_features">
      <style jsx>{`
        .service_features {
          background-color: ${bgColor};
        }
      `}</style>
      <div className="hidden lg:block">
        <SVGContainer
          title={data.title}
          keyFeatures={data.keyFeatures}
          colorScheme={colorScheme}
        />
      </div>
      <div className=" lg:hidden">
        <MobileSVGComponent
          title={data.title}
          keyFeatures={data.keyFeatures}
          colorScheme={colorScheme}
        />
      </div>
    </section>
  );
};

export default ServiceKeyFeaturesLayout;

type keyFeature = {
  feature: string;
  description: string;
};
interface KeyFeatures {
  colorScheme: string;
  title: string;
  keyFeatures: keyFeature[];
}

const MobileSVGComponent: React.FC<KeyFeatures> = ({
  colorScheme,
  title,
  keyFeatures,
}) => {
  return (
    <MaxWidthWrapper className="text-center space-y-8">
      <h2 className="text-2xl lg:text-[38px] leading-snug ">{title}</h2>
      <div>
        {keyFeatures.map((item: any, index: number) => (
          <div key={index}>
            <div>
              <TextRevealByWord
                feature={item.feature}
                description={item.description}
              />
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

const SVGContainer: React.FC<KeyFeatures> = ({
  colorScheme,
  title,
  keyFeatures,
}) => {
  return (
    <MaxWidthWrapper className="text-center space-y-8">
      <h2 className="text-2xl lg:text-[38px] leading-snug ">{title}</h2>
      <div className="grid grid-cols-4 gap-4 ">
        {keyFeatures.map((item: any, index: number) => (
          <>
            <div key={index}>
              <div className={cn(`flex items-center justify-center`)}>
                <div className="relative">
                  <svg
                    width="336"
                    height="347"
                    viewBox="0 0 311 347"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" lg:w-[231px] lg:h-[271px] xl:w-[311px] xl:h-[322px] 2xl:w-[336px] 2xl:h-[347px]"
                  >
                    <path
                      d="M253.61 347H147.434C146.642 347 146 346.356 146 345.561C146 344.765 146.642 344.121 147.434 344.121H253.61C278.706 344.121 299.132 323.629 299.132 298.439C299.132 297.644 299.773 297 300.566 297C301.358 297 302 297.644 302 298.439C302 325.21 280.301 347 253.62 347H253.61Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      d="M123.151 345.564C123.151 344.779 123.789 344.127 124.576 344.127C125.363 344.127 126 344.779 126 345.564C126 346.357 125.363 347 124.576 347C123.789 347 123.151 346.357 123.151 345.564ZM106.107 345.564C106.107 344.779 106.754 344.127 107.532 344.127C108.319 344.127 108.956 344.779 108.956 345.564C108.956 346.357 108.319 347 107.532 347C106.754 347 106.107 346.357 106.107 345.564ZM89.0633 345.564C89.0633 344.779 89.7098 344.127 90.4875 344.127C91.2746 344.127 91.9118 344.779 91.9118 345.564C91.9118 346.357 91.2746 347 90.4875 347C89.7098 347 89.0633 346.357 89.0633 345.564ZM72.0191 345.564C72.0191 344.779 72.6657 344.127 73.4434 344.127C74.2305 344.127 74.8676 344.779 74.8676 345.564C74.8676 346.357 74.2305 347 73.4434 347C72.6657 347 72.0191 346.357 72.0191 345.564ZM54.975 345.564C54.975 344.779 55.6215 344.127 56.3993 344.127C57.1863 344.127 57.8235 344.779 57.8235 345.564C57.8235 346.357 57.1863 347 56.3993 347C55.6215 347 54.975 346.357 54.975 345.564ZM39.1302 345.856C38.3619 345.686 37.884 344.921 38.0527 344.146C38.2214 343.371 38.9803 342.889 39.7487 343.059C40.517 343.229 40.9855 343.995 40.8262 344.77C40.6763 345.441 40.086 345.885 39.4301 345.885C39.3364 345.885 39.2333 345.875 39.1302 345.856ZM23.0512 338.958C22.3953 338.513 22.2173 337.625 22.6577 336.973C23.0887 336.311 23.9695 336.132 24.6254 336.576C25.2813 337.011 25.4593 337.899 25.019 338.561C24.7472 338.986 24.2975 339.203 23.8383 339.203C23.576 339.203 23.2949 339.128 23.0512 338.967V338.958ZM10.4766 326.738C10.0175 326.095 10.1674 325.198 10.8046 324.744C11.4417 324.281 12.3225 324.432 12.7817 325.065C13.2408 325.708 13.0909 326.606 12.4631 327.059C12.2101 327.239 11.9196 327.333 11.6291 327.333C11.1888 327.324 10.7577 327.126 10.4766 326.729V326.738ZM3.04618 310.804C2.84941 310.029 3.29917 309.245 4.05815 309.047C4.81712 308.848 5.59483 309.302 5.79161 310.067C5.98838 310.833 5.53861 311.627 4.77964 311.825C4.65783 311.853 4.53602 311.872 4.42358 311.872C3.78641 311.872 3.21484 311.447 3.04618 310.804Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      d="M300.495 101C300.395 101 300.296 100.99 300.206 100.97C300.106 100.95 300.017 100.92 299.927 100.88C299.837 100.841 299.747 100.801 299.668 100.741C299.588 100.691 299.508 100.631 299.439 100.561C299.159 100.282 299 99.8837 299 99.495C299 99.3953 299.01 99.2957 299.03 99.196C299.05 99.1063 299.08 99.0066 299.12 98.9169C299.149 98.8272 299.199 98.7475 299.249 98.6578C299.309 98.5781 299.369 98.5083 299.439 98.4385C299.508 98.3688 299.588 98.299 299.668 98.2492C299.747 98.1993 299.837 98.1495 299.927 98.1096C300.017 98.0698 300.106 98.0498 300.206 98.0299C300.395 97.99 300.595 97.99 300.794 98.0299C300.894 98.0498 300.983 98.0698 301.073 98.1096C301.173 98.1495 301.252 98.1993 301.332 98.2492C301.422 98.299 301.492 98.3688 301.561 98.4385C301.841 98.7176 302 99.1063 302 99.505C302 99.5947 302 99.6944 301.97 99.794C301.95 99.8837 301.92 99.9834 301.89 100.073C301.85 100.163 301.801 100.252 301.751 100.332C301.691 100.412 301.631 100.492 301.561 100.561C301.492 100.631 301.422 100.691 301.332 100.741C301.252 100.801 301.173 100.841 301.073 100.88C300.983 100.92 300.894 100.95 300.794 100.97C300.704 100.99 300.605 101 300.505 101H300.495Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      d="M299 279.57C299 278.779 299.671 278.139 300.5 278.139C301.329 278.139 302 278.779 302 279.57C302 280.36 301.329 281 300.5 281C299.671 281 299 280.36 299 279.57ZM299 261.558C299 260.768 299.671 260.128 300.5 260.128C301.329 260.128 302 260.768 302 261.558C302 262.339 301.329 262.989 300.5 262.989C299.671 262.989 299 262.339 299 261.558ZM299 243.538C299 242.747 299.671 242.107 300.5 242.107C301.329 242.107 302 242.747 302 243.538C302 244.328 301.329 244.968 300.5 244.968C299.671 244.968 299 244.328 299 243.538ZM299 225.526C299 224.736 299.671 224.096 300.5 224.096C301.329 224.096 302 224.736 302 225.526C302 226.307 301.329 226.957 300.5 226.957C299.671 226.957 299 226.307 299 225.526ZM299 207.506C299 206.715 299.671 206.075 300.5 206.075C301.329 206.075 302 206.715 302 207.506C302 208.296 301.329 208.936 300.5 208.936C299.671 208.936 299 208.296 299 207.506ZM299 189.494C299 188.704 299.671 188.064 300.5 188.064C301.329 188.064 302 188.704 302 189.494C302 190.285 301.329 190.925 300.5 190.925C299.671 190.925 299 190.285 299 189.494ZM299 171.474C299 170.683 299.671 170.043 300.5 170.043C301.329 170.043 302 170.683 302 171.474C302 172.264 301.329 172.904 300.5 172.904C299.671 172.904 299 172.264 299 171.474ZM299 153.462C299 152.672 299.671 152.032 300.5 152.032C301.329 152.032 302 152.672 302 153.462C302 154.253 301.329 154.893 300.5 154.893C299.671 154.893 299 154.253 299 153.462ZM299 135.451C299 134.661 299.671 134.021 300.5 134.021C301.329 134.021 302 134.661 302 135.451C302 136.232 301.329 136.881 300.5 136.881C299.671 136.881 299 136.232 299 135.451ZM299 117.43C299 116.64 299.671 116 300.5 116C301.329 116 302 116.64 302 117.43C302 118.221 301.329 118.861 300.5 118.861C299.671 118.861 299 118.221 299 117.43Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />

                    <path
                      d="M0 196V220L19 207.995L0 196Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      className={cn(
                        index === keyFeatures.length - 1 && "hidden"
                      )}
                      d="M378.171 210H302.829C301.818 210 301 209.329 301 208.5C301 207.671 301.818 207 302.829 207H378.171C379.182 207 380 207.671 380 208.5C380 209.329 379.182 210 378.171 210Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      d="M1.5 298C0.671053 298 0 297.531 0 296.952V228.048C0 227.469 0.671053 227 1.5 227C2.32895 227 3 227.469 3 228.048V296.952C3 297.531 2.32895 298 1.5 298Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      d="M293.03 208.063C293.046 212.481 296.865 216.049 301.559 216.031C306.253 216.014 310.046 212.418 310.03 208C310.013 203.582 306.194 200.014 301.5 200.031C296.806 200.049 293.013 203.644 293.03 208.063Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M94.3737 46.6548H48.2878C23.2906 46.6548 2.94509 66.9909 2.94509 91.9975V188.181C2.94509 188.968 2.30859 189.606 1.52137 189.609C0.73415 189.606 0.0976562 188.968 0.0976562 188.181V91.9975C0.0976562 65.4309 21.7118 43.8074 48.2878 43.8074H94.5391C94.4623 44.7506 94.4071 45.6999 94.3737 46.6548ZM216.356 46.6548H253.406C278.413 46.6548 298.749 67.0003 298.749 91.9975C298.749 92.7869 299.388 93.426 300.177 93.426C300.967 93.426 301.606 92.7869 301.606 91.9975C301.606 65.4215 279.982 43.8074 253.416 43.8074H216.19C216.267 44.7506 216.322 45.6999 216.356 46.6548ZM1.52137 189.609C1.51981 189.609 1.51824 189.609 1.51667 189.609H1.52607C1.5245 189.609 1.52294 189.609 1.52137 189.609Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <path
                      d="M155 100C182.062 100 204 77.6142 204 50C204 22.3858 182.062 0 155 0C127.938 0 106 22.3858 106 50C106 77.6142 127.938 100 155 100Z"
                      fill={index % 2 !== 0 ? "#515151" : colorScheme}
                    />
                    <g clipPath="url(#clip0_1632_26)">
                      <path
                        d="M136.534 71.8808C135.682 71.7101 134.9 71.2913 134.286 70.677C133.672 70.0626 133.254 69.2803 133.084 68.4286C132.943 67.7196 132.98 66.9869 133.19 66.2954C133.4 65.6039 133.778 64.9748 134.289 64.4638C134.8 63.9527 135.429 63.5754 136.12 63.3652C136.812 63.155 137.545 63.1184 138.254 63.2586C139.105 63.4291 139.887 63.8477 140.501 64.4617C141.115 65.0757 141.533 65.8576 141.704 66.7089C141.844 67.418 141.808 68.1506 141.597 68.8421C141.387 69.5336 141.01 70.1627 140.499 70.6738C139.988 71.1849 139.359 71.5622 138.667 71.7724C137.976 71.9826 137.243 72.021 136.534 71.8808ZM171.749 36.7413C170.897 36.5708 170.115 36.1522 169.501 35.5382C168.887 34.9242 168.469 34.1423 168.298 33.2909C168.158 32.5819 168.195 31.8493 168.405 31.1578C168.615 30.4662 168.992 29.8371 169.503 29.3261C170.014 28.815 170.644 28.4377 171.335 28.2275C172.027 28.0173 172.759 27.9807 173.468 28.1209C174.32 28.2914 175.102 28.71 175.716 29.324C176.33 29.938 176.748 30.7199 176.919 31.5713C177.059 32.2803 177.022 33.013 176.812 33.7045C176.602 34.396 176.225 35.0251 175.713 35.5361C175.202 36.0472 174.573 36.4245 173.882 36.6347C173.19 36.8449 172.458 36.8815 171.749 36.7413ZM155.04 39.0183C157.142 39.0183 159.108 39.6123 160.778 40.6371L165.517 35.8979C162.133 33.3824 157.958 32.1676 153.753 32.4754C149.548 32.7831 145.594 34.5929 142.612 37.5743C139.631 40.5557 137.821 44.5099 137.513 48.715C137.205 52.92 138.42 57.0956 140.936 60.4793L145.677 55.7383C144.657 54.0739 144.099 52.1677 144.06 50.216C144.022 48.2643 144.504 46.3376 145.458 44.6344C146.412 42.9312 147.803 41.513 149.487 40.5259C151.171 39.5387 153.088 39.0183 155.04 39.0183ZM164.402 44.2616C165.691 46.3648 166.234 48.8406 165.944 51.2901C165.654 53.7396 164.548 56.0202 162.804 57.7643C161.06 59.5085 158.779 60.6147 156.33 60.9047C153.88 61.1946 151.404 60.6515 149.301 59.3628L144.56 64.1019C147.944 66.6175 152.119 67.8323 156.325 67.5245C160.53 67.2168 164.484 65.407 167.465 62.4256C170.447 59.4442 172.256 55.49 172.564 51.2849C172.872 47.0798 171.657 42.9043 169.142 39.5206L164.402 44.2616Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1632_26">
                        <rect
                          width="44"
                          height="44"
                          fill="white"
                          transform="translate(133 28)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="p-6 xl:p-10 flex flex-col items-center justify-center absolute top-1/4 left-0">
                    <div className="space-y-2 ">
                      <h4
                        className={`text-lg leading-tight xl:leading-snug xl:text-xl font-nunito font-semibold text-black relative after:absolute after:content-[''] after:left-1/2 after:-bottom-1 after:h-0.5 after:w-1/4 after:-translate-x-1/2 after:bg-[#d9d9d9] `}
                      >
                        {item.feature}
                      </h4>
                      <p className="text-[#515151} text-sm xl:text-base leading-tight xl:leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

interface TextRevealByWordProps {
  feature: string;
  description: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  feature,
  description,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const featureText = feature.split(" ");
  const descriptionText = description.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-fit", className)}>
      <div
        className={
          "sticky top-0 mx-auto  h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <h4
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {featureText.map((word, i) => {
            const start = i / featureText.length;
            const end = start + 1 / featureText.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h4>
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {descriptionText.map((word, i) => {
            const start = i / descriptionText.length;
            const end = start + 1 / descriptionText.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};
