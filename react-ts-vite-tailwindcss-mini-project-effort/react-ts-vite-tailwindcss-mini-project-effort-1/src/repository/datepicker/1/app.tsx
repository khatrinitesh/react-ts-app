import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomApp = () => {
  return (
    <>
      <MyDatePicker/>
    </>
  )
}

export default CustomApp

// Custom hook to manage date state
const useDatePicker = (initialDate: Date | null) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return {
    selectedDate,
    handleChange,
  };
};

const MyDatePicker: React.FC = () => {
  const { selectedDate, handleChange } = useDatePicker(new Date());

  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
};

