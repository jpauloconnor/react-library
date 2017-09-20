import React from 'react';

//Functional Component Example

const FunctionalComponent = function(){
	return(
		<div>
			<h1 className="section-title"> Functional Component</h1> 

			<h2 className="section-sub-title"> Key Points </h2> 
			<dl className="learning-list">
				<dt className="learning-point-item-name">Presentational </dt>
			    <dd className="learning-point-item-text">Often used for simply rendering a small chunk of jsx to the dom.</dd>
			    <dt className="learning-point-item-name">No 'this' keyword </dt>
			    <dd className="learning-point-item-text">Unlike class components, functional ones don't use 'this'</dd>
			    <dt className="learning-point-item-name">No state</dt>
			    <dd className="learning-point-item-text">These are dumb components for UI. Don't worry about changing state with these.</dd>
			</dl>

			<h2 className="section-sub-title"> Code Snippet </h2> 

			<div className="container" id="fat-arrow">
				<pre><code className="javascript">{`
						import React from 'react';

						//Functional Component with a fat arrow
						const FatArrow = () => {
							return(
								<nav className="navbar navbar-inverse">
									<h1>Fat Arrow</h1>
								</nav>
							);
						}

						export default FatArrow;
				`}
				</code></pre>
			</div>
		</div>
	);
};

export default FunctionalComponent;


// <div class="highlight"><pre><code class="language-js" data-lang="js"><span class="kd">function</span> <span class="nx">formatName</span><span class="p">(</span><span class="nx">user</span><span class="p">)</span> <span class="p">{</span>
//   <span class="k">return</span> <span class="nx">user</span><span class="p">.</span><span class="nx">firstName</span> <span class="o">+</span> <span class="s1">' '</span> <span class="o">+</span> <span class="nx">user</span><span class="p">.</span><span class="nx">lastName</span><span class="p">;</span>
// <span class="p">}</span>

// <span class="kr">const</span> <span class="nx">user</span> <span class="o">=</span> <span class="p">{</span>
//   <span class="nx">firstName</span><span class="o">:</span> <span class="s1">'Harper'</span><span class="p">,</span>
//   <span class="nx">lastName</span><span class="o">:</span> <span class="s1">'Perez'</span>
// <span class="p">};</span>

// <span class="kr">const</span> <span class="nx">element</span> <span class="o">=</span> <span class="p">(</span>
//   <span class="o">&lt;</span><span class="nx">h1</span><span class="o">&gt;</span>
// <span class="hll">    <span class="nx">Hello</span><span class="p">,</span> <span class="p">{</span><span class="nx">formatName</span><span class="p">(</span><span class="nx">user</span><span class="p">)}</span><span class="o">!</span>
// </span>  <span class="o">&lt;</span><span class="err">/h1&gt;</span>
// <span class="p">);</span>

// <span class="nx">ReactDOM</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span>
//   <span class="nx">element</span><span class="p">,</span>
//   <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">'root'</span><span class="p">)</span>
// <span class="p">);</span>
// </code></pre></div>

// const Hello = <span class="kd">function()</span>{
// 						return <h1>Hello React</h1>
// 					}
// 					export default Hello;

// 					`}