import React from "react";
import "../App.css";

const VideoDetail = props => {
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
        {/* <div>{video.snippet.description}</div> */}
      </div>
    </div>
  );
};

export default VideoDetail;
