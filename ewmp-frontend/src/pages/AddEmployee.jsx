import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        designation: "",
        salary: "",
        role: "EMPLOYEE",
        departmentId: 1
    });

    const handleSubmit = async () => {

        try {

            await API.post("/employees", employee);

            alert("Employee Added Successfully");

            navigate("/employees");

        } catch (error) {

            console.error(error);

            alert("Failed to Add Employee");
        }
    };

    return (
        <div>

            <h1>Add Employee</h1>

            <input
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
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        password: e.target.value
                    })
                }
            />

            <br /><br />

            <input
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
                placeholder="Salary"
                onChange={(e) =>
                    setEmployee({
                        ...employee,
                        salary: Number(e.target.value)
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
                <option value="EMPLOYEE">EMPLOYEE</option>
                <option value="ADMIN">ADMIN</option>
            </select>

            <br /><br />

            <button onClick={handleSubmit}>
                Add Employee
            </button>

        </div>
    );
}

export default AddEmployee;