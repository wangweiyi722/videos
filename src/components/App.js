import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component{
  state = {videos:[], selectedVideo:null};
  onTermSubmit = async (term) =>{
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    this.setState({videos:response.data.items});
  };

onVideoSelect = (video) => {
  this.setState({selectedVideo:video});
}

  render(){
    // Render a searchBar
    // Render a list of videos

    return (
      <div className="ui grid" style={{padding:"50px"}}>
        <SearchBar onSearch={this.onTermSubmit}/>
        <div className="eleven wide column">
          <VideoDetail video={this.state.selectedVideo}/>
        </div>

        <div className="ui items four wide column">{this.state.videos.length} videos returned. <br/><VideoList onVideoSelect={this.onVideoSelect} listOfVideos={this.state.videos}/></div>


      </div>
  )}
}

export default App;
