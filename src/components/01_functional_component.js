import React from 'react';
import Codepen from 'react-codepen';
//Functional Component Example

const FunctionalComponent = function(){
	return(
		<div>
			<h1 className="section-title"> Functional Components</h1> 
			<hr className="key-points" />

			<dl className="learning-list">
				<dt className="learning-point-item-name">Presentational </dt>
			    <dd className="learning-point-item-text">Often used for simply rendering a small chunk of jsx to the dom.</dd>
			    <dt className="learning-point-item-name">No 'this' keyword </dt>
			    <dd className="learning-point-item-text">Unlike class components, functional ones don't use 'this'</dd>
			    <dt className="learning-point-item-name">No state</dt>
			    <dd className="learning-point-item-text">These are dumb components for UI. Don't worry about changing state with these.</dd>
			</dl>

			<hr className="codepen" />
			<Codepen user="jamespauloconnor" hash="wroGWJ" />

		</div>
	);
};

export default FunctionalComponent;

