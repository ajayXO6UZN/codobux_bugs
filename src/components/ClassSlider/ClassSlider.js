import React from 'react';
import ReactDOM from 'react-dom';

class ClassSlider extends React.Component {

    render() {

        return (
            <div>
                <Child name="sachin"></Child>
            </div>
        )
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "kapil"
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props.name , state.name )
        if (props.name !== state.name) {
            //Change in props
            return {
                name: props.name
            };
        }
        return null; // No change to state
    }
    /* if props changes then after getDerivedStateFromProps
    method, state will look something like

    {
        name: props.name
    }
    */
    render() {
        return (
            <div> My name is {this.state.name}</div>
        )
    }
}

export default ClassSlider;
