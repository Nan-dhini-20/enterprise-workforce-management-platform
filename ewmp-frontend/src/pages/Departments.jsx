import { useEffect, useState } from "react";
import API from "../services/api";

function Departments() {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {

        try {

            const response =
                await API.get("/departments");

            setDepartments(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load departments");
        }
    };

    return (
        <div>

            <h1>Departments</h1>

            <table border="1">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Department Name</th>
                    </tr>
                </thead>

                <tbody>

                    {departments.map((department) => (

                        <tr key={department.departmentId}>

                            <td>
                                {department.departmentId}
                            </td>

                            <td>
                                {department.departmentName}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Departments;