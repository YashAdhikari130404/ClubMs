import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./profile.css"; // Create a separate CSS file for custom styles

function Profile() {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: "",
    prn: "",
    mobile: "",
    whatsapp: false,
    whatsappNo: "",
    branch: "",
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <Container className="py-5 profile-container">
      <h2 className="text-center mb-4">User Profile</h2>
      <Form onSubmit={handleSubmit} className="profile-form shadow-lg p-4 rounded">
        
        {/* Name */}
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        {/* PRN Number */}
        <Form.Group controlId="formPRN" className="mb-3">
          <Form.Label>PRN Number</Form.Label>
          <Form.Control
            type="text"
            name="prn"
            value={formData.prn}
            onChange={handleChange}
            placeholder="Enter PRN number"
            required
          />
        </Form.Group>

        {/* Mobile Number */}
        <Form.Group controlId="formMobile" className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </Form.Group>

        {/* WhatsApp Checkbox */}
        <Form.Group controlId="formWhatsapp" className="mb-3">
          <Form.Check
            type="checkbox"
            name="whatsapp"
            checked={formData.whatsapp}
            onChange={handleChange}
            label="Is this number a WhatsApp number?"
          />
        </Form.Group>

        {/* Alternative WhatsApp Number */}
        {!formData.whatsapp && (
          <Form.Group controlId="formWhatsappNo" className="mb-3">
            <Form.Label>Alternative WhatsApp Number</Form.Label>
            <Form.Control
              type="text"
              name="whatsappNo"
              value={formData.whatsappNo}
              onChange={handleChange}
              placeholder="Enter WhatsApp number"
            />
          </Form.Group>
        )}

        {/* Branch Selection */}
        <Form.Group controlId="formBranch" className="mb-3">
          <Form.Label>Branch</Form.Label>
          <Form.Select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ENTC">ENTC</option>
            <option value="AIDS">AIDS</option>
            <option value="ECE">ECE</option>
          </Form.Select>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Submit Profile
        </Button>
      </Form>
    </Container>
  );
}

export default Profile;
