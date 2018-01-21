import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    var date= this.getTimeString();
      console.log("Date",date);
    this.state= {
      time: date
    }
  }
  getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString();
        console.log("Date in getTimeString:",date);
    return date;
  }
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function(){
      var date = _this.getTimeString();
      console.log("Date in componentDidMount:",date);

      _this.setState({
        time: date
      })
    },1000)
  }
  componentWillUnmount() {
      clearInterval(this.timer);
      console.log("componentWillUnmount:", this.timer);

  }
  render() {
    console.log("Render");
    return(
        <div className="mainDiv">
          <h1 className="section-title">React Clock</h1> 
             <p>{this.state.time}</p>
          </div>
    );
  }
}
