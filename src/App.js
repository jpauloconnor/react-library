import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import FunctionalComponent from './components/01_functional_component';
import FatArrow from './components/02_fat_arrow';
import Header from './components/02_header';
import ClassComponent from './components/03_class_component';
import JSXRules from './components/04_jsx';
import Props from './components/04_props';
import State from './components/05_state';
import SetState from './components/06_setState';
import Video from './components/video/video';
import Footer from './components/07_footer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { routes } from './constants/routes';


const App = () => (
  <div>
    <Header />
    <Router>
      <div style={{ display: 'flex' }}>
        <div style={{
          padding: '10px',
          width: '20%',
          background: '#f0f0f0'
        }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/functionalcomponent">Functional Component</Link></li>
            <li><Link to="/fatarrow">Fat Arrow</Link></li>
            <li><Link to="/classcomponent">Class Component</Link></li>
            <li><Link to="/jsx">JSX</Link></li>
            <li><Link to="/props">Props</Link></li>
            <li><Link to="/state">State</Link></li>
            <li><Link to="/setstate">setState</Link></li>
            <li><Link to="/video">Video</Link></li>

          </ul>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  </div>
)

export default App
