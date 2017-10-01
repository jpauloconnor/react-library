import React, { Component } from 'react';


export default class Props extends Component {
  render(){
    return(
      <div className="main">
        <div className="mainDiv">
          <h1 className="section-title">Props</h1> 

        
          <hr className="key-points" />

          <p>lorem ipsum.</p>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>

          <hr className="explanation" />

          <p>lorem ipsum.</p>


          <hr className="codepen" />

          <p>Now, let's look at State.</p>
          <button id="butn" className="button">Next</button>
        </div>
      </div>
    );
  }
}




//const is an ES6 thing of course...
//html below is really JSX
//Webpack and Babel will transpile the JSX. 
//Browser doesn't interpret it.
//Variable will never change

// const Props = function(props){
// 	console.log(props);
// 	return(
// 		<button className="btn btn-primary"> {props.label}</button>
// 	);
// };


// const Names = [
//   {first: 'AJ', last: 'Hephner'},
//   {first: 'Mady', last: 'Ward'},
//   {first: 'Smita', last: 'Hyde'},
//   {first: 'Romeo', last: 'Pascascio'}
// ]

// // Our child component that will display our names:
// const Child = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <p>{this.props.first} {this.props.last}</p>
//       </div>
//     );
//   }
// });


// export default class Props extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {names: Names};
// 	}

//   render() {
//     var names = this.state.names.map((name, i) => {
//       return (
//         <Child key={i} first={name.first} last={name.last} />
//       );
//     });
//    return (
//     <div>
//        {names}
//     </div>
//    );
//   }
// };

