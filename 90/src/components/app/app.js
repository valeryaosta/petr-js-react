import React from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Smith', salary: '1000', increase: false, rise: true, id: 1},
                {name: 'Alex Rase', salary: '850', increase: true, rise: false, id: 2},
                {name: 'Ann Freeze', salary: '1100', increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
                return {
                    data: data.filter(item => item.id !== id)
                }
            }
        )
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        // // получаем индекс элемента с которым будем работать
        // const index = data.findIndex(elem => elem.id === id)
        // // берем объект по индексу и делаем его копию, чтобы что-то иметь возможность поменять
        //
        // const old = data[index]
        // const newItem = {...old, increase: !old.increase}
        // const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)]
        //
        // return {
        //     data: newArr
        // }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }


    render() {
        // общее количество сотрудников в массиве
        const employees = this.state.data.length
        // кол-во сотрудников идущих на повышение
        const increased = this.state.data.filter(item => item.increase).length

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={this.state.data}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }


}

export default App;
