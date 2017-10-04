import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';


export default class JSXRules extends Component {
	render(){
		function next() {
			window.location.assign('/props');
		}
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">JSX</h1> 

					<hr className="basic-rundown" />
				
					<p>React requires that your code be written in JSX.</p>
					<p>JSX stands for JavaScript XML and is a syntax extension to JavaScript.</p>
				
					<hr className="key-points" />

					<dl className="learning-list">
						<dt className="learning-point-item-name">This looks familiar...</dt>
					    <dd className="learning-point-item-text">JSX looks like HTML, but it's not. It's actually closer to JavaScript.</dd>
					    <dt className="learning-point-item-name">It produces objects called "React elements"</dt>
					    <dd className="learning-point-item-text">These are used to construct and update the DOM, what you see on the screen.</dd>
					    <dt className="learning-point-item-name">Components can't return multiple React elements</dt>
					    <dd className="learning-point-item-text">To bypass you must wrap everything in a component in one element( div, h1, p, etc.)</dd>
					    
					</dl>
					

					<hr className="explanation" />

					<p>Let's look at the original codepen example.</p>
					<p>This looks like some crazy hybrid of JavaScript and HTML! Well, it almost is. Really it's just a different
					syntax for JavaScript. You can embed JavaScript expressions in JSX by wrapping them in curly braces like props.name 
					on the second line below.</p>
					<p>The most important thing to notice below is the way JSX treats classes. Since it is like JavaScript, React DOM uses 
					camelCase in naming. So instead of class, you use className. This also happens because class is a keyword in React
					(remember Class Components?).</p>


					<hr className="codepen" />

					<Codepen height="350" user="KayleaBritton" hash="borJMa" />

					<p>Now, we'll talk about props.</p>
					<button id="butn" className="button" onClick={next}>Next</button>
				</div>
			</div>
		);
	}
}


//TODO: Add images of babel screenshots.