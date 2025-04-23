import React from 'react';

const Contact = () => (
  <div className="container mt-4">
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h2 className="card-title text-center text-primary mb-4">Contact Us</h2>
        <p className="card-text mb-3 text-secondary">
          For any queries, please reach out to us through the following:
        </p>
        <p className="mb-2 text-dark">
          📧 Email: <a href="mailto:support@studentsystem.com" className="text-decoration-none text-primary">support@studentsystem.com</a>
        </p>
        <p className="text-dark">📞 Phone: +91-1234567890</p>
      </div>
    </div>
  </div>
);

export default Contact;
