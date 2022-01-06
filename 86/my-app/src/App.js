import React from "react";
import './App.css';

const Header = () => {
    return <h2>Hello World!</h2>
}
const Field = () => {
    const holder = 'Enter here'
    const styledFill = {
        width: '300px'
    }
    return <input placeholder={holder} type="text" style={styledFill}/>
}

class Field2 extends React.Component {
    render() {
        const holder = 'Enter here'
        const styledFill = {
            width: '300px'
        }
        return <input placeholder={holder}
                      type="text"
                      style={styledFill}/>
    }
}

function Btn() {
    const text = 'Log in'
    const logged = true
    return <button>{logged ? 'Enter' : text}</button>
}


function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Field2/>
            <Btn/>
        </div>
    );
}

export default App;
