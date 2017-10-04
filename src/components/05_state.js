import React from 'react';
import {Component} from 'react';
import Codepen from 'react-codepen';


export default class State extends Component {
	render(){
    function next() { {/* function to go to next page, called on button click below*/}
      window.location.assign('/setstate');
    }
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">State</h1> 

					<hr className="basic-rundown" />
				
					<p>State is data that changes over time.</p>
					<p>It can exist locally within a Class Component but not all components have state.</p>

					<hr className="key-points" />

					<dl className="learning-list">
						<dt className="learning-point-item-name">Initial State</dt>
					    <dd className="learning-point-item-text">State has an initial value, usually an object with various keys.</dd>
					    <dt className="learning-point-item-name">Changing State</dt>
					    <dd className="learning-point-item-text">Events happen that change the state.</dd>
					    <dt className="learning-point-item-name">Unlike props</dt>
					    <dd className="learning-point-item-text">State is not read-only and can be changed from within components.</dd>
					    
					</dl>


					<hr className="explanation" />

					<p>Looking at the below code we can see an example of both state and setState. For now let's just worry about state 
					and we can look into setState next.</p>
					<p>We can see on line five that we have set the initial state to have a key of name with a value of an empty string.</p>
					<p>This will allow us to use setState later to change the value of name based on the users input.</p>
					<p>Key takeways of setting the initial state are that it needs to be declared inside of the constructor and the constructor 
					should take an argument of props.</p> 


					<hr className="codepen" />

					<Codepen height="350" user="KayleaBritton" hash="RLZpaR" />

					<p>Let's see state change with setState now.</p>
					<button id="butn" className="button" onClick={next}>Next</button>
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
