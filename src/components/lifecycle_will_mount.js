import React from 'react';
import { Component } from 'react';


export default class WillMount extends Component {
	constructor(){
		super();
		this.state = {val: 0}
		this.update = this.update.bind(this)
	}

	update(){
		this.setState({val: this.state.val + 1})
	}

	componentWillMount(){
		console.log("Component Will Mount");
	}

	render(){
    function next() { {/* function to go to next page, called on button click below*/}
      window.location.assign('/video');
    }
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">componentWillMount</h1>

				
					<hr className="key-points" />

					<p>lorem ipsum.</p>
					<ul>
						<li>lorem ipsum</li>
						<li>lorem ipsum</li>
					</ul>

					<hr className="explanation" />

					<p>lorem ipsum.</p>


					<hr className="codepen" /> {/*change to something else, like example or project*/}
					{/* <Codepen height="350" user="KayleaBritton" hash="" /> -- is this needed? --*/}

					<button onClick={this.update} className="button">{this.state.val}</button>

					<p>Now, we'll look at some other examples of React.</p>
					<button id="butn" className="button" onClick={next}>Next</button>
				</div>

			</div>
		);
	}
}
