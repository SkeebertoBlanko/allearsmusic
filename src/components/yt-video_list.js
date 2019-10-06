import React from "react";
import VideoListItem from "./yt-video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onUserSelected={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="list-group">{videoItems}</ul>;
};

export default VideoList;
