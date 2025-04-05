import React, { useEffect, useState } from "react";
import axios from "axios";

function Addmember()
{
    const [applications, setApplications] = useState([]);
    useEffect(() => {
        fetchPendingApplications();
    }, []);

    const fetchPendingApplications = async () => {
        try {
          const res = await axios.get("http://localhost:3000/auth/pendingApplications");
          if (res.data.Status) {
            setApplications(res.data.Result);
          } else {
            alert("Failed to fetch applications");
          }
        } catch (err) {
          console.error(err);
          alert("Error fetching applications");
        }
    };
    
    const handleAccept = async (id) => {
        try {
          const res = await axios.post("http://localhost:3000/auth/acceptApplication", {
            application_id: id,
          });
          if (res.data.Status) {
            alert(" Member added successfully!");  
            setApplications(prev => prev.filter(app => app.id !== id));
          } else {
            alert(res.data.Error);
          }
        } catch (err) {
          console.error(err);
          alert("Error accepting application");
        }
    };

    const handleReject = async (id) => {
        try {
          const res = await axios.post("http://localhost:3000/auth/rejectApplication", {
            application_id: id,
          });
          if (res.data.Status) {
            alert("Application rejected!");
            setApplications(prev => prev.filter(app => app.id !== id));
          } else {
            alert(res.data.Error);
          }
        } catch (err) {
          console.error(err);
          alert("Error rejecting application");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Pending Club Applications</h2>
            {applications.length === 0 ? (
                <div className="alert alert-info">No pending applications.</div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-bordered align-middle">
                        <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Year</th>
                            <th>Branch</th>
                            <th>Division</th>
                            <th>Interest</th>
                            <th>Reason</th>
                            <th>Club</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {applications.map((app) => (
                            <tr key={app.id}>
                            <td>{app.name}</td>
                            <td>{app.email}</td>
                            <td>{app.phno}</td>
                            <td>{app.year}</td>
                            <td>{app.branch}</td>
                            <td>{app.division}</td>
                            <td>{app.interest}</td>
                            <td>{app.reason}</td>
                            <td>{app.club_code.toUpperCase()}</td>
                            <td>
                                <button
                                className="btn btn-success btn-sm me-2"
                                onClick={() => handleAccept(app.id)}
                                >
                                Accept
                                </button>
                                <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleReject(app.id)}
                                >
                                Reject
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Addmember ;