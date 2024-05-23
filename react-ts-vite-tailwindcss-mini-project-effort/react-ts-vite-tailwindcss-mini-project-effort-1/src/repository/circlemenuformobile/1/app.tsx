import React,{useState} from "react";
import "./style.css";

const CustomApp = () => {

    const menuItems = [
        {
          icon: "fa fa-home",
          label: "Home",
          action: () => {
            console.log("Navigate to Home");
          }
        },
        {
          icon: "fa fa-search",
          label: "Search",
          action: () => {
            console.log("Navigate to Search");
          }
        },
        {
          icon: "fa fa-user",
          label: "Profile",
          action: () => {
            console.log("Navigate to Profile");
          }
        }
        // Add more menu items as needed
      ];
  return <div>
    <CircleMenu items={menuItems}/>
  </div>;
};

export default CustomApp;

interface MenuItem {
  icon: string;
  label: string;
  action: () => void;
}

const CircleMenu: React.FC<{items:MenuItem[]}> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`circle-menu ${isOpen ? "open" : ""}`}>
        <button className="toggle-button" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
        <ul className="menu-items">
          {items.map((item, index) => (
            <li
              key={index}
              className="menu-item"
              style={{ "--index": index } as React.CSSProperties}
            >
              <button
                onClick={() => {
                  item.action();
                  toggleMenu();
                }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
