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

				<p>The fat arrow is </p>
			
				<hr className="key-points" />

				<p>lorem ipsum.</p>
				

				<hr className="explanation" />

				<p>Looking at the same codepen as the last page, we are going to spotlight line 
				1 of the Babel tab.</p>
				<p>This may look different from functions you are used to seeing. </p>


				<hr className="codepen" />
				<Codepen height="350" user="KayleaBritton" hash="oGGgqX" />

				<p>Next, we'll take a look at class components.</p>
				<button id="butn4" className="button" onClick={next}>Next</button>
			</div>
		</div>
	);
}

export default FatArrow;
