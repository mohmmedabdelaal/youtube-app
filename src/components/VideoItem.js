import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="photo"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="item-info">
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
