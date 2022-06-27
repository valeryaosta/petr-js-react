import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => {
            state.heroesLoadingStatus = 'loading'
        },
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle'
            state.filters = action.payload

        },
        filtersFetchingError: state => {
            state.filtersLoadingStatus = 'error'
        },
        filterChanged: (state, action) => {
            state.activeFilter = action.payload
        }
    }
})

const {actions, reducer} = filtersSlice
export default reducer
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filterChanged
} = actions