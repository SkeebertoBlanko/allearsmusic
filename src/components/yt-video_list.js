import React from "react";
import VideoListItem from "./yt-video_list_item";
/**
 * @name yt-video_list.js (Youtube)
 * @author Schober Andreas
 * @const VideoList: creates the <ul>-container for displaying the <li>-items of yt-video_list_item.js
 * @return: the <ul>-container + the videos
 */
const VideoList = props => {
  /**
   * @const videoItems: map the properties of the related Youtube videos and create the VideoListItem component
   */
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
