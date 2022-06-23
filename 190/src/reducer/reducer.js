
const initState = {
    counter: 0
}
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC' : {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case 'DEC' : {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case 'RND' : {
            return {
                ...state,
                counter: state.counter * action.payload
            }
        }

        default:
            return state
    }
}

