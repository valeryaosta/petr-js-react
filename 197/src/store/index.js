import {configureStore} from "@reduxjs/toolkit";
import heroes from "../components/heroesList/heroesSlice"
import filters from "../components/heroesFilters/filtersSlice"

// next - dispatch, вместо next будет вызываться след ф-ция мз миддлевара
const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;

