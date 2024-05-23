import React, { useState } from "react";

const CustomApp = () => {
    const [items,setItems] = useState([
        {
            id: 1,
            name: "title1",
            img: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            jobtitle: "frontend developer",
            jobdesc: "Dolor excepteur sit non qui qui tempor.",
            subscribe: "55k",
            status: "view" | "happy",
          },
          {
              id: 2,
              name: "title1",
              img: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              jobtitle: "frontend developer",
              jobdesc: "Dolor excepteur sit non qui qui tempor.",
              subscribe: "55k",
              status: "view" | "happy",
            },
            {
              id: 3,
              name: "title1",
              img: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              jobtitle: "frontend developer",
              jobdesc: "Dolor excepteur sit non qui qui tempor.",
              subscribe: "55k",
              status: "view" | "happy",
            },
            {
              id: 4,
              name: "title1",
              img: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              jobtitle: "frontend developer",
              jobdesc: "Dolor excepteur sit non qui qui tempor.",
              subscribe: "55k",
              status: "view" | "happy",
            },
            {
              id: 5,
              name: "title1",
              img: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              jobtitle: "frontend developer",
              jobdesc: "Dolor excepteur sit non qui qui tempor.",
              subscribe: "55k",
              status: "view" | "happy",
            },
    ])

    const handleDel = (id: number) => {
        const newData = items.filter((val) => val.id !== id);
        setItems(newData);
        console.log(`Deleting item with id: ${id}`);
      };
  return (
    <>
      <SearchProfile items={items} onDel={handleDel} />
    </>
  );
};

export default CustomApp;

interface SearchProfile {
  id: number;
  img: string;
  name: string;
  jobtitle: string;
  jobdesc: string;
  subscribe: string | number;
  status: string;
}

interface SearchProfileProps {
  items: SearchProfile[];
  onDel:(id:number) => void;
}

const SearchProfile: React.FC<SearchProfileProps> = ({ items,onDel }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((val) => (
          <div key={val.id} className="p-4 bg-white rounded-lg shadow-md">
            <button onClick={() => onDel(val.id)} className="text-red-600">
                Delete
            </button>
            <img
              src={val.img}
              alt={val.name}
              className="w-full h-auto mb-4 rounded-md"
            />
            <h3 className="text-xl font-bold mb-2">{val.name}</h3>
            <span className="text-sm mb-2">{val.jobtitle}</span>
            <br />
            <span className="text-sm mb-2">{val.jobdesc}</span>
            <div className="mt-4">
              <span className="text-xs mr-2">{val.subscribe}</span>
              <br />
              <span className="text-xs">{val.status}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
