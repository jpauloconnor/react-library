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

					<p>Class components are considered the "React way" of writing components. With this method 
					we create a class that extends React.Component. You can write this as either "extends React.Component" 
					or "extends Component" with Component being imported in from react at the top of your code.</p>

				
					<hr className="key-points" />

					<dl className="learning-list">
						<dt className="learning-point-item-name">extends Component </dt>
					    <dd className="learning-point-item-text">Class components need to extend the React Component.</dd>
						<dt className="learning-point-item-name">Render</dt>
					    <dd className="learning-point-item-text">Class components must always have a render method.</dd>
					</dl>

					<hr className="explanation" />

					<p>Below we can see just the second component from our original example. Under the Babel tab, 
					we can identify that this is a class component as that is the first word in our code.</p>
					<p>Class components are defined by typing the word "class" followed by the name you want to 
					give the component and then "extends React.Component" before a set of curly braces.</p>
					<p>This is creating your class component and it is called at the bottom of the code just 
					like in the example on the components page.</p>


					<hr className="codepen" />
					<Codepen height="350" user="KayleaBritton" hash="dVVPgM" />

					<p>Moving on, we'll discuss JSX.</p>
					<button id="butn5" className="button" onClick={next}>Next</button>
				</div>
			</div>
			
		);
	}
}
