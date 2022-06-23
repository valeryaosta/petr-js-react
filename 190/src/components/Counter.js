import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dec, inc, rnd} from "../actions";


const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const decrease = () => {
        dispatch(dec())
    }
    const increase = () => {
        dispatch(inc())
    }
    const random = () => {
        dispatch(rnd())
    }

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={decrease} className="btn btn-primary">DEC</button>
            <button onClick={increase} className="btn btn-primary">INC</button>
            <button onClick={random} className="btn btn-primary">RND</button>
        </div>
    );
};

export default Counter