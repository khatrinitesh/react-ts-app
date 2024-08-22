import React from "react";
import { Link, Element } from "react-scroll";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <SectionApp />
    </>
  );
};

export default CustomApp;

interface Section {
    id: string;
    title: string;
    content: string;
  }

const sections: Section[] = [
    { id: "section1", title: "Section 1", content: "Content of Section 1" },
    { id: "section2", title: "Section 2", content: "Content of Section 2" },
    { id: "section3", title: "Section 3", content: "Content of Section 3" },
  ];

  const handleLinkClick = (id:string) => {
    console.log(`Link clicked for section ${id}`);
    
  }

  const handleSectionScroll = (id: string) => {
    console.log(`Scrolled to section ${id}`);
  };


  const SectionApp: React.FC = () => {
    return (
      <>
        <nav className="navbar">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  activeClass="active"
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleLinkClick(section.id)}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
  
        {sections.map((section) => (
          <Element
            key={section.id}
            name={section.id}
            className="section"
            onSetActive={() => handleSectionScroll(section.id)}
          >
            <section>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
          </Element>
        ))}
      </>
    );
  };
  
