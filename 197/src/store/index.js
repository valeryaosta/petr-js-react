import {createStore, compose} from 'redux';
import {applyMiddleware, combineReducers} from "@reduxjs/toolkit";
import heroes from "../reducers/heroes";
import filters from "../reducers/filters";

export const reducer = combineReducers({
    heroes,
    filters
})

// next - dispatch, вместо next будет вызываться след ф-ция мз миддлевара
const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = createStore(
    reducer,
    compose(
        applyMiddleware(stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

