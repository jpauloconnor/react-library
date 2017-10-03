import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    var date= this.getTimeString();
    {/*console.log("Date",date);*/}
    this.state= {
      time: date
    }
  }
  getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString();
        {/*console.log("Date in getTimeString:",date);*/}
    return date;
  }
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function(){
      var date = _this.getTimeString();
      {/*console.log("Date in componentDidMount:",date);*/}

      _this.setState({
        time: date
      })
    },1000)
  }
  componentWillUnmount() {
      clearInterval(this.timer);
      {/*console.log("componentWillUnmount:", this.timer);*/}

  }
  render() {
    function next() { {/* function to go to next page, called on button click below*/}
      window.location.assign('/comment');
    }
    {/*console.log("Render")*/}
    return(
      <div className="main">
        <div className="mainDiv">
          <h1 className="section-title">React Clock</h1> 

        
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

             <p>{this.state.time}</p>

            <p>Now, we'll take a look at a comment form.</p>
            <button id="butn" className="button" onClick={next}>Next</button>
          </div>
        </div>

      
     
    );
  }
}
