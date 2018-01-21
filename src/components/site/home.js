import React from 'react';
import { Component } from 'react';

//landing page
export default class Home extends Component {
	render(){
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Welcome to a React Fundamentals App</h1> 

					<p>This is a demo about React that's <strong><i>built with React.</i></strong></p>
					<p>Check out the repo: <a href="https://github.com/jpauloconnor/react-library" target="blank"><span>here</span></a></p>

					<p>React is a declarative, component-based JavaScript library for building 
					user interfaces.</p>
				</div>
			</div>
			
		);
	}
}



