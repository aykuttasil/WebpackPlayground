import React, { Component } from 'react';
import aykut from 'images/aykut.png';

const HelloReact = () => {
    return (
        <div className="container">
            <h3> Hello from my React Component ...</h3>
            <img src={aykut} />
        </div>
    )
}

export default HelloReact;