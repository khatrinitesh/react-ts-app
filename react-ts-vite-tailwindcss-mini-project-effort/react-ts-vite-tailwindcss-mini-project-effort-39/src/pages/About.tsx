import React, { useState } from "react";

const About: React.FC = () => {
  const [display, setDisplay] = useState(true);

  const person = [
    { id: 1, name: "test1", amt: 3000 },
    { id: 2, name: "test2", amt: 4000 },
    { id: 3, name: "test3", amt: 5000 },
    { id: 4, name: "test4", amt: 6000 },
  ];
  const filteredPeople = person.filter((val) => val.name === "test1");

  const username = 'nitesh khatri'
  return (
    <>
      <div className="content">
      <div className="container mx-auto px-[1rem]">

        {/* Top-level conditional rendering */}
        {display ? (
          <>
            <Example1 />

            {/* Nested condition: only show if there's at least one person */}
            {filteredPeople.length > 0 ? (
              filteredPeople.map((p) => (
                <div key={p.id} className="border p-4 my-2 rounded bg-gray-100">
                  <p>Name: {p.name}</p>
                  <p>Amount: ${p.amt}</p>

                  {/* Nested conditional rendering inside each person */}
                  {p.amt > 3500 ? (
                    <p className="text-green-600 font-bold">Eligible for Bonus</p>
                  ) : (
                    <p className="text-red-500">Not Eligible</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No matching people found.</p>
            )}
          </>
        ) : (
          <p className="text-sm text-gray-400">Display is turned off.</p>
        )}

        {/* Toggle button for testing */}
        <button
          onClick={() => setDisplay((prev) => !prev)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Display
        </button>
        <br /><br />
        <Example2 user={username}/>
      </div>
      
    </div>
    </>
  );
};

export default About;

function Example1() {
  return <>Example 1</>;
}
function Example2({user}){
  return(
    <>
    {user}
    </>
  )
}
