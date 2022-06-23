import './App.css';
import {createStore} from "redux";

function App() {

    const initState = {
        value: 0
    }
    const reducer = (state = initState, action) => {
        switch (action.type) {
            case 'INC' : {
                return {
                    ...state,
                    value: state.value + 1
                }
            }
            case 'DEC' : {
                return {
                    ...state,
                    value: state.value - 1
                }
            }
            case 'RND' : {
                return {
                    ...state,
                    value: state.value + action.payload
                }
            }

            default:
                return state
        }
    }

    const store = createStore(reducer)

    const inc = () => ({type: 'INC'})
    const dec = () => ({type: 'DEC'})
    const rnd = (value) => ({type: 'RND', payload: value})

    const update = () => {
        // у элемента меняем текстовый контент, то значение внутри
        document.getElementById('counter').textContent = store.getState().value
    }

    store.subscribe(update)

    document.getElementById('inc').addEventListener('click', () => {
        store.dispatch(inc())
    })

    document.getElementById('dec').addEventListener('click', () => {
        store.dispatch(dec())
    })

    document.getElementById('rnd').addEventListener('click', () => {
        let value = Math.floor(Math.random() * 10);
        store.dispatch((rnd(value)))
    })

    return (
        <div>
        </div>
    );
}

export default App;
