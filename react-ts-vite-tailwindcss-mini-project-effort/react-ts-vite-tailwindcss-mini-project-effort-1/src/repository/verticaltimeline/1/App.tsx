import React from "react";

const App: React.FC = () => {
  return(
    <>
    <VerticalTimeLine/>
    </>
  )
};

export default App;

type TimeLineItem = {
  date: string;
  title: string;
  desc: string;  // Ensure this matches the TIMELINE_ITEMS array
};

const TIMELINE_ITEMS: TimeLineItem[] = [
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },{
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
  {
    date: "2024-01-01",
    title: "New Year's Day",
    description: "Celebration of the new year.",
  },
  {
    date: "2024-02-14",
    title: "Valentine's Day",
    description: "A day to celebrate love and affection.",
  },
];

const VerticalTimeLine: React.FC = () => {
  return (
    <>
       <div className="relative">
      <div className="border-l-2 border-gray-300">
        {TIMELINE_ITEMS.map((item, index) => {
          // Destructuring the item
          const { date, title, description } = item;

          return (
            <div key={index} className="mb-8 last:mb-0 flex items-center">
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="ml-6">
                <div className="text-sm font-semibold text-gray-700">{date}</div>
                <div className="text-lg font-bold text-gray-900 mt-1">{title}</div>
                <div className="text-gray-600 mt-1">{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  )
};
