import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import youtube from '../apis/youtube';


class App extends React.Component{
  state = {videos:[]};
  onTermSubmit = async (term) =>{
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    this.setState({videos:response.data.items});
  };
  render(){
    // Render a searchBar
    // Render a list of videos

    return (
      <div className="ui container">
        <SearchBar onSearch={this.onTermSubmit}/>
        I have {this.state.videos.length} videos.
        <VideoList listOfVideos={this.state.videos}/>

      </div>
  )}
}

export default App;
