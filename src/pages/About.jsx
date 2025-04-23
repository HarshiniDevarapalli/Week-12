import React from 'react';

const About = () => (
  <div className="container mt-4">
    <div className="card shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
      <div className="card-body">
        <h2 className="card-title text-center text-primary mb-4">About</h2>
        <p className="card-text text-secondary">
          This is a simple mentoring application built using React. It allows users to register, login,
          and access contact and about information. The project demonstrates routing and basic form handling
          with a clean user interface.
        </p>
      </div>
    </div>
  </div>
);

export default About;
