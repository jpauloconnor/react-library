import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/02_header';
import Footer from './components/07_footer';
import Routes from './Routes.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { routes } from './constants/routes';

const App = () => (
  <div>
    <Header />
    <Router>
      <Routes />
    </Router>
    <Footer />
  </div>
)

export default App;
