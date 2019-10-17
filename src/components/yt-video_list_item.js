import React from "react";
/**
 * @name yt-vidoe_list_item.js (Youtube.js component)
 * @author Schober Andreas
 * @const VideoListItem: creates the the small related videos inside of list-elements for the parent component Youtube
 * @return: the list-elements displaying the suggested and most related videos to our search string
 */
const VideoListItem = props => {
  /**
   * @const video: contains the props of the video
   * @const onUserSelected: to selec another video
   * @const imageUrl: contains the image URL
   */
  const video = props.video;
  const onUserSelected = props.onUserSelected;
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
