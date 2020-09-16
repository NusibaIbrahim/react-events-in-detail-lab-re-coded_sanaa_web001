// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button 
                onClick={this.handleClick}>
            </button>
        )
    }
<<<<<<< HEAD
}
=======
>>>>>>> d889d08178b039a3382da87a8fd75863ac0c9af1
