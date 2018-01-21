import React from 'react';
import './App.css';

import {
  Route,
  Link
} from 'react-router-dom'

import { routes } from './components/site/routes';


const Routes = () => (

  <div style={{ display: 'flex' }}>
        <div style={{
          padding: '10px',
          width: '20%',
          background: '#f0f0f0'
        }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/components">Components</Link></li>
            <li><Link to="/functionalcomponent">Functional Component</Link></li>
            <li><Link to="/fatarrow">Fat Arrow</Link></li>
            <li><Link to="/classcomponent">Class Component</Link></li>
            <li><Link to="/jsx">JSX</Link></li>
            <li><Link to="/props">Props</Link></li>
            <li><Link to="/state">State</Link></li>
            <li><Link to="/setstate">setState</Link></li>
            <li><Link to="/constructor">Constructor</Link></li>
            <li><Link to="/lifecycle">LifeCycle</Link></li>
            <li><Link to="/willmount">willMount</Link></li>
            <li><Link to="/video">Video</Link></li>
            <li><Link to="/todo">To Do App</Link></li>
            <li><Link to="/timer">Timer</Link></li>
            <li><Link to="/willmountadv">Clock</Link></li>
            <li><Link to="/comment">Comment</Link></li>
            <li><Link to="/friendform">Friend Form</Link></li>
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
      )

export default Routes;
