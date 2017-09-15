import React from 'react';
import FunctionalComponent from '../components/01_functional_component';
import FatArrow from '../components/02_fat_arrow';
import Header from '../components/02_header';
import ClassComponent from '../components/03_class_component';
import JSXRules from '../components/04_jsx';
import Props from '../components/04_props';
import State from '../components/05_state';
import SetState from '../components/06_setState';
import Video from '../components/video/video';
import Footer from '../components/07_footer'

export const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>Home</h2>
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
    main: () => <Props label="Button" />
  },
    { path: '/state',
    sidebar: () => <div>State</div>,
    main: () => <State />
  },
    { path: '/setState',
    sidebar: () => <div>setState</div>,
    main: () => <SetState />
  },
  { path: '/video',
    sidebar: () => <div>Video</div>,
    main: () => <Video />
  },
]


// class Routes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         orderColumns: ORDER_COLUMNS
//     };
//   }
//   ...

// }

// export default Routes;