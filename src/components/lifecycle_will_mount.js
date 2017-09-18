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
		return(
			<div>
				<h1>componentWillMount</h1>
				<p>TODO: Add a description</p>
				<button onClick={this.update}>{this.state.val}</button>
			</div>
		);
	}
}
