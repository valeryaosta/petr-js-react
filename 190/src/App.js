import {bindActionCreators, createStore} from "redux";
import * as actions from "./actions";
import {reducer} from "./reducer";

function App() {

    const store = createStore(reducer)

    const {dispatch, subscribe, getState} = store

    const update = () => {
        // у элемента меняем текстовый контент, то значение внутри
        document.getElementById('counter').textContent = getState().value
    }

    subscribe(update)

    // под капотом bindActionCreators работает именно так
    // const bindActionCreator = (creator, dispatch) => (...args) => {
    //     dispatch(creator(...args))
    // }

    const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

    // const incDispatch = bindActionCreators(inc, dispatch)
    // const decDispatch = bindActionCreators(dec, dispatch)
    // const rndDispatch = bindActionCreators(rnd, dispatch)

    document.getElementById('inc').addEventListener('click', inc)

    document.getElementById('dec').addEventListener('click', dec)

    document.getElementById('rnd').addEventListener('click', () => {
        let value = Math.floor(Math.random() * 10);
        rnd(value)
    })

    return (
        <div>
        </div>
    );
}

export default App;
