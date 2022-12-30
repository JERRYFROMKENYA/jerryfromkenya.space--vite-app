import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className="form">
      <h1 className="form-title">Contact Us</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Enter your message" required />
      </div>
      <button type="submit" className="form-submit">Submit</button>
    </form>
  );
}

export default Form;
