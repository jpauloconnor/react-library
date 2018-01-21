import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';


export default class Constructor extends Component {
	render(){
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Constructor</h1> 

					<hr className="basic-rundown" />
				
					<p>The class constructor is the only place where the initial state can be assigned. </p>
				
					<hr className="key-points" />

					<dl className="learning-list">
						<dt className="learning-point-item-name">Props are required</dt>
					    <dd className="learning-point-item-text">Class components always need to call props with the base constructor but only need the constructor when working with state.</dd>
					    <dt className="learning-point-item-name">Super is also required</dt>
					    <dd className="learning-point-item-text">Always call super when using a constructor as this is unavailable otherwise.</dd>
					    <dt className="learning-point-item-name">Super(props)?</dt>
					    <dd className="learning-point-item-text">Include props with super if you want to access this.props in the component.</dd>
					    
					</dl>

					<hr className="explanation" />

					<p>Looking at our state/setState Codepen we can see what is happening with the constructor.</p>
					<p>We've called the constructor so that we can set the initial state and we've called it and super with props so that we 
					can access this.props.</p>
					<p>We've also included a few bindings in the constructor because we want "this" to be bound to both these functions.</p>

					<hr className="codepen" />

					<Codepen height="350" user="KayleaBritton" hash="RLZpaR" />
				</div>
			</div>
			
		);
	}
}