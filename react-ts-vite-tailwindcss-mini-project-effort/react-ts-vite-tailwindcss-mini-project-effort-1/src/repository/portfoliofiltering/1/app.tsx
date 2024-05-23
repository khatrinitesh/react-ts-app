import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
  
  return (
    <>
      <Portfolio />
    </>
  );
};

export default CustomApp;

interface Project {
  id: number;
  name: string;
  category: string;
}

const projectsData: Project[] = [
    { id: 1, name: 'Project 1', category: 'Web Design' },
    { id: 2, name: 'Project 2', category: 'App Development' },
    { id: 3, name: 'Project 3', category: 'Web Development' },
    { id: 4, name: 'Project 4', category: 'Graphic Design' },
    { id: 5, name: 'Project 5', category: 'App Development' },
  ];
  
  const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [projects, setProjects] = useState<Project[]>(projectsData);
  
    const filterProjects = (category: string) => {
      if (category === 'All') {
        setProjects(projectsData);
      } else {
        const filteredProjects = projectsData.filter(project => project.category === category);
        setProjects(filteredProjects);
      }
      setSelectedCategory(category);
    };
  
    return (
        <div style={{ fontFamily: 'Arial', backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '5px' }}>
        <div style={{ marginBottom: '10px' }}>
          <button
            style={{ marginRight: '10px', padding: '5px 10px', borderRadius: '5px', backgroundColor: selectedCategory === 'All' ? '#007bff' : '#e7e7e7', color: selectedCategory === 'All' ? '#fff' : '#333' }}
            onClick={() => filterProjects('All')}
          >
            All
          </button>
          <button
            style={{ marginRight: '10px', padding: '5px 10px', borderRadius: '5px', backgroundColor: selectedCategory === 'Web Design' ? '#007bff' : '#e7e7e7', color: selectedCategory === 'Web Design' ? '#fff' : '#333' }}
            onClick={() => filterProjects('Web Design')}
          >
            Web Design
          </button>
          {/* Add more buttons for other categories */}
        </div>
        <div>
          {projects.map(project => (
            <div key={project.id} style={{ backgroundColor: '#fff', padding: '10px', marginBottom: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '5px' }}>{project.name}</h3>
              <p style={{ color: '#666' }}>{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
