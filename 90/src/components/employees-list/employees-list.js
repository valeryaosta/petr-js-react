import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css"

const EmployeesList = ({data}) => {
    return (
        <ul className="app-list list-group">
            {data.map((item) => {
                const {id, ...itemProps} = item
                // return <EmployeesListItem key={item.id} name={item.name} salary={item.salary} increase={item.increase}/>
                return <EmployeesListItem key={id} {...itemProps}/>
            })}
        </ul>
    )
}
export default EmployeesList;