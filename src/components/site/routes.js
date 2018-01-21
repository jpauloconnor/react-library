import React from 'react';

//Site Components
import Home from './home';

//Basics
import Components from '../basics/components';
import FunctionalComponent from '../basics/functional_component';
import FatArrow from '../basics/fat_arrow';
import ClassComponent from '../basics/class_component';
import JSXRules from '../basics/jsx';
import Props from '../basics/props_advanced';

//Class Components
import SetState from '../class_components/setState';
import Constructor from '../class_components/constructor';
import State from '../class_components/state';

//Lifecycle Methods
import LifeCycle from '../lifecycle/lifecycle';
import WillMount from '../lifecycle/lifecycle_will_mount'
import Clock from '../lifecycle/lifecycle_will_mount_example'

//Apps
import ToDoApp from '../apps/todo'
import Timer from '../apps/timer';
import Video from '../apps/video/video';
import Comment from '../apps/comment';
import FriendForm from '../apps/axios_post_request';


export const routes = [
  { path: '/' || '/home',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Home />
  },
  { path: '/components',
    sidebar: () => <div>Components</div>,
    main: () => <Components />

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
    main: () => <Props />
  },
    { path: '/state',
    sidebar: () => <div>State</div>,
    main: () => <State />
  },
    { path: '/setState',
    sidebar: () => <div>setState</div>,
    main: () => <SetState />
  },
    { path: '/constructor',
    sidebar: () => <div>Constructor</div>,
    main: () => <Constructor />
  },
   { path: '/lifecycle',
    sidebar: () => <div>Life Cycle</div>,
    main: () => <LifeCycle />
  },
  { path: '/video',
    sidebar: () => <div>Video</div>,
    main: () => <Video />
  },
   { path: '/willmount',
    sidebar: () => <div>willMount</div>,
    main: () => <WillMount />
  },
  { path: '/willmountadv',
    sidebar: () => <div>Will Mount Example</div>,
    main: () => <Clock />
  },
  { path: '/todo',
    sidebar: () => <div>To Do</div>,
    main: () => <ToDoApp />
  },
  { path: '/timer',
    sidebar: () => <div>Timer</div>,
    main: () => <Timer />
  },
  { path: '/comment',
    sidebar: () => <div>Comment</div>,
    main: () => <Comment />
  }, 
   { path: '/friendform',
    sidebar: () => <div>HTTP Requests</div>,
    main: () => <FriendForm />
  }, 
]

