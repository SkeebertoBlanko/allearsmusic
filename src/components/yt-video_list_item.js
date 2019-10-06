import React from "react";

const VideoListItem = props => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  console.log(video);
  const imageUrl = video.snippet.thumbnails.medium.url;

  return (
    <li onClick={() => onUserSelected(video)} className="list-group-item">
      <span className="video-list media flex">
        <div className="w-1/3">
          <img src={imageUrl} alt={video.snippet.title} />
        </div>

        <div className="w-2/3">
          <div className="yt-list-title">{video.snippet.title}</div>
        </div>
      </span>
    </li>
  );
};

export default VideoListItem;
