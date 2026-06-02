import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Attendance() {

    const navigate = useNavigate();

    const [attendanceList, setAttendanceList] = useState([]);

    useEffect(() => {
        fetchAttendance();
    }, []);

    const fetchAttendance = async () => {

        try {

            const response =
                await API.get("/attendance");

            setAttendanceList(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load attendance");
        }
    };

    return (
        <div>

            <h1>Attendance Management</h1>

            <button
                onClick={() =>
                    navigate("/add-attendance")
                }
            >
                Mark Attendance
            </button>

            <br /><br />

            <table border="1">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                    </tr>

                </thead>

                <tbody>

                    {attendanceList.map((attendance) => (

                        <tr key={attendance.attendanceId}>

                            <td>
                                {attendance.attendanceId}
                            </td>

                            <td>
                                {attendance.attendanceDate}
                            </td>

                            <td>
                                {attendance.status}
                            </td>

                            <td>
                                {attendance.employee?.employeeId}
                            </td>

                            <td>
                                {attendance.employee?.name}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Attendance;