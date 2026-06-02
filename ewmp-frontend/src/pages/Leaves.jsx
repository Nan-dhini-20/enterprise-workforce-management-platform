import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Leaves() {

    const navigate = useNavigate();

    const [leaves, setLeaves] =
        useState([]);

    useEffect(() => {

        fetchLeaves();

    }, []);

    const updateStatus = async (
    leaveId,
    status
) => {

    try {

        await API.put(
            `/leave-requests/${leaveId}/status?status=${status}`
        );

        fetchLeaves();

    } catch (error) {

        console.error(error);

        alert(
            "Failed to update leave status"
        );
    }
};

    const fetchLeaves = async () => {

        try {

            const response =
                await API.get("/leave-requests");

            setLeaves(
                response.data
            );

        } catch (error) {

            console.error(error);

            alert(
                "Failed to load leaves"
            );
        }
    };

    return (
        <div>

            <h1>
                Leave Requests
            </h1>

            <button
                onClick={() =>
                    navigate(
                        "/add-leave"
                    )
                }
            >
                Apply Leave
            </button>

            <br /><br />

            <table border="1">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Employee</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {leaves.map(
                        (leave) => (

                        <tr
                            key={
                                leave.leaveId
                            }
                        >

                            <td>
                                {leave.leaveId}
                            </td>

                            <td>
                                {
                                  leave.employee?.name
                                }
                            </td>

                            <td>
                                {
                                  leave.startDate
                                }
                            </td>

                            <td>
                                {
                                  leave.endDate
                                }
                            </td>

                            <td>
                                {
                                  leave.reason
                                }
                            </td>

                            <td>
                                {
                                  leave.status
                                }
                            </td>

                            <td>

                                <button
                                    onClick={() =>
                                        updateStatus(
                                            leave.leaveId,
                                            "APPROVED"
                                        )
                                    }
                                >
                                    Approve
                                </button>

                                <button
                                    onClick={() =>
                                        updateStatus(
                                            leave.leaveId,
                                            "REJECTED"
                                        )
                                    }
                                >
                                    Reject
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Leaves;