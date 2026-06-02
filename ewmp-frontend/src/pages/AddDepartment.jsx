import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddDepartment() {

    const [departmentName, setDepartmentName] =
        useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {

        try {

            await API.post(
                "/departments",
                {
                    departmentName
                }
            );

            alert(
                "Department Added Successfully"
            );

            navigate("/departments");

        } catch (error) {

            console.error(error);

            alert(
                "Failed to Add Department"
            );
        }
    };

    return (
        <div>

            <h1>Add Department</h1>

            <input
                placeholder="Department Name"
                value={departmentName}
                onChange={(e) =>
                    setDepartmentName(
                        e.target.value
                    )
                }
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Add Department
            </button>

        </div>
    );
}

export default AddDepartment;