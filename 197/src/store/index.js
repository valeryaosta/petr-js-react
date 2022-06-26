import {configureStore} from "@reduxjs/toolkit";
import heroes from "../reducers/heroes";
import filters from "../reducers/filters";

// next - dispatch, вместо next будет вызываться след ф-ция мз миддлевара
const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

// const store = createStore(
//     reducer,
//     compose(
//         applyMiddleware(thunk, stringMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;

