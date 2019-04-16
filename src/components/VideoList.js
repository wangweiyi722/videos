import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  console.log(props.listOfVideos);
  const videos = props.listOfVideos.map((video) => {
    return <VideoItem videoProp={video}/>;
  });
  return <div className="ui items four wide column">{videos}</div>
}
export default VideoList;
