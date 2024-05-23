import React,{useState } from "react";

const CustomApp = () => {
    const skills: Skill[] = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 90 },
        { name: 'Angular', level: 100 },
      ];
  return (
    <>
     <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Skills</h1>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
    </>
  )
};

export default CustomApp;



interface Skill {
    name: string;
    level: number;
  }
  
  interface SkillBarProps {
    skill: Skill;
  }

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="font-bold">{skill.name}</span>
          <span>{skill.level}%</span>
        </div>
        <div className="relative bg-gray-300 w-full h-4 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 bg-blue-500 h-full rounded-full"
          style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
      </div>
    );
  };
  
