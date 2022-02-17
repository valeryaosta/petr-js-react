import React, {useContext} from "react";
import dataContext from "./context";

const InputComponent = () => {
    const context = useContext(dataContext)

    return (
        <input value={context.mail}
               type="email"
               className='form-control'
               placeholder="name@example.com"
               onFocus={context.forceChangeMail}
        />
    )
}

export default InputComponent

/*class InputComponent extends React.Component {
    static contextType = dataContext

    render() {
        return (
            // <Consumer>
            //     {
            //         value => {
            //             return (
            //                 <input value={value.mail} type="email"
            //                        className='form-control'
            //                        id="exampleFormControlInput1"
            //                        placeholder="name@example.com"
            //                 />
            //             )
            //         }
            //     }
            //
            //
            // </Consumer>

            <input value={this.context.mail}
                   type="email"
                   className='form-control'
                   placeholder="name@example.com"
            />
        )
    }
}*/