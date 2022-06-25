import {createStore, compose} from 'redux';
import {combineReducers} from "@reduxjs/toolkit";
import heroes from "../reducers/heroes";
import filters from "../reducers/filters";

export const reducer = combineReducers({
    heroes,
    filters
})

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);

    // сохранили огир диспатч,кот принимал в себя только объект
    const oldDispatch = store.dispatch;
    // взяли этот ориг диспатч и перезаписали его, поместив новую ф-цию
    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return oldDispatch({
                type: action
            })
        }
        return oldDispatch(action)
    }
    // после подмены диспатча нужно обязательно вернуть стор
    return store;
}

const store = createStore(
    reducer,
    compose(
        enhancer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;

