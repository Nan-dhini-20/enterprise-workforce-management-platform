import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Dashboard() {

    const [stats, setStats] = useState({
        employees: 0,
        departments: 0,
        leaves: 0,
        attendance: 0
    });

    useEffect(() => {

        fetchStats();

    }, []);

    const fetchStats = async () => {

        try {

            const response =
                await API.get(
                    "/dashboard/stats"
                );

            setStats(
                response.data
            );

        } catch (error) {

            console.error(error);

            alert(
                "Failed to load dashboard statistics"
            );
        }
    };

    return (
        <div>

            <h1>
                Enterprise Workforce Management Platform
            </h1>

            <hr />

            <h2>Dashboard</h2>

            <table border="1">

                <tbody>

                    <tr>
                        <td>
                            Employees
                        </td>

                        <td>
                            {stats.employees}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Departments
                        </td>

                        <td>
                            {stats.departments}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Leave Requests
                        </td>

                        <td>
                            {stats.leaves}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Attendance Records
                        </td>

                        <td>
                            {stats.attendance}
                        </td>
                    </tr>

                </tbody>

            </table>

            <br />

            <Link to="/employees">
                <button>
                    Employees
                </button>
            </Link>

            <br />

            <Link to="/departments">
                <button>
                    Departments
                </button>
            </Link>

            <br />

            <Link to="/leaves">
                <button>
                    Leaves
                </button>
            </Link>

            <br />
            
            <Link to="/attendance">
                <button>
                    Attendance
                </button>
            </Link>

        </div>
    );
}

export default Dashboard;