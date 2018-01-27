import React, {Component} from 'react';
import Codepen from 'react-codepen';

export default class PropsSimpleDemo extends Component {

    constructor(props) {
        super(props)
        this.state = { name: '' };
        console.log("State:", this.state.name);
    }

    render() {
        return(
            <div>Hello {this.props.name}</div>
        )
    }
}