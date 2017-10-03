import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';

//landing page

export default class Components extends Component {
	render(){
		function next() {
			window.location.assign('/functionalcomponent');
		}
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
					components (One and Two)that are called inside of another component (App). You can change either 
					component One or Two without having to change the other.</p>
					<p>You can also see in the code that these two components don't look exactly the same. That's 
					because one is a functional component and the other is a class component.</p>
					<p>Each component has a block of code that it returns when it is called. As I already said, these
					 two components are called within the App component and that component is being called at the bottom 
					of the Babel page and attached to the id "root".</p>
					<p>The id "root" is attached to the div on the HTML tab. This line of code is what actually renders
					the component to the page.</p>

					<hr className="codepen" />
					<Codepen height="350" user="KayleaBritton" hash="borJMa" />

					<p>We're going to get a closer look at the two types of components. Let's go to functional 
					components first.</p>
					<button id="butn2" className="button" onClick={next}>Next</button>
				</div>
			</div>
		);
	}
}