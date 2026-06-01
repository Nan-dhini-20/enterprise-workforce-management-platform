import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Employees() {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        fetchEmployees();

    }, []);

    const fetchEmployees = async () => {

        try {

            const response =
                await API.get("/employees");

            setEmployees(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load employees");
        }
    };

    return (
        <div>

            <h1>Employees</h1>

            <button
                onClick={() =>
                    navigate("/add-employee")}
            >
                Add Employee
            </button>

            <br /><br />

            <table border="1">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Role</th>
                        <th>Department</th>
                    </tr>

                </thead>

                <tbody>

                    {employees.map(employee => (

                        <tr key={employee.employeeId}>

                            <td>{employee.employeeId}</td>

                            <td>{employee.name}</td>

                            <td>{employee.email}</td>

                            <td>{employee.designation}</td>

                            <td>{employee.salary}</td>

                            <td>{employee.role}</td>

                            <td>{employee.departmentName}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Employees;