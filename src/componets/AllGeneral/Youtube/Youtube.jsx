import React, { useState } from 'react';

const Youtube = () => {
  const [videoId, setVideoId] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = (videoId) => {
    setVideoId(videoId);
    setShowVideo(true);
  };

  const generateUrl = (id) => {
    let query = "?rel=0&showinfo=0&autoplay=1";
    return "https://www.youtube.com/embed/" + id + query;
  };

  return (
    <div className="video" onClick={() => handleVideoClick("nxCLXMBl4e4")}>
      {showVideo ? (
        <iframe
          title="YouTube Video"
          allowfullscreen=""
          allow="autoplay; encrypted-media"
          src={generateUrl(videoId)}
        />
      ) : (
        <>
          <img
            src="https://i.ytimg.com/vi/nxCLXMBl4e4/maxresdefault.jpg"
            alt="video"
          />
          <button className="video__btn">
            <svg viewBox="0 0 68 48">
              <path
                className="video__shape"
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              />
              <path className="video__icon" d="M 45,24 27,14 27,34" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Youtube;
