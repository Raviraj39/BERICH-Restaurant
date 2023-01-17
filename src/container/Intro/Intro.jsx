import React from "react";
import { meal } from "../../constants";
import { useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

import "./Intro.css";
const Intro = () => {
  const [playVideo, setplayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app-videos">
      <video
        src={meal}
        ref={vidRef}
        type="Video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app-video-overlay flex__center">
        <div
          className="app-video-overlay-circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
