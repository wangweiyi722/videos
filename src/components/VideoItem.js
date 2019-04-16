import React from 'react';



class VideoItem extends React.Component {


  render(){
    console.log(this.props.videoProp);
    return (
      <div className="item">
        <a className="ui tiny image">
          <img src={this.props.videoProp.snippet.thumbnails.default.url} alt="could not find"/>
        </a>
        <div className="content">
          <a className="header">{this.props.videoProp.snippet.title}</a>
          <div className="description">
            <p>{this.props.videoProp.snippet.description}</p>
          </div>
        </div>

      </div>);
  }
}

export default VideoItem;
