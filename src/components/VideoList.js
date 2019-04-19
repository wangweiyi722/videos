import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({listOfVideos, onVideoSelect}) => {
  console.log(listOfVideos);
  const videos = listOfVideos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} videoProp={video}/>;
  });
  return <div className="ui divided items">{videos}</div>
}
export default VideoList;
