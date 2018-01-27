import React from 'react';
import { Component } from 'react';

  

  // Our child component that will display our names:
  const Child = React.createClass({
    render() {
      return (
        <div>
          <p>{this.props.first} {this.props.last}</p>
        </div>
      );
    }
  });
 
  export default Child;
