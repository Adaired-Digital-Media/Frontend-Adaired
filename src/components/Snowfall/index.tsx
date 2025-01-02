"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowfallComponent = () => {
  const snowflakeImage = new Image();
  snowflakeImage.src =
    "https://res.cloudinary.com/adaired/image/upload/v1735035764/Static%20Website%20Images/snowFlake.png";

  return (
    <Snowfall
      changeFrequency={300}
      snowflakeCount={400}
      rotationSpeed={[-1.0, 3.0]}
      color="#dee4fd"
      speed={[1, 3]}
      radius={[1, 6]}
      wind={[-1, 1]}
    //   images={[snowflakeImage]}
    />
  );
};

export default SnowfallComponent;
