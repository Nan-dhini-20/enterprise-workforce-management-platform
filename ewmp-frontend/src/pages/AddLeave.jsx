import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddLeave() {

    const navigate = useNavigate();

    const [leave, setLeave] = useState({
        startDate: "",
        endDate: "",
        reason: "",
        status: "PENDING",
        employeeId: ""
    });

    const handleSubmit = async () => {

        try {

            await API.post("/leave-requests", {

                startDate: leave.startDate,
                endDate: leave.endDate,
                reason: leave.reason,
                status: leave.status,

                employee: {
                    employeeId:
                        Number(
                            leave.employeeId
                        )
                }

            });

            alert(
                "Leave Request Added Successfully"
            );

            navigate("/leaves");

        } catch (error) {

            console.error(error);

            alert(
                "Failed to Add Leave Request"
            );
        }
    };

    return (
        <div>

            <h1>Apply Leave</h1>

            <input
                type="number"
                placeholder="Employee ID"
                onChange={(e) =>
                    setLeave({
                        ...leave,
                        employeeId:
                            e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="date"
                onChange={(e) =>
                    setLeave({
                        ...leave,
                        startDate:
                            e.target.value
                    })
                }
            />

            <br /><br />

            <input
                type="date"
                onChange={(e) =>
                    setLeave({
                        ...leave,
                        endDate:
                            e.target.value
                    })
                }
            />

            <br /><br />

            <input
                placeholder="Reason"
                onChange={(e) =>
                    setLeave({
                        ...leave,
                        reason:
                            e.target.value
                    })
                }
            />

            <br /><br />

            <button
                onClick={handleSubmit}
            >
                Apply Leave
            </button>

        </div>
    );
}

export default AddLeave;