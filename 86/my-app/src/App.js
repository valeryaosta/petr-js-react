import React from "react";
import './App.css';

class WhoAmI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
        // this.nextYear = this.nextYear.bind(this)
    }

    nextYear = () => {
        // nextYear() {
        this.setState((state) => ({
            years: state.years + 1
        }))
    }

    // лучше методы писать через стрелочные функции,чтоб не терять контекст и на байндить каждый раз
    commitInputChanges = (e, color) => {
        //узнать у объекта события на каком элементе произошло событие
        console.log(e.target.value)
        console.log(color)
        this.setState({
            position: e.target.value
        })
    }


    render() {
        const {name, surname, link} = this.props
        const {position, years} = this.state
        return (
            <div>
                {/*<button onClick={() => this.nextYear()}>+++</button>*/}
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname - {surname}, age - {years},
                    position - {position}
                </h1>
                <a href={link}>My Profile</a>
                <form>
                    <span>Type your position</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            </div>
        )
    }
}


function App() {
    return (
        <div className="App">
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>
            <WhoAmI name="Alex" surname="Stonks" link="vk.com"/>
        </div>
    );
}

export default App;
