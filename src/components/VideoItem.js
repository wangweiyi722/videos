import React from 'react';



class VideoItem extends React.Component {


  constructor (props){
    super(props);
  }

  render(){
    console.log(this.props.videoProp);
    return (
      <div onClick={() => this.props.onVideoSelect(this.props.videoProp)} className="item">
        <a className="ui tiny image">
          <img alt={this.props.videoProp.snippet.title} src={this.props.videoProp.snippet.thumbnails.default.url}/>
        </a>
        <div className="content">
          <a className="header">
            {this.props.videoProp.snippet.title}
          </a>
        </div>

      </div>);
  }
}

export default VideoItem;
