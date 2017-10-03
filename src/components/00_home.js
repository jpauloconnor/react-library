import React from 'react';
import { Component } from 'react';

//landing page
export default class Home extends Component {
	render(){
	function start() { {/* function to go to next page, called on button click below */}
			window.location.assign('/components');
		}
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Welcome to a React Fundamentals App</h1> 

					<p>This is a demo about React that's <strong><i>built with React.</i></strong></p>
					<p>Check out the repo: <a href="https://github.com/jpauloconnor/react-library" target="blank"><span>here</span></a></p>

					<hr className="basic-rundown" />

					<p>React is a declarative, component-based JavaScript library for building 
					user interfaces.</p>
					<p>That means that you can use Components to describe your desired outcome 
					for specific areas on the webpage without having to specify how to get to 
					that outcome.</p>
				
					

					<p>Let's jump right into components.</p>
					<button id="butn" className="button" onClick={start}>Start</button>
				</div>
			</div>
			
		);
	}
}



