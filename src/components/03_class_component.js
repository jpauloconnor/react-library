import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';

//class components

export default class ClassComponent extends Component {
	render(){
		function next() { {/* function to go to next page, called on button click below*/}
			window.location.assign('/jsx');
		}
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Class Components</h1> 

					<hr className="basic-rundown" /> 

					<p>The fat arrow is an ES6 construct for functions. </p>

				
					<hr className="key-points" />

					<dl className="learning-list">
						<dt className="learning-point-item-name">Render </dt>
					    <dd className="learning-point-item-text">Class components must always have a render method.</dd>
					</dl>
					<ul>
						<li></li>
						<li>TODO: More content here.</li>
					</ul>

					<hr className="explanation" />

					<p>Below we can see just the second component from our original 
					example. Under the Babel tab, we can see that this is clearly a class 
					component as that is the first word in our code.</p>
					<p>Class components are defined by typing the word "class" followed by the 
					name you want to give the component and then "extends React.Component" before
					a set of curly braces.</p>
					<p>This is creating your class component and then it is called at the bottom 
					of the code just like in the example on the components page.</p>


					<hr className="codepen" />
					<Codepen height="350" user="KayleaBritton" hash="dVVPgM" />

					<p>Moving on, we'll discuss JSX.</p>
					<button id="butn5" className="button" onClick={next}>Next</button>
				</div>
			</div>
			
		);
	}
}
