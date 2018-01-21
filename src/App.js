import React from 'react';
import './App.css';
import Header from './components/site/header';
import Footer from './components/site/footer';
import Routes from './Routes.js';
import { BrowserRouter as Router } from 'react-router-dom';

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
