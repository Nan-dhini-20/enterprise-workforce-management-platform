import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function UpdateEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        designation: "",
        salary: "",
        role: "EMPLOYEE",
        departmentId: 1
    });

    useEffect(() => {

        fetchEmployee();

    }, []);

    const fetchEmployee = async () => {

        try {

            const response =
                await API.get(`/employees/${id}`);

            setEmployee({
                name: response.data.name,
                email: response.data.email,
                phoneNumber: response.data.phoneNumber,
                designation: response.data.designation,
                salary: response.data.salary,
                role: response.data.role,
                departmentId: response.data.departmentId
            });

        } catch (error) {

            console.error(error);

            alert("Failed to load employee");
        }
    };

    const handleUpdate = async () => {

        try {

            await API.put(
                `/employees/${id}`,
                employee
            );

            alert(
                "Employee Updated Successfully"
            );

            navigate("/employees");

        } catch (error) {

            console.error(error);

            alert(
                "Failed to update employee"
            );
        }
    };

    return (
        <div>

            <h1>Update Employee</h1>

            <input
                value={employee.name}
                placeholder="Name"
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        name: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                value={employee.email}
                placeholder="Email"
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        email: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                value={employee.phoneNumber}
                placeholder="Phone Number"
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        phoneNumber: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                value={employee.designation}
                placeholder="Designation"
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        designation: e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="number"
                value={employee.salary}
                placeholder="Salary"
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        salary: e.target.value
                    })
                }
            />

            <br /><br />

            <select
                value={employee.role}
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        role: e.target.value
                    })
                }
            >
                <option value="EMPLOYEE">
                    EMPLOYEE
                </option>

                <option value="ADMIN">
                    ADMIN
                </option>
            </select>

            <br /><br />

            <button
                onClick={handleUpdate}
            >
                Update Employee
            </button>

        </div>
    );
}

export default UpdateEmployee;