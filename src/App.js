import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './components/video/video';
import HelloWorld from './components/Demo_0.01';
import FunctionalComponent from './components/Demo_0.02';
import ReusableButton from './components/Demo_0.03';
import IncrementButtonPartOne from './components/Demo_0.04';
import IncrementButtonPartTwo from './components/Demo_0.05';
import Title from './components/title';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h1>First Increment Button no state change</h1>
          <p>This button simply sets the state, but there is no change.</p>
          <IncrementButtonPartOne />
        </div>
        <div>
          <h1>Second Increment Button</h1>
          <p>This button will have a state change.</p>
          <IncrementButtonPartTwo />
        </div>
        <br />
      </div>
    );
  }
}

export default App;
