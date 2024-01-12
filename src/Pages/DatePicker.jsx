// components/DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../Css/Datepicker.css"
const DatePickerfunction = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePicker

      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM/yyyy"
      showMonthYearPicker
    />
  );
};

export default DatePickerfunction;
