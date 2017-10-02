import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';

//landing page

export default class Components extends Component {
	render(){
		return (
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Components</h1> 

				
					<hr className="key-points" />

					<p>As we saw on the last page, components are individual pieces of the UI 
					that can be altered independent of one another.</p>

					<p>There are two types of Components that we'll look at, Functional and Class. 
					We'll talk about each of these next.</p>
					

					<hr className="explanation" />

					<p>Looking at the code snippet below, we can see two lines being rendered on the page.</p>
					<p>If you look at the Babel tab you can see that these two lines are actually two different
					components. You can change one without having to change the other. </p>
					<p>You can also see that these two components don't look exactly the same. That's because one
					is functional and the other is class.</p>

					<hr className="codepen" />
					<Codepen user="KayleaBritton" hash="borJMa" />

					<p>We're going to get a closer look at the two types of components. Let's go to functional 
					components first.</p>
					<button id="butn" className="button">Next</button>
				</div>
			</div>
		);
	}
}