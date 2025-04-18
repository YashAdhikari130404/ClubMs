import React, { useState, useEffect } from "react";
import axios from "axios";
import '../nss/register.css' 
import Pascnavbar from "./pascnavbar";

function Joinpasc() {
    const [notices, setNotices] = useState([]);
    const [showNotices, setShowNotices] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phno : "" ,
        year: "", 
        branch: "", 
        division: "",
        interest: "",
        reason: "",
        club_code: "pasc"
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/auth/getNotices/${formData.club_code}`)
        .then((response) => {
            if (response.data.enabled) {
                setNotices(response.data.notices);
            }
        });
    }, []);

    const handleShowMore = () => {
        setShowNotices((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/auth/submitApplication", formData)
        .then(result => {
            if(result.data.Status)
            {
                alert(result.data.Message)
                setFormData({ name: "", email: "", phno:"" , year: "", branch: "", division: "", interest: "", reason: "" , club_code: "nss"});
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
        <div>
            <Pascnavbar />
            <div className="joinnss-container">
            
                <div className="joinnss-card joinnss-notices">
                    <h2>📢 Notices</h2>
                    <button onClick={handleShowMore} className="joinnss-btn-toggle">
                        {showNotices ? "Hide Notices" : "Show More"}
                    </button>
                    <div className="joinnss-notices-list">
                        {showNotices ? (
                            notices.length > 0 ? (
                                notices.map((notice, index) => (
                                    <p key={index} className="joinnss-notice-item">{notice}</p>
                                ))
                            ) : (
                                <p className="joinnss-no-notice">No active notices</p>
                            )
                        ) : null}
                    </div>
                </div>

                <div className="joinnss-card joinnss-form-card">
                    <h2>📝 PASC Registration Form</h2>
                    <form onSubmit={handleSubmit} className="joinnss-form">
                        <input type="text" name="name" className="joinnss-input" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData , name : e.target.value})} required />

                        <input type="email" name="email" className="joinnss-input" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData , email : e.target.value})} required />

                        <input type="number" name="mobileno" className="joinnss-input" placeholder="Mobile Number" value={formData.phno} onChange={(e) => setFormData({...formData , phno : e.target.value})} required />

                        <select name="year" className="joinnss-select" value={formData.year} 
                        onChange={(e) => setFormData({...formData , year : e.target.value})} required>
                            <option value="" disabled> Select Year </option>
                            <option value="FE">FE (First Year)</option>
                            <option value="SE">SE (Second Year)</option>
                            <option value="TE">TE (Third Year)</option>
                        </select>

                        <select name="branch" className="joinnss-select" value={formData.branch} 
                        onChange={(e) => setFormData({...formData , branch : e.target.value})} required>
                            <option value="" disabled> Select Branch </option>
                            <option value="ENTC">ENTC (Electronics & Telecommunication)</option>
                            <option value="IT">IT (Information Technology)</option>
                            <option value="CS">CS (Computer Science)</option>
                        </select>

                        <input type="text" name="division" className="joinnss-input" placeholder="Division" value={formData.division} onChange={(e) => setFormData({...formData , division : e.target.value})} required />

                        <input type="text" name="interest" className="joinnss-input" placeholder="Field of Interest" value={formData.interest} onChange={(e) => setFormData({...formData , interest : e.target.value})} required />

                        <textarea name="reason" className="joinnss-textarea" placeholder="Why do you want to join PASC?" value={formData.reason} onChange={(e) => setFormData({...formData , reason : e.target.value})} required />

                        <button type="submit" className="joinnss-btn-submit">🚀 Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Joinpasc;
