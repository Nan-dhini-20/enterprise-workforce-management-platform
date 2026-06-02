import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");
    };

    return (
        <div>

            <h1>EWMP Dashboard</h1>

            <button
                onClick={() => navigate("/employees")}
            >
                View Employees
            </button>

            <br /><br />
            <button
                onClick={() =>
                    navigate("/departments")
                }
            >
                View Departments
            </button>

            <br /><br />

            <button
                onClick={() =>
                    navigate("/add-department")
                }
            >
                Add Department
            </button>

            <br /><br />

            <button
                onClick={() =>
                    navigate("/attendance")
                }
            >
                Attendance Management
            </button>

            <br /><br />

            <button
                onClick={() =>
                    navigate("/leaves")
                }
            >
                Leave Management
            </button>

            <br /><br />
            
            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;