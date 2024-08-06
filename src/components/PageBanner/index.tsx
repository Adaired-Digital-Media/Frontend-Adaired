"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
const PageBanner = ({ title }: { title: string }) => {
  return (
    <AuroraBackground className="h-40 md:h-48 lg:h-64">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-start justify-center "
        >
          <h1 className="text-4xl md:text-6xl ">{title}</h1>
        </motion.div>
      </MaxWidthWrapper>
    </AuroraBackground>
  );
};

export default PageBanner;
