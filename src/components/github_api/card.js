import React from 'react';
import { Component } from 'react';

//CSS File is ok for styling....
//React Native....
//style is a React property....pass it a JS object
//Looks like inline CSS
//It is JS

const Card = (props) => {
    return(
        <div>
            <img src="http://placehold.it/75" />
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                    Name here...
                </div>
                <div>
                    Company here....
                </div>
            </div>
        </div>
    )
}

export default Card;
