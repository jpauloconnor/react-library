import React from 'react';
import Home from '../components/00_home';
import FunctionalComponent from '../components/01_functional_component';
import FatArrow from '../components/02_fat_arrow';
import Header from '../components/02_header';
import ClassComponent from '../components/03_class_component';
import JSXRules from '../components/04_jsx';
import Props from '../components/04_props';
import State from '../components/05_state';
import LifeCycle from '../components/lifecycle'
import SetState from '../components/06_setState';
import ToDoApp from '../components/todo'
import Timer from '../components/timer'
import Video from '../components/video/video';
import Footer from '../components/07_footer'

export const routes = [
  { path: '/' || '/home',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2><Home /></h2>
  },
  { path: '/functionalcomponent',
    sidebar: () => <div>Functional Component</div>,
    main: () => <FunctionalComponent />
  },
  { path: '/fatarrow',
    sidebar: () => <div>Fat Arrow</div>,
    main: () => <FatArrow />
  },
  { path: '/classcomponent',
    sidebar: () => <div>Class Component</div>,
    main: () => <ClassComponent />
  },
  { path: '/jsx',
    sidebar: () => <div>JSX</div>,
    main: () => <JSXRules />
  },
  { path: '/props',
    sidebar: () => <div>Props</div>,
    main: () => <div><h1>Props</h1><Props label="Button" /><Props label="Button 2" /></div>
  },
    { path: '/state',
    sidebar: () => <div>State</div>,
    main: () => <State />
  },
    { path: '/setState',
    sidebar: () => <div>setState</div>,
    main: () => <SetState />
  },
   { path: '/lifecycle',
    sidebar: () => <div>Life Cycle</div>,
    main: () => <LifeCycle />
  },
  { path: '/video',
    sidebar: () => <div>Video</div>,
    main: () => <Video />
  },
  { path: '/todo',
    sidebar: () => <div>To Do</div>,
    main: () => <ToDoApp />
  },
  { path: '/timer',
    sidebar: () => <div>Timer</div>,
    main: () => <Timer />
  },
]

