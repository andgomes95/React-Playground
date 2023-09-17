import React from 'react';

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?vq=small`}
        title="YouTube video player"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;