import React, { useState, useRef, useEffect } from 'react';
import slideImage from './images';
import './style.css'



const AddUser = (props) => {
    // Ticks is just some state we update 2 times every second to force a parent rerender
    const [ticks, setTicks] = React.useState(0);
  //  setTimeout(() => setTicks(ticks + 1), 500);
    // The ref allow us to pass down the updated tick without changing the prop (and forcing a rerender)
    const tickRef = React.useRef();
    tickRef.current = ticks;

    // This is the prop children are interested in
    const [clicks, setClicks] = React.useState(0);

    const handleClicks= () => {
        if(clicks<7){
            setClicks(clicks + 1)
        }
    }

    return (
        <div>{console.log('parent render')}
            <h2>Parent Rendered at tick {tickRef.current} with clicks {clicks}.</h2>
            <button
                onClick={() => handleClicks()}>
                Add extra click
            </button>
            <Child tickRef={tickRef} clicks={clicks} />
            <MemoChild tickRef={tickRef} clicks={clicks} />
        </div>
    );
};

const Child = ({ tickRef, clicks }) => (
    <p>Child Rendered at tick {tickRef.current} with clicks {clicks}.</p>
);

const MemoChild = React.memo(Child);
export default AddUser