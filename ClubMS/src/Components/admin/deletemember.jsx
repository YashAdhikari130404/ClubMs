import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

function Deletemember()
{
    const [selectedClub, setSelectedClub] = useState("");
    const [members, setMembers] = useState([]);

    const clubs = [
        { code: "nss", name: "NSS" },
        { code: "edc", name: "EDC" },
        { code: "pasc", name: "PASC" },
    ];

    const fetchMembers = async (clubCode) => {
        try {
          const res = await axios.get(`http://localhost:3000/auth/getMembers?club_code=${clubCode}`);
          if (res.data.Status) {
            setMembers(res.data.Result);
          } else {
            alert("Failed to fetch members");
          }
        } catch (error) {
          console.error("Error fetching members:", error);
        }
    };

    const handleClubChange = (e) => {
        const clubCode = e.target.value;
        setSelectedClub(clubCode);
        fetchMembers(clubCode);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this member?")) {
          axios
            .delete(`http://localhost:3000/auth/deletemember/${id}`)
            .then((result) => {
              if (result.data.Status) {
                alert("Member deleted successfully!");
                setMembers((prev) => prev.filter((m) => m.id !== id));
              } else {
                alert(result.data.Error);
              }
            })
            .catch((err) => console.log(err));
        }
    };
    
    return (
        <div className="container mt-5">
            <h3 className="text-danger text-center mb-4">Delete Club Members</h3>

            <div className="d-flex justify-content-center mb-4">
                <select className="form-select w-50" value={selectedClub} onChange={handleClubChange}>
                <option value="">-- Select a Club --</option>
                {clubs.map((club) => (
                    <option key={club.code} value={club.code}>
                    {club.name}
                    </option>
                ))}
                </select>
            </div>

            {members.length > 0 ? (
                <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone no</th>
                        <th>Year</th>
                        <th>Branch</th>
                        <th>Interest</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>{member.phno}</td>
                        <td>{member.year}</td>
                        <td>{member.branch}</td>
                        <td>{member.interest}</td>
                        <td>
                            <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(member.id)}
                            >
                            <FaTrashAlt className="me-1" /> Delete
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            ) : selectedClub ? (
                <p className="text-center mt-4 text-danger">No members found for {selectedClub.toUpperCase()}.</p>
            ) : null}
        </div>
    )
}

export default Deletemember