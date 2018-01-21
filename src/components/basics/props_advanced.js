import React from 'react';
import { Component } from 'react';
import Codepen from 'react-codepen';

export default class Props extends Component {
  render(){
    return(
      <div className="main">
        <div className="mainDiv">
          <h1 className="section-title">Props</h1> 

          <p>Props stands for an object of data that holds key-value pairs that we want to access
          in the component through JSX expressions.</p>

          <dl className="learning-list">
            <dt className="learning-point-item-name">JSX expression</dt>
              <dd className="learning-point-item-text">Placed inside of curly braces, this renders as regular JavaScript.</dd>
            <dt className="learning-point-item-name">Read-Only</dt>
              <dd className="learning-point-item-text">Props should never be modified by the component where they are created.</dd>
          </dl>

          <hr className="explanation" />

          <p>We're back to our original code again. If you recall, we stated previously that props stands for the 
          arbitrary inputs that are passed in to the function component.</p>
          <p>In this code, the function component One takes in the argument "props" on line 1. Then the argument is 
          used on line 2 in a JSX expression as "props.name". </p>
          <p>This is setting name as a key inside of the props object and its value is set to "Kaylea" inside of the 
          App Component where functional component One is called.</p>
          <p> So props is an object with a key of "name" and a value of "Kaylea" that renders the value where props.name is.</p>

          <hr className="codepen" />
          <Codepen height="350" user="KayleaBritton" hash="borJMa" />
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

