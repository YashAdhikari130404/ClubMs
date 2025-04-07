import { useState, useEffect } from "react";
import axios from "axios";

function Notice()
{
    const [clubCode, setClubCode] = useState("");
    const [notice, setNotice] = useState("");
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = () => {
        axios.get("http://localhost:3000/auth/getAllNotices")
            .then((res) => {
                if (res.data.Status) setNotices(res.data.data);
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/auth/sendNotice", { club_code: clubCode, notice })
        .then((res) => {
            if (res.data.Status) {
                alert("Notice sent successfully!");
                setNotice("");
                setClubCode("");
            } else {
                alert("" + (res.data.Error || "Something went wrong"));
            }
        })
        .catch(err => {
            console.error(err);
            alert("⚠️ Failed to send notice. Please try again.");
        });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this notice?")) {
            axios.delete(`http://localhost:3000/auth/deleteNotice/${id}`)
                .then((res) => {
                    if (res.data.Status) {
                        alert("Notice deleted!");
                        fetchNotices();
                    }
                });
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-header bg-danger-subtle text-center text-danger">
                    <h4 className="mb-0">Send Club Notice</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {/* Club Selector */}
                        <div className="mb-3">
                            <label htmlFor="clubCode" className="form-label">Select Club</label>
                            <select
                                id="clubCode"
                                className="form-select"
                                value={clubCode}
                                onChange={(e) => setClubCode(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select a club</option>
                                <option value="nss">NSS</option>
                                <option value="edc">EDC</option>
                                <option value="pasc">PASC</option>
                            </select>
                        </div>

                        {/* Notice Input */}
                        <div className="mb-3">
                            <label htmlFor="notice" className="form-label">Notice Content</label>
                            <textarea
                                id="notice"
                                className="form-control"
                                rows="5"
                                placeholder="Type your notice here..."
                                value={notice}
                                onChange={(e) => setNotice(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                 Send Notice
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <hr />  
            <div className="mt-5">
                <h4 className="mb-3">All Notices</h4>
                <table className="table table-bordered table-hover shadow-sm">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Club</th>
                            <th>Notice</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((n, i) => (
                            <tr key={n.id}>
                                <td>{i + 1}</td>
                                <td>{n.club_code.toUpperCase()}</td>
                                <td>{n.notice}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(n.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {notices.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">No notices found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Notice ;