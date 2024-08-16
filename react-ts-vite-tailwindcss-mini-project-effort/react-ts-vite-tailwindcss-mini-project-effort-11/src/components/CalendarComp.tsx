import React, { useState } from 'react'
import { MONTH_NAMES, WEEK_DAYS } from '../constants/constants';
import  { getDaysInMonth,getFirstDayOfMonth } from '../utility/calculationsFormatting';

const CalendarComp = () => {
    const handleDateSelect = (date: Date) => {
        console.log('Selected date:', date);
      };
  return (
    <>
        <Calendar onDateSelect={handleDateSelect} />
    </>
  )
}

export default CalendarComp;

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
    const [state, setState] = useState<CalendarState>({
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: null,
    });
  
    const handleDateClick = (date: Date) => {
      setState(prev => ({
        ...prev,
        selectedDate: date
      }));
      onDateSelect(date);
    };
  
    const handlePrevMonth = () => {
      setState(prev => ({
        ...prev,
        currentMonth: prev.currentMonth === 0 ? 11 : prev.currentMonth - 1,
        currentYear: prev.currentMonth === 0 ? prev.currentYear - 1 : prev.currentYear
      }));
    };
  
    const handleNextMonth = () => {
      setState(prev => ({
        ...prev,
        currentMonth: prev.currentMonth === 11 ? 0 : prev.currentMonth + 1,
        currentYear: prev.currentMonth === 11 ? prev.currentYear + 1 : prev.currentYear
      }));
    };
  
    const days = getDaysInMonth(state.currentMonth, state.currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(state.currentMonth, state.currentYear);
    
    return (
      <div className="calendar">
        <header>
          <button onClick={handlePrevMonth}>Previous</button>
          <h2>{MONTH_NAMES[state.currentMonth]} {state.currentYear}</h2>
          <button onClick={handleNextMonth}>Next</button>
        </header>
        <div className="week-days">
          {WEEK_DAYS.map(day => <div key={day} className="day-name">{day}</div>)}
        </div>
        <div className="days">
          {Array(firstDayOfMonth).fill(null).map((_, index) => (
            <div key={index} className="empty-day"></div>
          ))}
          {days.map(day => (
            <div
              key={day.toString()}
              className={`day ${day.getDate() === (state.selectedDate?.getDate() || -1) ? 'selected' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              {day.getDate()}
            </div>
          ))}
        </div>
      </div>
    );
  };
  