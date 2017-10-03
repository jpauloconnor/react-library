import React from 'react';
import { Component } from 'react';


export default class Constructor extends Component {
	render(){
		function next() { {/* function to go to next page, called on button click below*/}
			window.location.assign('/lifecycle');
		}
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

				{/* <Codepen height="350" user="KayleaBritton" hash="" />*/}

					<p>Now, let's look at the Life Cycle.</p>
					<button id="butn" className="button" onClick={next}>Next</button>
				</div>
			</div>
			
		);
	}
}