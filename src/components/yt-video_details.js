import React from "react";
import "../App.css";
/**
 * @name yt-search_details.js (Youtube)
 * @author Schober Andreas
 * @const VideoDetail: creates the bigger Youtube video for display and show the video title
 * @return: the heading, the preview video aswell as the title of the video
 */
const VideoDetail = props => {
  /**
   * @const video: contains the props of the video
   * @const videoId: contains the video ID
   * @const url: contains the basic Youtube URL + the video ID
   */
  const video = props.video;

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <h2 className="text-center mx-auto my-2 text-lg font-semibold tracking-widest">
        Youtube:{" "}
      </h2>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-itemn rounded"
          src={url}
          title={video.snippet.title}
        ></iframe>
      </div>
      <div className="details my-0 bg-gray-500">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
