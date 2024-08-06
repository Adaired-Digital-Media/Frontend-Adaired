import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedLetterProps {
  character: string;
  animation: Variants;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  character,
  animation,
}) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap font-semibold "
    >
      {character}
    </motion.span>
  );
};

interface AnimatedWordProps {
  title: string;
  animation: Variants;
  isHovered: boolean;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  title,
  animation,
  isHovered,
}) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative "
    >
      {title
        .split("")
        .map((character, i) =>
          character === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <AnimatedLetter
              key={i}
              character={character}
              animation={animation}
            />
          )
        )}
    </motion.span>
  );
};

const AnimatedLink: React.FC<{ title: string }> = ({ title }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer"
    >
      <AnimatedWord
        title={title}
        animation={letterAnimation}
        isHovered={isHovered}
      />
      <div className="absolute top-0 h-24 text-slate-800">
        <AnimatedWord
          title={title}
          animation={letterAnimationTwo}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
};

const titleAnimation: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const letterAnimation: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimationTwo: Variants = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

export default AnimatedLink;
