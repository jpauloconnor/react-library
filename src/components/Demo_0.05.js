import React from 'react';
import {Component} from 'react';


export default class IncrementButtonPartTwo extends Component {
	constructor(props){
		super(props);
		this.state = {counter: 0}
	};

	incrementByOne = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	};

	render(){
		return(
		
			<button onClick={this.incrementByOne}>
				{this.state.counter}
			</button>			
		);
	}
}
