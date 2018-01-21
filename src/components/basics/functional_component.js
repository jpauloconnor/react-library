import React from 'react';
import Codepen from 'react-codepen';
//Functional Component Example

const FunctionalComponent = function(){
	return(
		<div className="main">
			<div className="mainDiv">
				<h1 className="section-title">Functional Component</h1>

				<hr className="basic-rundown" />

				<p>Functional components allow you to render information to the web page without 
				having to use or change state.</p>

				<hr className="key-points" />

				<dl className="learning-list">
					<dt className="learning-point-item-name">Presentational </dt>
				    <dd className="learning-point-item-text">Often used for simply rendering a small chunk of code to the dom.</dd>
				    <dt className="learning-point-item-name">No 'this' keyword </dt>
				    <dd className="learning-point-item-text">Unlike class components, functional ones don't use 'this'.</dd>
				    <dt className="learning-point-item-name">No state</dt>
				    <dd className="learning-point-item-text">These are dumb components for UI. Don't worry about changing state with these.</dd>
				</dl>

				<hr className="explanation" />

				<p>Below, we have a snippet of code that includes just the functional component 
				from our previous example.</p>
				<p>We have declared our functional component with the const keyword and a fat arrow. 
				Both of these are from ES6. Const is another way to say var but it prevents 
				you from reassigning the variable. Don't worry if you don't recognize the fat arrow, we'll 
				discuss that on the next page.</p>
				<p>The method being passed in is props, this is the term we 
				use for the arbitrary inputs that are passed into the function. We'll talk more 
				about props later as you don't need to understand it to see what's happening in the 
				current code.</p>
				<p>Just as we discussed before, we can see that the component contains a block of code 
				that is rendered to the page by attaching it to the root div in the HTML.</p>
				<p>The main take away here is just that we are using an ES6 function to declare the component.</p> 


				<hr className="codepen" />
				<Codepen height="350" user="KayleaBritton" hash="oGGgqX" />

			</div>
		</div>
	);
};

export default FunctionalComponent;

