import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-bar';
import VideoDetail from './video-detail'

const API_KEY = 'AIzaSyBh7FOaYJE9S-Xwas4YF2HQL9fBRa4NO_c';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('React Tutorials');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			console.log(videos);
			this.setState({ 
				videos: videos,
                selectedVideo: videos[0]

			}); // this.setState({videos})same as this.setState({videos: videos})
		});
	}

	render() {
		const videoSearch = _.debounce((term)=>{ this.videoSearch(term) }, 1800);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
			</div>
		);
    }

}

export default Video;
// <VideoList videos={this.state.videos} /> is called passing a prop
// the prop becomes a parameter in video-list.js and then we have access to the data 
// called from the youtube API query
// 2.  Take this component's generated HTML and put it in the DOM

// ReactDOM.render(<App />, document.querySelector('.container'));