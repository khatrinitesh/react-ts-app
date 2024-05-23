import React, { useState } from "react";

const CustomApp = () => {
 
  return (
    <>
        <MeetTheTeam/>
    </>
  );    
};

export default CustomApp;

interface TeamMember{
    name:string;
    role:string;
    desc:string;
    imgUrl:string;
}

const team:TeamMember[] = [
    {
        name: 'John Doe',
        role: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgUrl: 'https://via.placeholder.com/150',
      },
      {
        name: 'Jane Smith',
        role: 'CTO',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgUrl: 'https://via.placeholder.com/150',
      },
      // Add more team members as needed
]

const MeetTheTeam:React.FC = () => {
    return(
        <>
         <h2>Meet the Team</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Map over the team array and render each team member */}
            {team.map((member,index) => (
                <div key={index}  className="bg-gray-200 p-4 rounded">
                    <img src={member.imgUrl} alt={member.name} className="w-full h-auto rounded mb-4" />
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="mt-2">{member.description}</p>
                </div>
            ))}
         </div>
         </>
    )
}