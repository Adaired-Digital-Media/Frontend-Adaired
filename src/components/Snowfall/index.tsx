"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowfallComponent = () => {
  return (
    <Snowfall
      changeFrequency={300}
      snowflakeCount={300}
      rotationSpeed={[-1.0, 3.0]}
      color="#dee4fd"
      speed={[1, 4]}
      radius={[1, 6]}
      wind={[-1, 5]}
    />
  );
};

export default SnowfallComponent;
