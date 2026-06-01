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

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Dashboard;