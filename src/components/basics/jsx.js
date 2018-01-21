import React from 'react';
import { Component } from 'react';

export default class JSXRules extends Component {
	render(){
		return(
			<div className="main">
				<div className="mainDiv">
					<h1 className="section-title">JSX</h1> 
					<dl>
						<dt className="jsx-item-name">JSX looks like HTML</dt>
					    <dd className="jsx-item-text">It's not. It's actually closer to JavaScript.</dd>
					    <dt className="jsx-item-name">"React elements"</dt>
					    <dd className="jsx-item-text">These are used to construct and update the DOM, what you see on the screen.</dd>
					    <dt className="jsx-item-name">Components have one elements</dt>
					    <dd className="jsx-item-text">You must wrap everything in one element( div, h1, p, etc.)</dd>
						<dt className="jsx-item-text">className</dt>
					    <dd className="jsx-item-text">instead of class, use className. class is already a keyword in React</dd>
					</dl>
				</div>
			</div>
		);
	}
}