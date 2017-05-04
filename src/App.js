import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './components/video/video';
import HelloWorld from './components/Demo_01';
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
        <HelloWorld />
      
      </div>
    );
  }
}

export default App;
