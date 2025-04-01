import React, { useState, useEffect } from "react";
import axios from "axios";
import "./register.css"; 
import Mynavbar from "./navbar";

function Joinnss() {
    const [notices, setNotices] = useState([]);
    const [showNotices, setShowNotices] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        year: "", 
        branch: "", 
        division: "",
        interest: "",
        reason: "",
    });

    useEffect(() => {
        axios.get("http://localhost:5000/getNotices").then((response) => {
            if (response.data.enabled) {
                setNotices(response.data.notices);
            }
        });
    }, []);

    const handleShowMore = () => {
        setShowNotices((prev) => !prev);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/submitApplication", formData);
            alert("Application submitted successfully!");
            setFormData({ name: "", email: "", year: "", branch: "", division: "", interest: "", reason: "" });
        } catch (error) {
            alert("Error submitting application");
        }
    };

    return (
        <div>
            <Mynavbar />
            <div className="joinnss-container">
            
                {/* Notices Section */}
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

                {/* Registration Form */}
                <div className="joinnss-card joinnss-form-card">
                    <h2>📝 NSS Registration Form</h2>
                    <form onSubmit={handleSubmit} className="joinnss-form">
                        <input type="text" name="name" className="joinnss-input" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" className="joinnss-input" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

                        {/* Year Selection */}
                        <select name="year" className="joinnss-select" value={formData.year} onChange={handleChange} required>
                            <option value="" disabled> Select Year </option>
                            <option value="FE">FE (First Year)</option>
                            <option value="SE">SE (Second Year)</option>
                            <option value="TE">TE (Third Year)</option>
                        </select>

                        {/* Branch Selection */}
                        <select name="branch" className="joinnss-select" value={formData.branch} onChange={handleChange} required>
                            <option value="" disabled> Select Branch </option>
                            <option value="ENTC">ENTC (Electronics & Telecommunication)</option>
                            <option value="IT">IT (Information Technology)</option>
                            <option value="CS">CS (Computer Science)</option>
                        </select>
                        <input type="text" name="division" className="joinnss-input" placeholder="Division" value={formData.division} onChange={handleChange} required />
                        <input type="text" name="interest" className="joinnss-input" placeholder="Field of Interest" value={formData.interest} onChange={handleChange} required />
                        <textarea name="reason" className="joinnss-textarea" placeholder="Why do you want to join NSS?" value={formData.reason} onChange={handleChange} required />

                        <button type="submit" className="joinnss-btn-submit">🚀 Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Joinnss;
