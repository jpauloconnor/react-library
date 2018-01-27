import React, {Component} from 'react';
import Codepen from 'react-codepen';
import PropsSimpleDemo from './PropsSimpleDemo';

export default class PropsApp extends Component {

    render() {
        return(
            <div>
                <PropsSimpleDemo name = {"Paul"} />
                <PropsSimpleDemo name = {"Quincy"} />
                <PropsSimpleDemo name = {"Jay"} />
                <PropsSimpleDemo name = {"Aaron"} />
            </div>
        )
    }
}


