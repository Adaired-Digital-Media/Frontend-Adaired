"use client";
import { CldVideoPlayer, CldVideoPlayerProps } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const CldVidPlayer = (props: CldVideoPlayerProps) => {
  return <CldVideoPlayer {...props} />;
};

export default CldVidPlayer;
