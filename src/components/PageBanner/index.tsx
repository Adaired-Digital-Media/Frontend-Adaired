"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Particles from "@/components/magicui/Particles";
const PageBanner = ({ title }: { title: string }) => {
  return (
    // <AuroraBackground className="h-40 md:h-48 lg:h-64">
    //   <MaxWidthWrapper>
    //     <motion.div
    //       initial={{ opacity: 0.0, y: 40 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{
    //         delay: 0.3,
    //         duration: 0.8,
    //         ease: "easeInOut",
    //       }}
    //       className="relative flex flex-col gap-4 items-start justify-center "
    //     >
    //       <h2 className="text-4xl md:text-6xl ">{title}</h2>
    //     </motion.div>
    //   </MaxWidthWrapper>
    // </AuroraBackground>

    <div className="relative flex h-40 md:h-48 lg:h-64 w-full flex-col justify-center overflow-hidden  bg-gray-50 ">
      <MaxWidthWrapper>
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-400/80 bg-clip-text text-3xl md:text-[3.375rem] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          {title}
        </h1>
      </MaxWidthWrapper>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#000000"}
        refresh
      />
    </div>
  );
};

export default PageBanner;
