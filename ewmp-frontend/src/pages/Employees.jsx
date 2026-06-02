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

    const deleteEmployee = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this employee?"
            );

        if (!confirmDelete) {
            return;
        }

        try {

            await API.delete(
                `/employees/${id}`
            );

            alert(
                "Employee Deleted Successfully"
            );

            fetchEmployees();

        } catch (error) {

            console.error(error);

            alert(
                "Failed to Delete Employee"
            );
        }
    };

    return (
        <div>

            <h1>Employees</h1>

            <button
                onClick={() =>
                    navigate("/add-employee")
                }
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
                        <th>Actions</th>

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

                            <td>

                                <button
                                    onClick={() =>
                                        navigate(
                                            `/update-employee/${employee.employeeId}`
                                        )
                                    }
                                >
                                    Edit
                                </button>

                                {" "}

                                <button
                                    onClick={() =>
                                        deleteEmployee(
                                            employee.employeeId
                                        )
                                    }
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Employees;