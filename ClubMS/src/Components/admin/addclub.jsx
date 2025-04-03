import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addclubs()
{
    const [clubs , setClubs] =  useState({clubname:"" , clubdesc:""})
    const navigate = useNavigate() ;

    function handleSubmit(e)
    {
        e.preventDefault() ;
        axios.post('http://localhost:3000/auth/addclubs', {clubs})
        .then(result => {
            if(result.data.Status)
            {
                navigate('/admin-dashboard/clubmanage')
            }
            else
            {
                alert(result.data.Error)
            }
        }
        )
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center h-75">
            <div className="p-3 rounded w-25 border">
                <h2 className="text-primary text-center">Add a Club</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="adminclub"><strong>Club : </strong></label>
                        <input type="text" name="adminclub" placeholder="Enter club" 
                        onChange={(e) => setClubs({...clubs , clubname : e.target.value})} 
                        className="form-control rounded-0 mt-1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="clubdesc"><strong>Description : </strong></label>
                        <textarea name="clubdesc" id="clubdesc" 
                        onChange={(e) => setClubs({...clubs , clubdesc : e.target.value})} 
                        className="form-control rounded-0 mt-1" />
                    </div>
                    <button className="btn btn-primary w-100 rounded-0 mb-2">Add</button>
                </form>
            </div>
        </div>
    )
}

export default Addclubs ;