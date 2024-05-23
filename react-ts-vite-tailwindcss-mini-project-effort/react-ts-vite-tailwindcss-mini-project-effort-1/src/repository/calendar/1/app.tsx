import React, { useState } from "react";

const CustomApp = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <Calendar onDateSelect={handleDateSelect} />
      <div>
        Selected Date:{" "}
        {selectedDate ? selectedDate.toLocaleDateString() : "None"}
      </div>
    </>
  );
};

export default CustomApp;

interface CalendarProps {
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };
  const renderDays = () => {
    const days = [];
    const startDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const endDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    const startDay = startDate.getDay();
    const endDay = endDate.getDate();

    for (let i = 1 - startDay; i <= endDay; i++) {
      const currentDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        i
      );
      days.push(
        <div
          key={currentDate.toDateString()}
          onClick={() => handleDateClick(currentDate)}
          className={
            currentDate.getMonth() === selectedDate.getMonth()
              ? "date"
              : "date disabled"
          }
        >
          {currentDate.getDate()}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      <div className="calendar border border-gray-300 rounded-md p-4">
        <div className="header flex items-center justify-between mb-4">
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1,
                  1
                )
              )
            }
            className="text-sm px-2 py-1 rounded-md bg-blue-500 text-white"
          >
            Prev
          </button>
          <div>
            {selectedDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </div>
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                  1
                )
              )
            }
            className="text-sm px-2 py-1 rounded-md bg-blue-500 text-white"
          >
            Next
          </button>
        </div>
        <div className="days grid grid-cols-7 gap-2">
          <div className="day">Sun</div>
          <div className="day">Mon</div>
          <div className="day">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>
          {renderDays()}
        </div>
      </div>
    </>
  );
};
