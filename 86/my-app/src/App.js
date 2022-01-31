import React from "react";
import './App.css';
import styled from "styled-components";
import BootstrapTest from "./BootstrapTest";

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
            <EmpItem active>
                {/*<button onClick={() => this.nextYear()}>+++</button>*/}
                <Button onClick={this.nextYear}>+++</Button>
                <Header>My name is {name}, surname - {surname}, age - {years},
                    position - {position}
                </Header>
                <a href={link}>My Profile</a>
                <form>
                    <span>Type your position</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            </EmpItem>
        )
    }
}

const DynamicGreeting = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {/* {props.children} */}
            {/* на их месте появятся все элементы или компоненты, еоторые мы передадим во внутрь DynamicGreeting */}
            {
               React.Children.map(props.children, child => {
                   return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
               })
            }
        </div>
    )
}

function App() {
    return (
        <Wrapper>
            <BootstrapTest
                left = {
                    <DynamicGreeting color='primary'>
                        <h2>This was real hard</h2>
                        <h2>Hello world!</h2>
                    </DynamicGreeting>
                }
                right = {
                    <DynamicGreeting color='primary'>
                        <h2>Right</h2>
                    </DynamicGreeting>
                }
            />
            <WhoAmI name="John" surname="Smith" link="facebook.com"/>
            <WhoAmI name="Alex" surname="Stonks" link="vk.com"/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`
const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  a {
    display: block;
    margin: 10px 0;
    color: ${props => props.active ? 'orange' : 'black'}
  }
  input {
    display: block;
    margin-top: 10px;
  }
  
`
const Header = styled.h2`
  font-size: 22px;
`
const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`