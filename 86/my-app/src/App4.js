import React, {useCallback, useContext, useState} from 'react';
import './App.css';
import dataContext from "./context";
import Form from "./Form";


const {Provider} = dataContext

function App() {

    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({...data, mail: "test@example.com"})
    }

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button
                onClick={() => setData({
                    mail: "name@example.com",
                    text: 'another text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
