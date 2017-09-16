//Note that you have to import React...
import React from 'react';

//const is an ES6 thing of course...
//html below is really JSX
//Webpack and Babel will transpile the JSX. 
//Browser doesn't interpret it.
//Variable will never change

const Props = function(props){
	console.log(props);
	return(
		<button className="btn btn-primary"> {props.label}</button>
	);
};

export default Props;