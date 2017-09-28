import React from 'react';

//landing page

const Home = function(){
	return(
		<div className="home main">
			<div className="homeDiv">
				<h1>Welcome to a React Fundamentals App</h1> 

				<p>This is a React Demo about React and <strong><i>built with React.</i></strong></p>
				<p>Check out the repo: <a href="https://github.com/jpauloconnor/react-library" target="blank">here</a></p>
			</div>
			<div className="homeDiv">
				<h3>The basic rundown</h3>

				<p>React is a declarative, component-based JavaScript library for building user interfaces</p>
				<p>That means that you can use Components to describe your desired outcome for specific areas on the webpage without having to specify how to get to that outcome</p>
			</div>
			<div className="homeDiv">
				<h3>Term to remember...</h3>

				<p><span>Component:</span> an independent, reusable piece of of the user interface</p>
				<p>For Example, the below picture shows an app where the navigation bar, video, and sign in are each their own component and are independent of each other.</p>
				<div className="example">
				</div> 
			</div>
			
		</div>
	);
};

export default Home;

