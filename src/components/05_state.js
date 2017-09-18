import React from 'react';
import {Component} from 'react';


export default class State extends Component {
	constructor(props){
		super(props);
		this.state = {counter: 0};
	}
	render(){
		return(
			<div>
			<StateRules />
			<button>{this.state.counter}</button>
			</div>
		);
	}
}



const StateRules = () => {
	return(
		<div className="state-list">
			<ul>
				<li>Don't modify state directly. Use  setState</li>
				<li>State updates may be asynchronous</li>
				<li>State updates are merged</li>
			</ul>
		</div>
		);
}
