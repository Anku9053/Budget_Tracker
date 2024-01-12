import React, { useState } from 'react';
import '../Css/FormSample.css';

function FormSample() {
  const [formData, setFormData] = useState({
    date: '',
    category: 'food',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="FormSample">
      <form onSubmit={handleSubmit} className="expense-form">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
        <br/>

        <label htmlFor="date">Category:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={formData.category}
          onChange={handleInputChange}
          required
        />
        <br/>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0.01"
          step="0.01"
          value={formData.amount}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormSample;
