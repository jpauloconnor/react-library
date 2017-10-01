import React from 'react';
import { Component } from 'react';


export default class Home extends Component {
	render(){
		return(
			<div className="home main">
				<div className="mainDiv">
					<h1 className="section-title">Welcome</h1> 

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>lorem ipsum</li>
						<li>lorem ipsum</li>
					</ul>

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" />

					<p>Now, let's look at the components.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
			
		);
	}
}





/*import React from 'react';
import { Component } from 'react';

//landing page

export default class Home extends Component { 
	render(){
		return(

			<div className="home main">
				<div className="mainDiv">
					<h1 className="section-title">Welcome to a React Fundamentals App</h1> 

				
					<p>This is a demo about React that's <strong><i>built with React.</i></strong></p>
					<p>Check out the repo: <a href="https://github.com/jpauloconnor/react-library" target="blank">here</a></p>
				
					<hr className="basic-rundown" />

					<p>React is a declarative, component-based JavaScript library for building user interfaces</p>
					<p>That means that you can use Components to describe your desired outcome for specific areas on the webpage without having to specify how to get to that outcome</p>
				
					<hr className="key-points" />

					<p><span>Component:</span> an independent, reusable piece of the user interface</p>
					<p>For Example, the below picture shows an app where the navigation bar, video, and sign in are each their own component and are independent of each other.</p>
					

					<div className="example">
					

					</div>

					<p>Let's talk a little bit more about components next.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
		);
	}
}*/

