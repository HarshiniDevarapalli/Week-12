import React, { useState } from 'react';
import '../App.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    number: '',
    email: '',
    age: '',
    gender: '',
    rollNumber: '',
    branch: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered Successfully!\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />

        <label>Second Name</label>
        <input type="text" name="secondName" onChange={handleChange} value={formData.secondName} />

        <label>Phone Number</label>
        <input type="text" name="number" onChange={handleChange} value={formData.number} />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} value={formData.email} />

        <label>Age</label>
        <input type="number" name="age" onChange={handleChange} value={formData.age} />

        <label>Gender</label>
        <select name="gender" onChange={handleChange} value={formData.gender}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Roll Number</label>
        <input type="text" name="rollNumber" onChange={handleChange} value={formData.rollNumber} />

        <label>Branch</label>
        <input type="text" name="branch" onChange={handleChange} value={formData.branch} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
