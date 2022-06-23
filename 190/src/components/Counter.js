import React from 'react';
import {connect} from "react-redux";
// import {dec, inc, rnd} from "../actions";
// import {bindActionCreators} from "redux";
import * as actions from "../actions";


const Counter = ({counter, inc, dec, rnd}) => {

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// const mapDispatchToProps = (dispatch) => {
// // 1 вариант
//     return {
//     inc: () => dispatch(inc()),
//     dec: () => dispatch(dec()),
//     rnd: () => dispatch(rnd()),
//     }
// // 2 вариант
//     return bindActionCreators(actions, dispatch)
// }

// либо передаем во второй объект все АС
// export default connect(mapStateToProps, {inc, dec, rnd})(Counter);
export default connect(mapStateToProps, actions)(Counter);