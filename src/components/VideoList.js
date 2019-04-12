import React from 'react';

const VideoList = (props) => {
  const videos = props.listOfVideos.map((video) => {
    return <div>1</div>;
  });
  return <div className="image-list">{videos}</div>
}
export default VideoList;
