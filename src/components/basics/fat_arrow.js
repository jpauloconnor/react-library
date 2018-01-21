import React from 'react';
import Codepen from 'react-codepen';


//Functional Component with a fat arrow
const FatArrow = () => {
	function next() {
			window.location.assign('/classcomponent');
		}
	return(
		<div className="main">
			<div className="mainDiv">
				<h1 className="section-title">Fat Arrow</h1>

				<hr className="basic-rundown" /> 

				<p>The fat arrow is an ES6 way to write functions. </p>
			
				<hr className="key-points" />

				<dl className="learning-list">
					<dt className="learning-point-item-name">ES6, or EcmaScript 2015 </dt>
				    <dd className="learning-point-item-text">The 6th edition of EcmaScript, the official term for JavaScript.</dd>
				</dl>
				

				<hr className="explanation" />

				<p>Below we have a codepen that is very similar to the one from the last page.</p>
				<p>There are two commented out blocks of code at the top of Babel. The first shows a traditional 
				function and the second, a function expression. These are what we are used to seeing.</p>
				<p>The uncommented code may look different from what we're used to but it is the ES6 syntax that 
				we need to adopt.</p> 
				<p>Rather than typing "function One()" before your curly braces, you can declare 
				your function name like a variable and then set it equal to "() =>". The "=>" is the 
				"fat arrow".</p>
				<p>The parantheses work the same way as they normally do and allow you to pass in an argument to 
				the function. You can see below that they are not necessary with fat arrows when you only have one argument.</p>
				<p>The fat arrow is another way to say "function" and it goes behind the parantheses instead of in front.</p>
				<p>All three functions accomplish the same task.</p>


				<hr className="codepen" />
				<Codepen height="350" user="KayleaBritton" hash="XeeyBz" />

				<p>Now let's jump back into React and look at class components.</p>
				<button id="butn4" className="button" onClick={next}>Next</button>
			</div>
		</div>
	);
}

export default FatArrow;
