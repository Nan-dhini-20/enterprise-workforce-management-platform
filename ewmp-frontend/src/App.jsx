import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import ProtectedRoute from "./components/ProtectedRoute";
import AddEmployee from "./pages/AddEmployee";
import Departments from "./pages/Departments";
import AddDepartment from "./pages/AddDepartment";
import UpdateEmployee from "./pages/UpdateEmployee";
import Leaves from "./pages/Leaves";
import AddLeave from "./pages/AddLeave";
import Attendance from "./pages/Attendance";
import AddAttendance from "./pages/AddAttendance";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
            path="/employees"
            element={
                <ProtectedRoute>
                    <Employees />
                </ProtectedRoute>
            }
        />
        <Route
            path="/add-employee"
            element={<AddEmployee />}
        />
        <Route
            path="/departments"
            element={
                <ProtectedRoute>
                    <Departments />
                </ProtectedRoute>
            }
        />
        <Route
            path="/add-department"
            element={
                <ProtectedRoute>
                    <AddDepartment />
                </ProtectedRoute>
            }
        />
        <Route
            path="/update-employee/:id"
            element={<UpdateEmployee />}
        />
        <Route
            path="/leaves"
            element={<Leaves />}
        />

        <Route
            path="/add-leave"
            element={<AddLeave />}
        />
        <Route
            path="/attendance"
            element={<Attendance />}
        />

        <Route
            path="/add-attendance"
            element={<AddAttendance />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;