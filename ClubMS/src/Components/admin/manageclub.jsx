import axios from "axios";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function ManageClub()
{
    const [clubs , setClubs] = useState([]) 
    useEffect(() => {
        axios.get('http://localhost:3000/auth/clubs')
        .then(result => {
            if(result.data.Status)
            {
                setClubs(result.data.Result)
            }
            else
            {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    } , [])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this club?")) {
            axios.delete(`http://localhost:3000/auth/deleteclub/${id}`)
                .then(result => {
                    if (result.data.Status) {
                        alert("Club deleted successfully!");
                        setClubs(prevClubs => prevClubs.filter(club => club.id !== id));
                    } else {
                        alert(result.data.Error);
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <div className="px-5 mt-5">
                <div className="d-flex justify-content-center">
                    <h3 className="text-primary">Clubs List</h3>
                </div>
                <div className="mt-3 text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Descrption</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clubs.map(c => (
                                    <tr>
                                        <td>{c.id}</td>
                                        <td>{c.name}</td>
                                        <td>{c.description}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(c.id)}
                                                >
                                                <FaTrashAlt className="me-1" /> Delete 
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>      
                    </table>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/admin-dashboard/addclubs" className="btn btn-primary">Add Club</Link>
                </div>
            </div>
        </div>
    )
}

export default ManageClub ;