import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddAttendance() {

    const navigate = useNavigate();

    const [attendance, setAttendance] = useState({
        attendanceDate: "",
        status: "PRESENT",
        employeeId: ""
    });

    const handleSubmit = async () => {

        try {

            await API.post("/attendance", {
                attendanceDate:
                    attendance.attendanceDate,

                status:
                    attendance.status,

                employee: {
                    employeeId:
                        Number(
                            attendance.employeeId
                        )
                }
            });

            alert(
                "Attendance Marked Successfully"
            );

            navigate("/attendance");

        } catch (error) {

            console.error(error);

            alert("Failed to mark attendance");
        }
    };

    return (
        <div>

            <h1>Mark Attendance</h1>

            <input
                type="date"
                onChange={(e) =>
                    setAttendance({
                        ...attendance,
                        attendanceDate:
                            e.target.value
                    })
                }
            />

            <br /><br />

            <select
                onChange={(e) =>
                    setAttendance({
                        ...attendance,
                        status:
                            e.target.value
                    })
                }
            >
                <option value="PRESENT">
                    PRESENT
                </option>

                <option value="ABSENT">
                    ABSENT
                </option>
            </select>

            <br /><br />

            <input
                type="number"
                placeholder="Employee ID"
                onChange={(e) =>
                    setAttendance({
                        ...attendance,
                        employeeId:
                            e.target.value
                    })
                }
            />

            <br /><br />

            <button onClick={handleSubmit}>
                Save Attendance
            </button>

        </div>
    );
}

export default AddAttendance;