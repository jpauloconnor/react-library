import React from 'react';
import {Component} from 'react';


export default class State extends Component {
	constructor(props){
		super(props);
		this.state = {counter: 0};
	}
	render(){
		return(
			<button>{this.state.counter}</button>
		);
	}
}
