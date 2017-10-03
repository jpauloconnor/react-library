//Source: https://facebook.github.io/react/
import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    console.log(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
        console.log(this.interval);

  }

  render() {
    function next() { {/* function to go to next page, called on button click below*/}
      window.location.assign('/willmountadv');
    }
    return (
      <div className="main">
        <div className="mainDiv">
          <h1 className="section-title">React Timer</h1> 

        
          <hr className="key-points" />

          <p>lorem ipsum.</p>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>

          <hr className="explanation" />

          <p>lorem ipsum.</p>


          <hr className="codepen" /> {/*change to something else, like example or project*/}
          {/* <Codepen height="350" user="KayleaBritton" hash="" /> -- is this needed? --*/}

          <div>Seconds Elapsed: {this.state.secondsElapsed}</div>

          <p>Now, we'll take a look at a React Clock.</p>
          <button id="butn" className="button" onClick={next}>Next</button>
        </div>
      </div>
      
    );
  }
}
