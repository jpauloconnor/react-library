import React from 'react';
import {Component} from 'react';

export default class SetState extends Component {
	render(){
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">setState</h1> 

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>lorem ipsum</li>
						<li>lorem ipsum</li>
					</ul>

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" />

					<p>Now, we'll take a look at Constructor.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
			
		);
	}

	// constructor(props){
	// 	super(props);
	// 	this.state = {counter: 0}
	// };

	// incrementByOne = () => {
	// 	this.setState({
	// 		counter: this.state.counter + 1
	// 	})
	// };
	
	// render(){
	// 	return(
		
	// 		<button onClick={this.incrementByOne}>
	// 			{this.state.counter}
	// 		</button>			
	// 	);
	// }
}
