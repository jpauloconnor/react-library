import React from 'react';
import { Component } from 'react';


export default class JSXRules extends Component {
	render(){
		return(
			<div className="ain">
				<div className="mainDiv">
					<h1 className="section-title">JSX</h1> 

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>JSX looks like HTML, but it's not....</li>
						<li>Runs JavaScript under the hood.</li>
						<li>Must wrap everything in a componet in one element(a div, h1, p, etc.)</li>
					</ul>
					

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" />

					<p>Now, we'll talk about props.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
		);
	}
}


//TODO: Add images of babel screenshots.