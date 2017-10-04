import React from 'react';
import { Component } from 'react';
//Todo: Fixed and better footer...

export default class Footer extends Component {
    render() {
        return (
            <footer className="foot">
            	<div className="main">
                	<p>For more information, see the <a href="https://reactjs.org/" target="_blank">React Documentation</a>  
                	 provided by <a href="https://www.facebook.com/" target="_blank">Facebook</a>.</p>
                </div>
            </footer>
        );
    }
}