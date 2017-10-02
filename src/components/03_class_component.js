import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';

//class components

export default class ClassComponent extends Component {
	render(){
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Class Components</h1> 

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>Must always have a render method</li>
						<li>TODO: More content here.</li>
					</ul>

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" />
					<Codepen user="KayleaBritton" hash="dVVPgM" />

					<p>Moving on, we'll discuss JSX.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
			
		);
	}
}
