import React from 'react';
import { Component } from 'react';
import Child from './Child';
import { Names } from './Data'
// export const Names = [
//   {first: 'Bob', last: 'Smith'},
//   {first: 'Sam', last: 'Spade'},
//   {first: 'Carol', last: 'Alexander'},
//   {first: 'Sarah', last: 'Jones'}
// ]


export default class Parent extends Component {

  constructor(props) {
		super(props)
    this.state = { names: Names};
    console.log("State:", this.state.names);
	}
  
    render() {
      const names = this.state.names.map((name, i) => {
        console.log(name);
        console.log("i:", i)
        console.log("Key:", name.key);
        return (
          <Child key={i} first={name.first} last={name.last}
          />
        );
      });

      console.log("Name props for 0 index:", names[0].props);
      console.log("Names props:", this.props);

     return (

      <div className="person-list">
         {names}
      </div>
     );
    }
  };
  