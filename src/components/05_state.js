import React from 'react';
import {Component} from 'react';


export default class State extends Component {
	render(){
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">State</h1> 

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>lorem ipsum</li>
						<li>lorem ipsum</li>
					</ul>

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" />

					<p>Moving on, we'll discuss setState.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
			
		);
	}
}



















// 	constructor(props){
// 		super(props);
// 		this.state = {counter: 1};
// 	}
// 	render(){
// 		return(
// 			<div>
// 			<StateRules />
// 			<button>{this.state.counter}</button>
// 			</div>
// 		);
// 	}
// }



// const StateRules = () => {
// 	return(
// 		<div className="state-list">
// 			<ul>
// 				<li>Don't modify state directly. Use  setState</li>
// 				<li>State updates may be asynchronous</li>
// 				<li>State updates are merged</li>
// 			</ul>
// 		</div>
// 		);
// }
