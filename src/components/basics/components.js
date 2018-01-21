import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';

export default class Components extends Component {
	render(){
		return (
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">Components</h1> 

					<hr className="basic-rundown" />
				
					<p>Components are individual pieces of the UI that can be altered independent of one another.</p>
					<p>There are two types of Components that we'll look at, Functional and Class. 
					We'll talk about each of these next.</p>

					<hr className="key-points" />

					<dl className="learning-list">
						<dt className="learning-point-item-name">Component </dt>
					    <dd className="learning-point-item-text">an independent, reusable piece of the user interface.</dd>
					    <dt className="learning-point-item-name">Class Component</dt>
					    <dd className="learning-point-item-text">ES6 way to define a component.</dd>
					    <dt className="learning-point-item-name">Functional Component </dt>
					    <dd className="learning-point-item-text">a component that is itself a function.</dd>
					    
					</dl>
					<hr className="explanation" />

					<p>Looking at the code snippet below, we can see two lines being rendered on the page.</p>
					<p>If you look at the color coding or the Babel tab, you can see that these two lines are actually two different
					components(One and Two) that are called inside of another component(App). You can change 
					either component One or Two without having to change the other.</p>
					<p>You can also see in the code that these two components don't look exactly the same. That's 
					because one is a functional component and the other is a class component.</p>
					<p>Each component has a block of code that it returns when it is called. As I already said, 
					these two components are called within the App component and that component is being called at the 
					 bottom of the Babel page and attached to the id "root".</p>
					<p>The id "root" is attached to the div on the HTML tab. The HTML and last Babel lines of code 
					are what actually show the component on the page.</p>

					<hr className="codepen" />
					<Codepen height="350" user="KayleaBritton" hash="borJMa" />
				</div>
			</div>
		);
	}
}