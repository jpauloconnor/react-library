import React from 'react';

//Functional Component Example

const FunctionalComponent = function(){
	return(
		<div>
			<h1> Functional Component</h1> 
				<pre>
					<code>{`
					import React from "react";
					const Hello = function(){
						return <h1>Hello React</h1>
					}
					export default Hello;

					`}</code>
				</pre>
			</div>
	);
};

export default FunctionalComponent;
