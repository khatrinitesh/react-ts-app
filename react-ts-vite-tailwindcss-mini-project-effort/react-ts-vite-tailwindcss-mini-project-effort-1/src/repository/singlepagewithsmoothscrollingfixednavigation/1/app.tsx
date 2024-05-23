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


const SectionApp:React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          {sections.map((section) => (
            const {id,title} = section
            <li key={id}>
              <Link
              activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleLinkClick(id)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {sections.map((section) => (
        const {id,title,content} = section
        <Element key={id} name={id} className="section" onSetActive={() => handleSectionScroll(id)}> 
          <section>
            <h2>{title}</h2>
            <p>{content}</p>
          </section>
        </Element>
      ))}
    </>
  );
};
