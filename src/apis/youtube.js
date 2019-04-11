import axios from 'axios';

const KEY = "AIzaSyBqSuQmkyX0kPMXDcq72WdacKKrzNdhGWM";


export default axios.create({
  baseURL:"https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
