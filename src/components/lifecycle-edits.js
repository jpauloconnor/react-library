import React from 'react';
import { Component } from 'react';
var classNames = require( 'classnames' );

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }


  render() {
    function next() {
      window.location.assign('/willmount');
    }
    return (
      <div className="main">       
        <div className="mainDiv">
          {/*<img className="logo" src="https://facebook.github.io/react/img/logo.svg" />*/}
          <h1 className="section-title">Lifecycle</h1> 

          <hr className="basic-rundown" />

          <p>Components have lifecycle methods that allow you to run code at particular times in the process.</p>
          <p>If you prefix your method with "will" your code will run before something happens but if you use 
          "did" the method will run after something happens.</p>
/* All of the below code is HTML and is meant to work with CSS, you need to change it to work as JSX with */

          <ul className="descriptions">
            <li className="description" ref="getInitialState">
              <h2 className="heading heading--2">getInitialState</h2>
              <p>Invoked once before the component is mounted. The return value will be used as the initial value of <code>this.state</code></p>
            </li>
            <li className="description" id="componentWillMount">
              <h2 className="heading heading--2">componentWillMount</h2>
              <p>Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call <code>setState</code> within this method, <code>render()</code> will see the updated state and will be executed only once despite the state change.</p>
            </li>
            <li className="description" id="render">
              <h2 className="heading heading--2">render</h2>
              <p>The render() method is required.</p>

              <p>When called, it should examine this.props and this.state and return a single child element. This child element can be either a virtual representation of a native DOM component (such as <code>&lt;div /&gt;</code> or <code>React.DOM.div()</code>) or another composite component that you've defined yourself.</p>

              <p>You can also return null or false to indicate that you don't want anything rendered. Behind the scenes, React renders a <code>&lt;noscript&gt;</code> tag to work with our current diffing algorithm. When returning null or false, <code>ReactDOM.findDOMNode(this)</code> will return <code>null</code>.</p>

              <p>The <code>render()</code> function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using <code>setTimeout</code>). If you need to interact with the browser, perform your work in <code>componentDidMount()</code> or the other lifecycle methods instead. Keeping <code>render()</code> pure makes server rendering more practical and makes components easier to think about.</p>
            </li>
            <li className="description" id="componentDidMount">
              <h2 className="heading heading--2">componentDidMount</h2>
              <p>Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). The <code>componentDidMount()</code> method of child components is invoked before that of parent components.</p>

              <p>If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.</p>
            </li>
            <li className="description" id="componentWillReceiveProps">
              <h2 className="heading heading--2">componentWillReceiveProps</h2>
              <p>Invoked when a component is receiving new props. This method is not called for the initial render.</p>

              <p>Use this as an opportunity to react to a prop transition before <code>render()</code> is called by updating the state using <code>this.setState()</code>. The old props can be accessed via this.props. Calling <code>this.setState()</code> within this function will not trigger an additional render.</p>
            </li>
            <li className="description" id="shouldComponentUpdate">
              <h2 className="heading heading--2">shouldComponentUpdate</h2>
              <p>Invoked before rendering when new props or state are being received. This method is not called for the initial render or when <code>forceUpdate</code> is used.</p>

              <p>Use this as an opportunity to return <code>false</code> when you're certain that the transition to the new props and state will not require a component update.</p>
            </li>
            <li className="description" id="componentWillUpdate">
              <h2 className="heading heading--2">componentWillUpdate</h2>
              <p>Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.</p>

              <p>Use this as an opportunity to perform preparation before an update occurs.</p>
            </li>
            <li className="description" id="componentDidUpdate">
              <h2 className="heading heading--2">componentDidUpdate</h2>
              <p>Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.</p>

              <p>Use this as an opportunity to operate on the DOM when the component has been updated.</p>
            </li>
            <li className="description" id="componentWillUnmount">
              <h2 className="heading heading--2">componentWillUnmount</h2>
              <p>Invoked immediately before a component is unmounted from the DOM.</p>

              <p>Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in <code>componentDidMount</code>.</p>
            </li>
            <li className="description description--placeholder">
              <h2 className="heading heading--2">React components lifecycle diagram</h2>
              <p>Click on a method to see a description.</p>
              <p>Taken from the <a href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods">React documentation page</a>, compiled by <a href="https://eduardoboucas.com">Eduardo Bouças</a>.</p>
            </li>
            <li className="description__close"><a href="#">×</a></li>
          </ul>


          <hr className="key-points" />

          

          <div className="lanes">
            <ul className="lane"><h2 className="lane__title">Mounting:</h2>
              
              <li className="lane__item"><a className="step" href="#getInitialState" onClick={this.click.bind(this)}>getInitialState</a></li>
              <li className="lane__item"><a className="step" href="#componentWillMount" onClick={this.click}>componentWillMount</a></li>  
              <li className="lane__item"><a className="step" href="#render" onClick={this.click}>render</a></li>
              <li className="lane__item"><a className="step" href="#componentDidMount" onClick={this.click}>componentDidMount</a></li>  
            </ul>

            <ul className="lane"><h2 className="lane__title">Updating:</h2>
              <li className="lane__item"><a className="step" href="#componentWillReceiveProps" onClick={this.click}>componentWillReceiveProps</a></li>
              <li className="lane__item"><a className="step" href="#shouldComponentUpdate" onClick={this.click}>shouldComponentUpdate</a></li>
              <li className="lane__item"><a className="step" href="#componentWillUpdate" onClick={this.click}>componentWillUpdate</a></li>  
              <li className="lane__item"><a className="step" href="#render" onClick={this.click}>render</a></li>
              <li className="lane__item"><a className="step" href="#componentDidUpdate" onClick={this.click}>componentDidUpdate</a></li>  
            </ul>

            <ul className="lane"><h2 className="lane__title">Unounting:</h2>
              <li className="lane__item"><a className="step" href="#componentWillUnmount" onClick={this.click}>componentWillUnmount</a></li>  
            </ul>
          </div>



          
          
          <p>Now, we'll take a closer look at willMount.</p>
          <button id="butn" className="button" onClick={next}>Next</button>


        </div>
      </div> 
    );
  }
}



