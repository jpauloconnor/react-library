import React from 'react';
import Codepen from 'react-codepen';
//Functional Component Example

const FunctionalComponent = function(){
	function next() {
			window.location.assign('/fatarrow');
		}
	return(
		<div className="main">
			<div className="mainDiv">
				<h1 className="section-title">Functional Component</h1>

				

				<hr className="key-points" />

				<dl className="learning-list">
					<dt className="learning-point-item-name">Presentational </dt>
				    <dd className="learning-point-item-text">Often used for simply rendering a small chunk of code to the dom.</dd>
				    <dt className="learning-point-item-name">No 'this' keyword </dt>
				    <dd className="learning-point-item-text">Unlike class components, functional ones don't use 'this'</dd>
				    <dt className="learning-point-item-name">No state</dt>
				    <dd className="learning-point-item-text">These are dumb components for UI. Don't worry about changing state with these.</dd>
				</dl>

				<hr className="explanation" />

				<p>lorem ipsum</p>

				<hr className="codepen" />
				<Codepen user="KayleaBritton" hash="oGGgqX" />

				<p>Next, let's talk about the fat arrow for a minute.</p>
				<button id="butn3" className="button" onClick={next}>Next</button>

			</div>
		</div>
	);
};

export default FunctionalComponent;

