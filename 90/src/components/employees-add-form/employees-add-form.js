import React from "react";
import './employees-add-form.scss'

class EmployeesAddForm extends React.Component {

    // св-ва,кот будут у экзампляра создаются сейчас без конструктора обычным синтаксисом.
    // будто бы мы создавали обычную переменную (просто свойство класса)
    state = {
            name: '',
            salary: '',
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    static onLog = () => {
        console.log('Hey')
    // EmployeesAddForm.onLog(); на классе благодаря св-ву static  можно вызвать его метод!!!

    render() {
        const {name, salary} = this.props

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}
                    />
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;