import React from "react";

import { VideoContainer, VideoElement } from "./Video.style";

const Video = ({src}) => {
  return (
    <VideoContainer>
      <VideoElement
        controls
        width="100%"
        playsinline
        poster="../../../assets/poster.png">
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </VideoElement>
    </VideoContainer>
  );
};

export default Video;
