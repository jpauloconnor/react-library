import React from 'react';
import { Component } from 'react';


export default class Constructor extends Component {
	render(){
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Constructor</h1> 

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>lorem ipsum</li>
						<li>lorem ipsum</li>
					</ul>

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" />

					<p>Now, let's look at the Life Cycle.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
			
		);
	}
}